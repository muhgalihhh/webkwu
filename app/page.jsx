'use client';
import { ArrowRightIcon, BrushIcon, LightbulbIcon, PaletteIcon, StarIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const featuredWorks = [
    {
      id: 1,
      title: 'Desain kaos : Skull of Blues',
      description: 'Desain kaos dengan motif tengkorak dan dengan suasana kesedihan.',
      imageUrl: '/images/1.png',
      category: 'T-Shirt Design',
      details:
        "A profound t-shirt design that delves into the emotional landscape of blues music. The skull motif serves as a powerful metaphor for the genre's deep, melancholic essence. Each line and shadow is carefully crafted to evoke the raw, introspective spirit of blues, transforming a simple graphic into a narrative of musical emotion.",
    },
    {
      id: 2,
      title: 'Desain kaos : Engineering',
      description: 'Desain kaos dengan tema teknik dan keinsinyuran.',
      imageUrl: '/images/2.png',
      category: 'Professional Design',
      details:
        'An innovative t-shirt design that celebrates the world of engineering. This concept seamlessly blends technical precision with creative expression, showcasing the intricate beauty of engineering principles. The design captures the essence of problem-solving, innovation, and the intellectual rigor that defines the engineering profession.',
    },
    {
      id: 3,
      title: 'Poster : Cyborg Evolution',
      description: 'Poster dengan tema evolusi cyborg yang menampilkan keindahan dan kekuatan teknologi.',
      imageUrl: '/images/8.png',
      category: 'Conceptual Poster',
      details:
        "A visionary poster that explores the fascinating intersection of humanity and technology. The 'Cyborg Evolution' design challenges traditional boundaries between organic and mechanical, presenting a stunning visual narrative of technological advancement. Each element is meticulously designed to highlight the potential, beauty, and transformative power of human-machine integration.",
    },
  ];

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Jumbotron */}
      <div
        className="
          relative 
          flex 
          items-center 
          h-[400px] 
          sm:h-[500px] 
          lg:h-[600px] 
          bg-cover 
          bg-center 
          bg-no-repeat 
          rounded-3xl 
          overflow-hidden
          shadow-2xl
          mb-16
          mx-4 
          lg:mx-8
        "
        style={{
          backgroundImage: "url('/api/placeholder/1920/1080')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-purple-700/90" />
        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl">Transformasi Kreatif Dimulai Di Sini</h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">Kami menghadirkan solusi desain inovatif yang mempertemukan seni dan fungsionalitas.</p>
            <div className="flex space-x-4">
              <Link href="/portfolio" className="flex items-center px-6 py-3 font-semibold text-blue-600 transition bg-white rounded-full hover:bg-blue-50 group">
                Lihat Karya
                <ArrowRightIcon className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contactus" className="px-6 py-3 text-white transition border-2 border-white rounded-full hover:bg-white hover:text-blue-600">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Keunggulan */}
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid gap-6 mb-16 sm:grid-cols-2 lg:grid-cols-3">
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
            <div key={index} className="p-6 text-center transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-2">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Karya Unggulan */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Karya Unggulan Kami</h2>
          <p className="max-w-2xl mx-auto text-gray-600">Setiap proyek adalah perjalanan unik penciptaan dan kreativitas</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWorks.map((work) => (
            <div key={work.id} className="overflow-hidden transition-all duration-300 bg-white shadow-lg group rounded-xl hover:scale-105 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img src={work.imageUrl} alt={work.title} className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-b from-transparent to-black/50 group-hover:opacity-100"></div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-800">{work.title}</h3>
                <p className="text-gray-600">{work.description}</p>
                <div className="mt-4">
                  <button onClick={() => openModal(work)} className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800 group">
                    <StarIcon className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative w-[90%] sm:w-[600px] h-[500px] bg-white shadow-2xl rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute z-10 p-2 text-gray-500 rounded-full top-4 right-4 hover:text-gray-800 bg-white/50">
              <XIcon className="w-6 h-6" />
            </button>
            {selectedWork && (
              <div className="flex flex-col h-full">
                {/* Gambar di bagian atas */}
                <div className="flex-shrink-0 h-[200px] w-full">
                  <img src={selectedWork.imageUrl} alt={selectedWork.title} className="object-cover w-full h-full" />
                </div>

                {/* Konten di bagian bawah */}
                <div className="flex-grow p-8 overflow-y-auto">
                  <h3 className="mb-2 text-3xl font-bold text-gray-800">{selectedWork.title}</h3>
                  <p className="mb-2 text-sm font-semibold text-blue-600">{selectedWork.category}</p>
                  <p className="mt-4 leading-relaxed text-gray-700">{selectedWork.details}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
