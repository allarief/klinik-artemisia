"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [openServices, setOpenServices] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openMobileServices, setOpenMobileServices] = useState(false);

  return (
    <nav className="w-full bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={70}
            height={70}
            className="object-contain"
          />

          <div className="flex flex-col leading-5">
            <span className="text-lg font-semibold text-[#3c5a40]">
              Artemisia
            </span>
            <span className="text-xs text-[#6f806c]">
              Women's & Children's Clinic
            </span>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium relative">

          <Link href="/" className="text-[#91a78f] hover:text-[#3c5a40]">
            Beranda
          </Link>

          <Link href="/artikel" className="text-[#3c5a40] hover:text-[#6f806c]">
            Artikel
          </Link>

          <Link href="/our-team" className="text-[#3c5a40] hover:text-[#6f806c]">
            Tim Kami
          </Link>

          <Link href="/aboutus" className="text-[#3c5a40] hover:text-[#6f806c]">
            Tentang Kami
          </Link>

          {/* DESKTOP DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setOpenServices(!openServices)}
              className="flex items-center gap-2 text-[#3c5a40] hover:text-[#6f806c]"
            >
              Layanan Kami
              <FaChevronDown
                className={`transition-transform duration-200 ${
                  openServices ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {openServices && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg py-3 w-48 border z-50">
                <Link href="/layananAnak" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Layanan Anak
                </Link>
                <Link href="/layananGizi" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Layanan Gizi
                </Link>
                <Link href="/layananPsikologi" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Layanan Psikologi
                </Link>
                <Link href="/layananObgyn" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Layanan Kesehatan Ob Gyn
                </Link>
              </div>
            )}
          </div>

          <Link href="/Contact" className="text-[#3c5a40] hover:text-[#6f806c]">
            Kontak
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-[#3c5a40] text-2xl"
          onClick={() => setOpenMobile(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* ============================= */}
      {/*      MOBILE SIDEBAR MENU      */}
      {/* ============================= */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg p-6 z-50 transform transition-all duration-300 ${
          openMobile ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          className="text-[#3c5a40] text-2xl absolute top-5 right-5"
          onClick={() => setOpenMobile(false)}
        >
          <FaTimes />
        </button>

        <div className="mt-10 flex flex-col gap-5 text-[16px] font-medium">

          <Link href="/" onClick={() => setOpenMobile(false)}>
            Beranda
          </Link>

          <Link href="/artikel" onClick={() => setOpenMobile(false)}>
            Artikel
          </Link>

          <Link href="/aboutus" onClick={() => setOpenMobile(false)}>
            Tentang Kami
          </Link>

          <Link href="/our-team" onClick={() => setOpenMobile(false)}>
            Tim Kami
          </Link>

          {/* MOBILE DROPDOWN */}
          <div>
            <button
              onClick={() => setOpenMobileServices(!openMobileServices)}
              className="flex items-center justify-between w-full text-left"
            >
              <span>Layanan Kami</span>
              <FaChevronDown
                className={`transition-transform duration-200 ${
                  openMobileServices ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {openMobileServices && (
              <div className="flex flex-col mt-2 ml-3 gap-2 text-sm text-gray-600">
                <Link href="/layananAnak" onClick={() => setOpenMobile(false)}>
                  Layanan Anak
                </Link>
                <Link href="/layananGizi" onClick={() => setOpenMobile(false)}>
                  Layanan Gizi
                </Link>
                <Link href="/layananPsikologi" onClick={() => setOpenMobile(false)}>
                  Layanan Psikologi
                </Link>
                <Link href="/layananObgyn" onClick={() => setOpenMobile(false)}>
                  Layanan Kesehatan Ob Gyn
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" onClick={() => setOpenMobile(false)}>
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
}
