import React from 'react'
import Image from 'next/image'

const BannerPage = () => {
  return (
    <div>{/* BANNER SECTION */}
          <section className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#c7d5be] px-10 md:px-20 py-16 md:py-24 flex flex-col justify-center fade-in opacity-0 translate-y-3">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2f462c] mb-6">
                 <span className="text-[#496b44]">Layanan Anak</span>
              </h2>
    
              <div className="space-y-6 text-[#2f462c] leading-relaxed">
                <p>Kami menyediakan layanan kesehatan khusus untuk anak-anak dengan pendekatan yang ramah dan profesional agar mereka merasa nyaman dan aman selama perawatan anak-anak.</p>
              </div>
            </div>
    
            <div className="relative w-full min-h-[450px] md:min-h-[650px] fade-in opacity-0 translate-y-3">
              <Image
                src="/aboutsection.jpeg"
                alt="Clinic Interior"
                fill
                className="object-cover object-center"
              />
            </div>
          </section>
    </div>
  )
}

export default BannerPage
