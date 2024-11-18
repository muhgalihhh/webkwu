import { ArrowRightIcon, BrushIcon, LightbulbIcon, PaletteIcon, StarIcon } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const featuredWorks = [
    {
      id: 1,
      title: 'Branding Identitas Perusahaan',
      description: 'Desain logo dan identitas visual modern',
      imageUrl: '/api/placeholder/400/300',
      category: 'Branding',
    },
    {
      id: 2,
      title: 'Desain Produk Digital',
      description: 'Antarmuka pengguna inovatif untuk aplikasi mobile',
      imageUrl: '/api/placeholder/400/300',
      category: 'UI/UX',
    },
    {
      id: 3,
      title: 'Kampanye Pemasaran',
      description: 'Konsep kreatif untuk media sosial',
      imageUrl: '/api/placeholder/400/300',
      category: 'Marketing',
    },
  ];

  return (
    <>
      {/* Jumbotron */}
      <div
        className="
          relative 
          flex 
          items-center 
          h-[500px] 
          bg-cover 
          bg-center 
          bg-no-repeat 
          rounded-3xl 
          overflow-hidden
          shadow-xl
          mb-16
        "
        style={{
          backgroundImage: "url('/api/placeholder/1920/1080')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-purple-700/90" />
        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-white drop-shadow-lg">Transformasi Kreatif Dimulai Di Sini</h1>
            <p className="text-xl leading-relaxed text-white/90">Kami menghadirkan solusi desain inovatif yang mempertemukan seni dan fungsionalitas.</p>
            <div className="flex space-x-4">
              <Link href="/portfolio" className="flex items-center px-6 py-3 font-semibold text-blue-600 transition bg-white rounded-full hover:bg-blue-50">
                Lihat Karya
                <ArrowRightIcon className="ml-2" />
              </Link>
              <Link href="/contactus" className="px-6 py-3 text-white transition border-2 border-white rounded-full hover:bg-white hover:text-blue-600">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Keunggulan */}
      <div className="grid gap-8 mb-16 md:grid-cols-3">
        {[
          {
            icon: <PaletteIcon className="w-12 h-12 text-blue-600" />,
            title: 'Desain Kreatif',
            desc: 'Setiap proyek kami dikerjakan dengan imajinasi tanpa batas',
          },
          {
            icon: <BrushIcon className="w-12 h-12 text-green-600" />,
            title: 'Kualitas Premium',
            desc: 'Standar tertinggi dalam setiap detail desain',
          },
          {
            icon: <LightbulbIcon className="w-12 h-12 text-purple-600" />,
            title: 'Inovasi Tanpa Henti',
            desc: 'Selalu mengikuti tren dan teknologi terkini',
          },
        ].map((benefit, index) => (
          <div key={index} className="p-6 text-center transition bg-white shadow-md rounded-xl hover:shadow-xl">
            <div className="flex justify-center mb-4">{benefit.icon}</div>
            <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.desc}</p>
          </div>
        ))}
      </div>

      {/* Karya Unggulan */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Karya Unggulan Kami</h2>
        <p className="max-w-2xl mx-auto text-gray-600">Setiap proyek adalah perjalanan unik penciptaan dan kreativitas</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {featuredWorks.map((work) => (
          <div key={work.id} className="overflow-hidden transition bg-white shadow-lg rounded-xl hover:scale-105">
            <img src={work.imageUrl} alt={work.title} className="object-cover w-full h-56" />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">{work.title}</h3>
              <p className="text-gray-600">{work.description}</p>
              <div className="mt-4">
                <Link href={`/portfolio/${work.id}`} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  <StarIcon className="w-5 h-5 mr-2" />
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
