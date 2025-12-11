import { kv } from "@vercel/kv"; 
import { Redis } from "@upstash/redis"; 

function getTodayDate() {
  return new Date().toISOString().slice(0, 10);
}

let redisClient;
let clientName = 'Vercel KV (Production)';
let isLocalFail = false; // Flag untuk menandai kegagalan di lokal

// Inisialisasi: Coba Upstash secara manual jika bukan di lingkungan Vercel
if (process.env.NODE_ENV === 'development' || !kv || kv.incr === undefined) {
    clientName = 'Upstash Redis (Local Fallback)';
    
    const url = process.env.KV_REST_API_URL;
    const token = process.env.KV_REST_API_TOKEN;
    
    if (url && token) {
        // Jika variabel terbaca, coba inisialisasi. 
        // Jika inisialisasi gagal (mis. URL error), error akan ditangkap di blok catch GET()
        redisClient = new Redis({ url, token });
    } else {
        // Jika variabel tidak terbaca (masalah .env.local), atur flag silent fail
        isLocalFail = true; 
    }
} else {
    // Di lingkungan Vercel, kita gunakan kv
    redisClient = kv;
}


export async function GET() {
    // Di lingkungan development, jika koneksi gagal (isLocalFail=true), 
    // kembalikan data 0 dengan status 200 OK untuk menghindari error notif di terminal.
    if (process.env.NODE_ENV === 'development' && isLocalFail) {
        return new Response(JSON.stringify({ 
            total: 0, today: 0, month: 0, year: 0
        }), {
            status: 200, // Status OK untuk menghindari notif error
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // Jika klien benar-benar tidak terinisialisasi dan bukan di lingkungan dev (mis. error koneksi parah di prod)
    if (!redisClient) {
         // Kembalikan 500 error (Hanya terjadi jika isLocalFail=false, biasanya di Production)
        return new Response(JSON.stringify({ 
            error: 'Database client not initialized.',
            total: 0, today: 0, month: 0, year: 0
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    
    const now = new Date();
    const day = getTodayDate();
    const month = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`; 
    const year = `${now.getFullYear()}`; 
    
    try {
        // 2. Lakukan semua operasi penambahan (increment) secara bersamaan
        const [total, today, perMonth, perYear] = await Promise.all([
            redisClient.incr("visit:total"),
            redisClient.incr(`visit:day:${day}`),
            redisClient.incr(`visit:month:${month}`),
            redisClient.incr(`visit:year:${year}`),
        ]);

        // 3. Mengembalikan data dalam format JSON
        const stats = {
            total: total || 0,
            today: today || 0,
            month: perMonth || 0,
            year: perYear || 0,
        };
        
        return new Response(JSON.stringify(stats), {
            status: 200,
            headers: { 
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
            },
        });

    } catch (error) {
        // Jika koneksi Redis gagal setelah inisialisasi (mis. token kedaluwarsa)
        console.error(`ERROR accessing Redis via ${clientName}:`, error.message);
        
        // Fallback 500 error
        return new Response(JSON.stringify({ 
            error: `Failed to access database: ${clientName}`,
            total: 0, today: 0, month: 0, year: 0
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}