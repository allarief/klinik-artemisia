import React from "react";
import Image from "next/image";

const doctors = [
  {
    name: "dr. Patricia Amanda, M.Gizi , Sp.GK",
    image: "/tenagaKaryawan/Slide3.jpg",
    desc: "Dokter spesialis gizi dengan keahlian dalam memberikan konsultasi gizi untuk mendukung kesehatan ibu dan anak secara personal dan berbasis bukti ilmiah."
  },
];

const page = () => {
  return (
    <div className="w-full">

      {/* ====================================== */}
      {/*         BANNER PROFESIONAL (NO BLUR)   */}
      {/* ====================================== */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] 
                      bg-[#c7d5be] flex items-center justify-center">

        {/* Foreground Clear Image */}
        <div className="relative w-full max-w-5xl h-full p-6 flex items-center justify-center">
          <Image
            src="/layanan/Slide2.jpeg"
            alt="Layanan Gizi Foreground"
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* ====================================== */}
      {/*    KONSULTASI DOKTER SPESIALIS GIZI    */}
      {/* ====================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2f462c] text-center mb-14">
          Konsul Dokter Spesialis Gizi
        </h2>

        {/* CARD DOKTER */}
        <div className="grid grid-cols-1 gap-10 place-items-center w-full">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 flex gap-6 items-center hover:shadow-xl transition w-full max-w-xl"
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
        <div className="mt-20 bg-white shadow-lg rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* FOTO RUANG PERIKSA */}
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
              Ruang konsultasi kami dirancang untuk memberikan kenyamanan maksimal bagi pasien selama sesi konsultasi. Dengan suasana yang tenang dan fasilitas modern, kami memastikan setiap kunjungan menjadi pengalaman yang menyenangkan dan mendukung kesehatan Anda.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
