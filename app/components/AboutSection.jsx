"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">

      {/* LEFT SIDE TEXT */}
      <div className="bg-[#c7d5be] px-10 md:px-20 py-20 flex flex-col justify-center">
        <h2 className="text-4xl font-semibold text-[#2f462c] mb-6">
          <span className="text-[#496b44]">Artemisia</span>
        </h2>

        <div className="space-y-6 text-[#2f462c] leading-relaxed text-[15px] md:text-[16px]">
          <p>
            <strong>Artemisia Women’s & Children’s Clinic</strong> adalah klinik ibu dan anak
            modern yang berlokasi di kawasan Alam Sutera dan senantiasa memberikan layanan
            medis yang mengutamakan kesehatan, kenyamanan, dan kebutuhan pasien.
          </p>

          <p>
            Dokter kami memiliki gelar spesialis di bidang gizi klinik (Sp.GK), anak (Sp.A),
            dan kebidanan & kandungan (Sp.OG) dari universitas ternama di Indonesia dan telah
            berpartisipasi dalam penelitian dan workshop kedokteran yang beragam.
          </p>

          <p>
            Prioritas kami adalah menciptakan suasana yang nyaman di setiap kunjungan ke klinik,
            mempertemukan pasien dengan dokter yang dapat menyesuaikan saran, tindakan,
            dan pengobatan berdasarkan kondisi setiap pasien. Kami membantu pasien mencapai
            kesehatan optimal dengan memenuhi kebutuhan medis secara lengkap.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative w-full min-h-[600px] md:min-h-[750px]">
        <Image
          src="/bgabout1.jpeg"
          alt="Artemisia Clinic Interior"
          fill
          className="object-cover object-center md:object-right"
          priority
        />
      </div>

    </section>
  );
}
