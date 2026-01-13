"use client";

import { useEffect, useState } from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    month: 0,
    year: 0
  });

  useEffect(() => {
    async function fetchVisitor() {
      try {
        const res = await fetch("/api/visitor");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setStats({
          total: Number(data.total) || 0,
          today: Number(data.today) || 0,
          month: Number(data.month) || 0,
          year: Number(data.year) || 0,
        });
      } catch (err) {
        console.error("Error load visitor:", err);
      }
    }

    fetchVisitor();
  }, []);

  return (
    <footer className="bg-[#3b4f3a] text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* MENU */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Menu</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/artikel" className="text-white/80 hover:text-white">
                Artikel
              </a>
            </li>
            <li>
              <a href="/tentang-kami" className="text-white/80 hover:text-white">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="/kontak" className="text-white/80 hover:text-white">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Kontak</h3>

          <div className="flex gap-5 text-2xl">
            <a
              href="https://instagram.com/artemisiacare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@artemisiacare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaTiktok />
            </a>

            <a
              href="mailto:info@artemisia.care"
              className="hover:text-gray-300"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="mt-3 text-sm text-white/80 space-y-1">
            <p>Instagram: @artemisiacare</p>
            <p>TikTok: @artemisiacare</p>
            <p>Email: info@artemisia.care</p>
          </div>
        </div>

        {/* COPYRIGHT + VISITOR */}
        <div className="text-sm text-white/70 flex flex-col justify-end">
          <p>
            © {new Date().getFullYear()} Artemisia Clinic — All rights reserved.
          </p>

          <div className="mt-3 text-white/60">
            <p>Total Pengunjung: <b>{stats.total}</b></p>
            <p>Hari ini: <b>{stats.today}</b></p>
            <p>Bulan ini: <b>{stats.month}</b></p>
            <p>Tahun ini: <b>{stats.year}</b></p>
          </div>
        </div>

      </div>
    </footer>
  );
}
