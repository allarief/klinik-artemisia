"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AboutPage() {
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

  return (
    <div className="w-full">

      {/* ================================
          BANNER
      ================================= */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 reveal opacity-0 translate-y-6 transition-all duration-700">
        <div className="bg-[#c7d5be] px-10 md:px-20 py-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2f462c] mb-6">
            Tentang <span className="text-[#496b44]">Klinik Kami</span>
          </h2>

          <div className="space-y-6 text-[#2f462c] leading-relaxed">
            <p>Klinik kami memberikan pelayanan kesehatan yang mengutamakan kenyamanan.</p>
            <p>Tenaga kesehatan kami berpengalaman di bidangnya masing-masing.</p>
            <p>Kami memberikan pendekatan personal untuk setiap kebutuhan pasien.</p>
          </div>
        </div>

        <div className="relative w-full min-h-[350px] md:min-h-[450px]">
          <Image
            src="/bgabout1.jpeg"
            alt="Clinic Interior"
            fill
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* ================================
          DESCRIPTION
      ================================= */}
      <div className="px-8 md:px-24 py-14 text-center reveal opacity-0 translate-y-6 transition-all duration-700 delay-200">
        <p className="text-[#2f462c] text-[16px] md:text-[18px] leading-relaxed max-w-3xl mx-auto">
          Klinik Artemisia berdedikasi untuk memberikan layanan kesehatan modern yang
          berkualitas tinggi dengan pendekatan yang humanis dan personal. Kami percaya
          bahwa setiap pasien berhak mendapatkan perawatan terbaik dalam suasana yang
          nyaman dan ramah.
        </p>
      </div>

      {/* ================================
          PROFIL OWNER
      ================================= */}
      <section className="py-20 px-6 md:px-24 bg-white reveal opacity-0 translate-y-6 transition-all duration-700 delay-300">
        <h2 className="text-3xl font-bold text-center text-[#2f462c] mb-12">
          Profil Owner
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/tenagaKaryawan/owner1.jpeg"
              alt="Owner Profile"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4 text-[#2f462c]">
            <h3 className="text-2xl font-semibold">Arabelle</h3>
            <p className="text-[15px] leading-relaxed">
              Founder & Head Medical Director dari <strong>Klinik Artemisia</strong>,
              dengan pengalaman lebih dari 12 tahun di dunia kesehatan modern dan manajemen klinik.
            </p>

            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">Pendidikan</h4>
              <ul className="list-disc pl-5 space-y-1 text-[15px]">
                <li>Dokter Umum – Universitas Indonesia (UI)</li>
                <li>Magister Manajemen Rumah Sakit – Universitas Gadjah Mada (UGM)</li>
                <li>Certified Healthcare Leadership – Singapore Medical Board</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          SEJARAH KLINIK
      ================================= */}
      <section className="py-20 px-6 md:px-24 bg-[#f3f6f1] reveal opacity-0 translate-y-6 transition-all duration-700 delay-400">
        <h2 className="text-3xl font-bold text-center text-[#2f462c] mb-10">
          Sejarah Klinik
        </h2>

        <p className="max-w-4xl mx-auto text-center text-[#2f462c] text-[16px] leading-relaxed">
          Klinik Artemisia berdiri pada tahun <strong>2021</strong> dengan visi untuk memberikan layanan kesehatan
          modern yang dapat diakses oleh semua lapisan masyarakat. Dimulai dari sebuah klinik kecil, kini telah berkembang
          menjadi fasilitas kesehatan lengkap dengan berbagai layanan unggulan.
        </p>
      </section>

      {/* ================================
          IMAGE SEJARAH (BARU)
      ================================= */}
      <section className="pb-20 px-6 md:px-24 bg-[#f3f6f1] reveal opacity-0 translate-y-6 transition-all duration-700 delay-450">
        <div className="max-w-5xl mx-auto">

          <div className="relative w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/aboutus2.jpeg" // ⬅️ GANTI dengan image kamu
              alt="Sejarah Klinik Artemisia"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="mt-6 text-center text-[#2f462c] text-[14px] md:text-[15px] leading-relaxed max-w-3xl mx-auto">
            Perjalanan Klinik Artemisia dari awal berdiri hingga berkembang menjadi
            fasilitas layanan kesehatan yang terpercaya bagi masyarakat.
          </p>

        </div>
      </section>

      {/* ================================
          VISI & MISI
      ================================= */}
      <section className="py-20 px-6 md:px-24 bg-white reveal opacity-0 translate-y-6 transition-all duration-700 delay-500">
        <h2 className="text-3xl font-bold text-center text-[#2f462c] mb-10">
          Visi & Misi
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-green-100 p-8 rounded-xl shadow">
            <h3 className="text-xl font-bold text-[#2f462c] mb-4">Visi</h3>
            <p className="text-[#2f462c] leading-relaxed">
              Menjadi klinik kesehatan modern yang memberikan pelayanan terbaik,
              humanis, dan berfokus pada kenyamanan pasien.
            </p>
          </div>

          <div className="bg-green-100 p-8 rounded-xl shadow">
            <h3 className="text-xl font-bold text-[#2f462c] mb-4">Misi</h3>
            <ul className="list-disc pl-5 space-y-2 text-[#2f462c] leading-relaxed">
              <li>Menyediakan layanan kesehatan profesional dan terpercaya.</li>
              <li>Menggunakan teknologi modern untuk mendukung proses medis.</li>
              <li>Mengutamakan keramahan dan kenyamanan pasien.</li>
              <li>Mendukung edukasi kesehatan kepada masyarakat.</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
