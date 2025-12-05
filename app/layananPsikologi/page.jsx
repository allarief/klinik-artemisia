import React from "react";
import Image from "next/image";

const doctors = [
  {
    name: "Octavia Putri, M.Psi , Psikolog",
    image: "/tenagaKaryawan/Slide11.jpg",
    desc: "Psikolog berpengalaman dalam memberikan layanan psikologi untuk mendukung kesehatan mental ibu dan anak dengan pendekatan yang empatik dan berbasis bukti ilmiah."
  },
];

const page = () => {
  return (
    <div>
      {/* BANNER SECTION */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#c7d5be] px-10 md:px-20 py-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2f462c] mb-6">
            <span className="text-[#496b44]">Layanan Psikologi</span>
          </h2>

          <p className="text-[#2f462c] leading-relaxed">
            Kami menyediakan layanan psikologi untuk mendukung kesehatan mental ibu dan anak,
            dengan pendekatan personal dan berbasis bukti ilmiah.
          </p>
        </div>

        <div className="relative w-full min-h-[150px] md:min-h-[550px]">
          <Image
            src="/layanan/Slide10.jpeg"
            alt="Layanan psikologi"
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
          Konsul Psikolog Spesialis
        </h2>

        {/* CARD DOKTER — FULL CENTER & FOTO TIDAK TERPOTONG */}
        <div className="grid grid-cols-1 gap-10 place-items-center w-full">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 flex gap-6 items-center hover:shadow-xl transition w-full max-w-xl"
            >
              {/* FOTO FULL TANPA TERPOTONG */}
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

        {/* ======================= */}
        {/*      RUANG PERIKSA      */}
        {/* ======================= */}
        <div className="mt-20 bg-white shadow-lg rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* FOTO RUANG PERIKSA BESAR */}
          <div className="relative w-full h-[420px] md:h-[560px] rounded-xl overflow-hidden">
            <Image
              src="/pemeriksaan/periksa2.jpeg"
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
              Ruang konsultasi dirancang dengan suasana yang bersih, rapi, serta ramah bagi anak. 
              Area yang nyaman membantu anak lebih tenang dan mendukung proses konsultasi yang efektif 
              antara dokter, orang tua, dan pasien.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
