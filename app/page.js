import Link from "next/link";
import Banner from "./components/Banner";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div className="bg-white">

      {/* ========================= BANNER ========================= */}
      <Banner />

      {/* ========================= WHY CHOOSE ========================= */}
      <section className="py-16 bg-[#f5f8f4]">
        <h2 className="text-3xl font-semibold text-center text-[#3b4f3a] mb-4">
          Why Choose Artemisia?
        </h2>
        <p className="text-center text-gray-600 mx-auto max-w-xl mb-10">
          Kami menghadirkan layanan kesehatan holistik, modern, dan profesional
          untuk memberikan pengalaman terbaik bagi pasien.
        </p>

        <AboutSection />
      </section>

      {/* ========================= OUR SERVICES ========================= */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold text-center text-[#3b4f3a] mb-4">
          Layanan Unggulan Kami
        </h2>

        <p className="text-center text-gray-600 mx-auto max-w-xl mb-12">
          Berbagai layanan medis terbaik dengan tenaga profesional dan fasilitas lengkap.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

          {/* Service Item 1 */}
          <div className="bg-[#f0f5ef] p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#3b4f3a] mb-3">Konsultasi Dokter</h3>
            <p className="text-gray-600">
              Konsultasi langsung dengan dokter berpengalaman untuk solusi kesehatan Anda.
            </p>
          </div>

          {/* Service Item 2 */}
          <div className="bg-[#f0f5ef] p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#3b4f3a] mb-3">Perawatan Gizi</h3>
            <p className="text-gray-600">
              Pendampingan nutrisi untuk menjaga kesehatan tubuh secara menyeluruh.
            </p>
          </div>

          {/* Service Item 3 */}
          <div className="bg-[#f0f5ef] p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#3b4f3a] mb-3">Pemeriksaan Kesehatan</h3>
            <p className="text-gray-600">
              Pemeriksaan lengkap dengan alat modern untuk deteksi dini berbagai penyakit.
            </p>
          </div>

        </div>
      </section>

      {/* ========================= TESTIMONIAL ========================= */}
      <section className="py-20 bg-[#f5f8f4]">
        <h2 className="text-3xl font-semibold text-center text-[#3b4f3a] mb-12">
          Apa Kata Pasien Kami?
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">

          <div className="bg-white p-8 rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">
              “Pelayanan sangat ramah dan profesional. Saya merasa sangat terbantu!”
            </p>
            <h4 className="font-semibold text-[#3b4f3a]">— Maria L.</h4>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">
              “Kliniknya bersih dan modern, dokter menjelaskan dengan sangat jelas.”
            </p>
            <h4 className="font-semibold text-[#3b4f3a]">— Andi P.</h4>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">
              “Sangat membantu dan profesional sekali”
            </p>
            <h4 className="font-semibold text-[#3b4f3a]">— Rahma Widiawati.</h4>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">
              “Cepat dan responsif.”
            </p>
            <h4 className="font-semibold text-[#3b4f3a]">— Andi Setiawan.</h4>
          </div>
        </div>
      </section>

      {/* ========================= CTA SECTION ========================= */}
      <section className="py-16 bg-[#3b4f3a] text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Siap Memulai Perawatan?</h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8">
          Hubungi kami atau lakukan reservasi untuk mendapatkan layanan kesehatan terbaik.
        </p>

        <Link
          href="/Contact"
          className="px-6 py-3 bg-white text-[#3b4f3a] rounded-lg shadow-md hover:bg-gray-100 font-semibold inline-block"
        >
          Hubungi Kami
        </Link>
      </section>

    </div>
  );
}
