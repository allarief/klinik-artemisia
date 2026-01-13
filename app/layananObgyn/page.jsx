import React from "react";
import Image from "next/image";

const doctors = [
  {
    name: "dr. Mervinna Giovanni, M.Biomed ,Sp.OG",
    image: "/tenagaKaryawan/dokterlayanan5.jpeg",
    desc: "Dokter spesialis Obgyn dengan pengalaman luas dalam menangani berbagai kondisi kesehatan wanita.",
  },
  {
    name: "dr. Ratih Puty, Sp.OG",
    image: "/tenagaKaryawan/dokterlayanan6.png",
    desc: "Dokter spesialis Obgyn yang berdedikasi dalam memberikan perawatan terbaik untuk kesehatan reproduksi wanita.",
  },
];

const page = () => {
  return (
    <div className="w-full bg-white">

      {/* ====================================== */}
      {/*        FULL BANNER (FOCUS FIXED)        */}
      {/* ====================================== */}
      <div className="relative w-full overflow-hidden">

        {/* ===== MOBILE: gambar UTUH & jelas ===== */}
        <div className="relative w-full h-[420px] md:hidden">
          <Image
            src="/layanan/Slide7.png"
            alt="Banner Layanan Obgyn"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* ===== DESKTOP: fokus TURUN ke judul ===== */}
        <div
          className="
            relative hidden md:block w-full
            h-[260px]
            md:h-[420px]
            lg:h-[520px]
            overflow-hidden
          "
        >
          <Image
            src="/layanan/Slide7.png"
            alt="Banner Layanan Obgyn"
            fill
            priority
            className="
              object-cover
              object-[50%_35%]
              lg:object-[50%_40%]
            "
          />

        </div>

        {/* Divider halus */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* ====================================== */}
      {/*     KONSULTASI DOKTER SPESIALIS OBGYN  */}
      {/* ====================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">

        <h2 className="text-3xl md:text-4xl font-semibold text-[#2f462c] text-center mb-14">
          Konsul Dokter Spesialis Ob Gyn
        </h2>

        {/* CARD DOKTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center w-full">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="
                bg-white shadow-lg rounded-2xl p-6
                flex gap-6 items-center
                hover:shadow-xl transition
                w-full max-w-xl
              "
            >
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden bg-[#f6f6f6] flex items-center justify-center">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-contain p-3"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#496b44]">
                  {doc.name}
                </h3>
                <p className="text-[#2f462c] leading-relaxed text-sm mt-2">
                  {doc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ====================================== */}
        {/*               RUANG PERIKSA            */}
        {/* ====================================== */}
        <div
          className="
            mt-20 bg-white shadow-lg rounded-2xl p-8
            grid grid-cols-1 md:grid-cols-2 gap-12 items-center
          "
        >
          <div className="relative w-full h-[420px] md:h-[560px] rounded-xl overflow-hidden">
            <Image
              src="/pemeriksaan/periksa4.jpeg"
              alt="Ruang Konsultasi"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#496b44] mb-4">
              Ruang Konsultasi Nyaman
            </h3>
            <p className="text-[#2f462c] leading-relaxed">
              Ruang konsultasi kami dirancang untuk memberikan kenyamanan maksimal bagi
              pasien selama sesi konsultasi. Dengan suasana yang tenang dan fasilitas
              modern, kami memastikan setiap kunjungan menjadi pengalaman yang
              menyenangkan dan mendukung kesehatan Anda.
            </p>
          </div>
        </div>

        {/* ====================================== */}
        {/*           FOTO PEMERIKSAAN (PERSEGI)   */}
        {/* ====================================== */}
        <div className="mt-16 bg-white shadow-lg rounded-2xl p-8">

          <h3 className="text-2xl font-semibold text-[#496b44] text-center mb-6">
            Proses Pemeriksaan Pasien
          </h3>

          <div
            className="
              relative w-full max-w-xl mx-auto aspect-square
              rounded-xl overflow-hidden bg-[#f6f6f6]
              border border-gray-200
              flex items-center justify-center
            "
          >
            <Image
              src="/pemeriksaan/pemeriksaan1.jpeg"
              alt="Proses Pemeriksaan Pasien"
              fill
              className="object-contain p-6"
            />
          </div>

          <p
            className="
              mt-6 text-center text-[#2f462c]
              max-w-3xl mx-auto leading-relaxed
              text-sm md:text-base
            "
          >
            Pemeriksaan dilakukan oleh tenaga medis profesional dengan prosedur
            yang aman, higienis, dan mengutamakan kenyamanan serta privasi pasien.
          </p>
        </div>

      </section>
    </div>
  );
};

export default page;
