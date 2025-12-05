"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="w-full h-[650px] md:h-[750px] grid grid-cols-1 md:grid-cols-[65%_35%]">
      
      {/* LEFT IMAGE - BESAR */}
      <div className="relative w-full h-full">
        <Image
          src="/banner/banner1.jpeg"
          alt="Clinic Banner"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* RIGHT CONTENT - LEBIH KECIL */}
      <div className="flex flex-col justify-center px-10 md:px-16 bg-[#c7d5be]">

        <p className="text-sm text-[#3b4f3a] mb-3">
          Focusing on your health & comfort
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold text-[#2f462c] mb-4 leading-tight">
          Artemisia
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-[#2f462c] mb-6 leading-snug">
          Women's & Children's <br /> Clinic + Apothecary
        </h2>

        <div className="flex gap-4 mt-2">
          <Link
            href="#appointment"
            className="bg-[#263b25] text-white px-6 py-3 rounded-full text-sm font-semibold"
          >
            Schedule Your Appointment
          </Link>

          <Link
            href="https://instagram.com"
            className="bg-[#e6dfca] text-[#2d462b] px-6 py-3 rounded-full text-sm font-semibold"
          >
            Visit Our Instagram
          </Link>
        </div>

      </div>

    </section>
  );
}
