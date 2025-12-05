import React from "react";
import Image from "next/image";

const doctors = [
  {
    name: "dr. Mervinna Giovanni, M.Biomed ,Sp.OG",
    image: "/tenagaKaryawan/Slide8.jpg",
    desc: "Dokter spesialis Obgyn dengan pengalaman luas dalam menangani berbagai kondisi kesehatan wanita."
  },
  {
    name: "dr. Ratih Puty, Sp.OG",
    image: "/tenagaKaryawan/Slide5.jpg",
    desc: "Dokter spesialis Obgyn yang berdedikasi dalam memberikan perawatan terbaik untuk kesehatan reproduksi wanita."
  }
];

const page = () => {
  return (
    <div>
      {/* BANNER SECTION */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#c7d5be] px-10 md:px-20 py-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2f462c] mb-6">
            <span className="text-[#496b44]">Layanan Kesehatan Ob Gyn</span>
          </h2>

          <p className="text-[#2f462c] leading-relaxed">
            Kami menyediakan layanan kesehatan Ob Gyn yang komprehensif dan berkualitas tinggi untuk mendukung kesehatan wanita di setiap tahap kehidupan mereka.
          </p>
        </div>

        <div className="relative w-full min-h-[150px] md:min-h-[550px]">
          <Image
            src="/layanan/Slide7.jpeg"
            alt="Layanan Ob Gyn"
            fill
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* ============================ */}
      {/*    KONSUL DOKTER SPESIALIS   */}
      {/* ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2f462c] text-center mb-14">
          Konsul Dokter Spesialis Ob Gyn
        </h2>

        {/* CARD DOKTER – tidak memotong foto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 flex gap-6 items-center hover:shadow-xl transition"
            >
              {/* FOTO MENGGUNAKAN object-contain AGAR TIDAK TERPOTONG */}
              <div className="relative w-40 h-40 bg-[#f3f3f3] rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#496b44]">{doc.name}</h3>
                <p className="text-[#2f462c] leading-relaxed text-sm mt-2">
                  {doc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ======================= */}
        {/*      RUANG PERIKSA      */}
        {/* ======================= */}
        <div className="mt-20 bg-white shadow-lg rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* FOTO LEBIH BESAR & SANGAT RAPI */}
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
              Ruang konsultasi kami dirancang untuk memberikan kenyamanan maksimal bagi pasien selama sesi konsultasi. Dengan suasana yang tenang dan fasilitas modern, kami memastikan setiap kunjungan menjadi pengalaman yang menyenangkan dan mendukung kesehatan Anda.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
