"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function OurTeamPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  // ==================================
  // TEAM DATA ASLI
  // ==================================
  const dokter = [
    { img: "/tenagaKaryawan/Slide3.jpg", title: "Dokter Spesialis Gizi", desc: "Membantu memenuhi kebutuhan nutrisi pasien." },
    { img: "/tenagaKaryawan/Slide5.jpg", title: "Dokter Spesialis Anak", desc: "Perawatan medis terbaik untuk anak-anak." },
    { img: "/tenagaKaryawan/Slide6.jpg", title: "Dokter Spesialis Anak", desc: "Pendekatan lembut & profesional untuk pasien anak." },
    { img: "/tenagaKaryawan/Slide8.jpg", title: "Dokter Obstetri & Ginekologi", desc: "Perawatan untuk ibu hamil & kesehatan wanita." },
    { img: "/tenagaKaryawan/Slide9.jpg", title: "Dokter Obstetri & Ginekologi", desc: "Menangani kesehatan wanita secara menyeluruh." },
  ];

  const psikolog = [
    { img: "/tenagaKaryawan/Slide11.jpg", title: "Psikolog Klinis", desc: "Pendampingan profesional untuk kesehatan mental." },
  ];

  const bidan = [
    { img: "/tenagaKaryawan/bdn.jpeg", title: "Bidan", desc: "Pelayanan kebidanan yang aman dan nyaman." },
    { img: "/tenagaKaryawan/bdn2.jpeg", title: "Bidan", desc: "Pelayanan kebidanan yang aman dan nyaman." },
  ];

  const staff = [
    { img: "/tenagaKaryawan/staff.jpeg", title: "Staff Administrasi", desc: "Membantu proses pelayanan dengan profesional." },
  ];

  const asistenApoteker = [
    { img: "/tenagaKaryawan/ast_apt.jpeg", title: "Asisten Apoteker", desc: "Melayani penyiapan obat dan membantu konseling pasien mengenai penggunaan obat." },
  ];

  // ==================================
  // TEAM + CATEGORY
  // ==================================
  const allTeam = [
    ...dokter.map((i) => ({ ...i, category: "Dokter" })),
    ...psikolog.map((i) => ({ ...i, category: "Psikolog" })),
    ...bidan.map((i) => ({ ...i, category: "Bidan" })),
    ...asistenApoteker.map((i) => ({ ...i, category: "Asisten Apoteker" })),
    ...staff.map((i) => ({ ...i, category: "Staff" })),
  ];

  // ==================================
  // FILLER (1 MANAGEMENT + SISANYA COMING SOON)
  // ==================================
  const remainder = allTeam.length % 3;
  const fillerCount = remainder === 0 ? 0 : 3 - remainder;

  const fillerCards = [
    {
      img: "/tenagaKaryawan/management.jpeg",
      title: "Staff Management",
      desc: "Mengelola operasional dan memastikan pelayanan klinik berjalan optimal.",
      category: "Staff Management",
    },
    ...Array(fillerCount - 1).fill({
      img: "/banner/Coming-Soon.png",
      title: "Tenaga Baru",
      desc: "Segera Bergabung Dengan Tim Kami.",
      category: "Coming Soon",
    }),
  ].slice(0, fillerCount);

  const finalTeam = [...allTeam, ...fillerCards];

  // ==================================
  // CARD COMPONENT
  // ==================================
  const Card = ({ item }) => (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 fade-in opacity-0 translate-y-3 duration-700">
      <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-[#eef3ed]">

        <span className={`absolute top-3 left-3 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md z-20 ${
          item.category === "Coming Soon"
            ? "bg-gray-500"
            : "bg-[#496b44]/90"
        }`}>
          {item.category}
        </span>

        <Image
          src={item.img}
          alt={item.title}
          fill
          className={`object-cover object-center w-full h-full transition-all duration-700 ${
            item.category !== "Coming Soon"
              ? "hover:scale-[1.03]"
              : "opacity-70"
          }`}
        />
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-[#2f462c] mt-5 mb-1">
        {item.title}
      </h3>
      <p className="text-[#2f462c] text-sm leading-relaxed">
        {item.desc}
      </p>
    </div>
  );

  return (
    <div className="w-full flex flex-col">

      {/* BANNER */}
      <div className="w-full h-[320px] md:h-[380px] bg-[#c7d5be] flex items-center justify-center text-center px-6 fade-in opacity-0 translate-y-3 transition-all duration-700">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#2f462c] leading-tight">
          Tim <span className="text-[#496b44]">Profesional</span> Kami
        </h1>
      </div>

      {/* TEAM LIST */}
      <section className="px-8 md:px-20 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#2f462c] mb-12 fade-in opacity-0 translate-y-3">
          Our <span className="text-[#496b44]">Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {finalTeam.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
