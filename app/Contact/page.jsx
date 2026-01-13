"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:info@artemisia.care?subject=Pesan dari ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full pb-20">

      {/* ====================== BANNER ====================== */}
      <section className="w-full bg-[#c7d5be] py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#2f462c]">
          Hubungi <span className="text-[#496b44]">Kami</span>
        </h1>
        <p className="text-[#2f462c] mt-4">
          Kami siap membantu kebutuhan medis dan informasi Anda.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* ====================== WHATSAPP SECTION ====================== */}
        <div>
          <h2 className="text-2xl font-semibold text-[#2f462c] mb-6">
            Kontak WhatsApp
          </h2>

          <p className="text-[#496b44] mb-4">
            Klik tombol di bawah untuk terhubung dengan admin kami:
          </p>

          <a
            href="https://wa.me/628118189822"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2f462c] text-white px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-[#3b5a36] transition"
          >
            Chat WhatsApp Admin
          </a>

          <p className="mt-6 text-[#2f462c] leading-relaxed">
            WhatsApp: <strong>0811 - 8189 - 822</strong>
          </p>

          {/* Instagram */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#2f462c] mb-2">
              Instagram
            </h3>
            <a
              href="https://instagram.com/artemisiacare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#496b44] hover:text-[#2f462c] underline text-lg"
            >
              @artemisiacare
            </a>
          </div>

          {/* TikTok */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-[#2f462c] mb-2">
              TikTok
            </h3>
            <a
              href="https://www.tiktok.com/@artemisiacare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#496b44] hover:text-[#2f462c] underline text-lg"
            >
              @artemisiacare
            </a>
          </div>
        </div>

        {/* ====================== EMAIL FORM SECTION ====================== */}
        <div>
          <h2 className="text-2xl font-semibold text-[#2f462c] mb-6">
            Kirim Pesan via Email
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nama Anda"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#496b44]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Anda"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#496b44]"
            />

            <textarea
              name="message"
              placeholder="Tulis pesan Anda..."
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#496b44]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#496b44] text-white px-6 py-3 rounded-lg shadow hover:bg-[#3e5a3a] transition text-lg font-medium"
            >
              Kirim Pesan
            </button>
          </form>

          <p className="mt-6 text-[#2f462c] leading-relaxed">
            Email: <strong>info@artemisia.care</strong>
          </p>
        </div>
      </div>

      {/* ====================== GOOGLE MAP ====================== */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-20">
        <h2 className="text-2xl font-semibold text-[#2f462c] mb-6 text-center">
          Lokasi Klinik
        </h2>

        <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.267185468645!2d106.65245297592905!3d-6.228462460999715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbbb098ba8a1%3A0x41a2db5e8d6e4993!2sArtemisia%20Women&#39;s%20%26%20Children&#39;s%20Clinic!5e0!3m2!1sen!2sid!4v1765429144423!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  );
}
