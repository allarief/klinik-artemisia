"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function OurTeamPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
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

  // ====================
  // DATA TEAM (GANTI FOTO DI SINI)
  // ====================
  const teamMembers = [
    {
      name: "dr. Andini, Sp.A",
      role: "Dokter Spesialis Anak",
      image: "/team/tim1.jpg",
    },
    {
      name: "dr. Rani, Sp.OG",
      role: "Dokter Obstetri & Ginekologi",
      image: "/team/tim2.jpg",
    },
    {
      name: "dr. Dimas, Sp.GK",
      role: "Dokter Gizi Klinik",
      image: "/team/tim3.jpg",
    },
    {
      name: "Siti Wardani, A.Md.Kep",
      role: "Perawat",
      image: "/team/tim4.jpg",
    },
    {
      name: "Ira Putri, A.Md.Bid",
      role: "Bidan",
      image: "/team/tim5.jpg",
    },
    {
      name: "Laras Sari, S.Farm., Apt",
      role: "Apoteker",
      image: "/team/tim6.jpg",
    },
  ];

  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="w-full h-[320px] md:h-[380px] bg-[#c7d5be] flex items-center justify-center text-center px-6 reveal opacity-0 translate-y-6 transition-all duration-700">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#2f462c] leading-tight">
          Tim <span className="text-[#496b44]">Profesional</span> Kami
        </h1>
      </div>

      {/* DESCRIPTION */}
      <div className="px-8 md:px-24 py-14 text-center reveal opacity-0 translate-y-6 transition-all duration-700 delay-200">
        <p className="text-[#2f462c] text-[16px] md:text-[18px] leading-relaxed max-w-3xl mx-auto">
          Kami memiliki tenaga medis dan tenaga pendukung profesional yang siap memberikan pelayanan terbaik.  
          Setiap anggota tim memiliki keahlian di bidangnya dan berkomitmen untuk memberikan pengalaman kesehatan terbaik bagi setiap pasien.
        </p>
      </div>

      {/* TEAM GRID */}
      <section className="px-8 md:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 reveal opacity-0 translate-y-6"
              style={{ transitionDuration: "800ms", transitionDelay: `${i * 120}ms` }}
            >
              {/* IMAGE */}
              <div className="relative w-full h-[320px] rounded-xl overflow-hidden mb-6 group">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <h3 className="text-xl font-semibold text-[#2f462c] mb-1">{member.name}</h3>
              <p className="text-[#496b44] text-sm font-medium mb-3">{member.role}</p>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
