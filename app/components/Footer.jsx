"use client";

import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3b4f3a] text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* MENU */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Menu</h3>
          <ul className="flex flex-col gap-2">
            <li><a className="text-white/80 hover:text-white cursor-pointer">Artikel</a></li>
            <li><a className="text-white/80 hover:text-white cursor-pointer">Tentang Kami</a></li>
            <li><a className="text-white/80 hover:text-white cursor-pointer">Kontak</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Social</h3>
          <div className="flex gap-5 text-2xl">

            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-gray-300">
              <FaTiktok />
            </a>

            <a href="#" className="hover:text-gray-300">
              <FaFacebook />
            </a>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-sm text-white/70 flex items-end">
          <p>© {new Date().getFullYear()} Artemisia Clinic — All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
