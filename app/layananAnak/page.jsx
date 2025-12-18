import React from "react";
import Image from "next/image";

const doctors = [
  {
    name: "dr. Linda Wati, Sp.A",
    image: "/tenagaKaryawan/dokterlayanan2.jpeg",
    desc: "Dokter spesialis anak dengan pengalaman luas dalam menangani berbagai kasus kesehatan anak secara ramah dan profesional."
  },
  {
    name: "dr. D.A. Dini Primashanti Dewi, M.Biomed ,Sp.A",
    image: "/tenagaKaryawan/dokterlayanan.jpeg",
    desc: "Berpengalaman dalam konsultasi tumbuh kembang dan berbagai kondisi kesehatan anak dengan pendekatan komunikatif."
  }
];

const page = () => {
  return (
    <div className="w-full">

      {/* ====================================== */}
      {/*         BANNER PROFESIONAL             */}
      {/* ====================================== */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] bg-[#c7d5be] flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-full p-6 flex items-center justify-center">
          <Image
            src="/layanan/Slide4.jpeg"
            alt="Banner Foreground"
            fill
            className="object-contain drop-shadow-xl"
            priority
          />
        </div>
      </div>

      {/* ====================================== */}
      {/*      KONSULTASI DOKTER SPESIALIS       */}
      {/* ====================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2f462c] text-center mb-14">
          Konsul Dokter Spesialis Anak
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 flex gap-6 items-center hover:shadow-xl transition"
            >
              <div className="relative w-40 h-40 bg-[#f9f9f9] rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-contain p-2"
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
        <div className="mt-20 bg-white shadow-lg rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="relative w-full h-[420px] md:h-[560px] rounded-xl overflow-hidden">
            <Image
              src="/pemeriksaan/periksa1.jpeg"
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
              Ruang konsultasi dirancang dengan suasana yang bersih, rapi, serta ramah
              bagi anak. Area yang nyaman membantu anak lebih tenang dan mendukung
              proses konsultasi yang efektif antara dokter, orang tua, dan pasien.
            </p>
          </div>
        </div>

        {/* ====================================== */}
        {/*        FOTO PEMERIKSAAN (PERSEGI)      */}
        {/* ====================================== */}
        <div className="mt-16 bg-white shadow-lg rounded-2xl p-8">

          <h3 className="text-2xl font-semibold text-[#496b44] text-center mb-6">
            Proses Pemeriksaan Anak
          </h3>

          <div
            className="relative w-full max-w-xl mx-auto aspect-square
                       rounded-xl overflow-hidden bg-[#f6f6f6]
                       border border-gray-200
                       flex items-center justify-center"
          >
            <Image
              src="/pemeriksaan/pemeriksaan2.jpeg" // ⬅️ foto persegi dari client
              alt="Proses Pemeriksaan Anak"
              fill
              className="object-contain p-6"
            />
          </div>

          <p className="mt-6 text-center text-[#2f462c]
                        max-w-3xl mx-auto leading-relaxed
                        text-sm md:text-base">
            Pemeriksaan anak dilakukan dengan pendekatan yang lembut, aman, dan
            ramah untuk memastikan anak merasa nyaman selama proses pemeriksaan.
          </p>
        </div>

      </section>
    </div>
  );
};

export default page;
