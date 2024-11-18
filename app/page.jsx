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
      title: 'Lorem Ipsum 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/images/1.png',
      category: 'Lorem Ipsum',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl id consequat consectetur, nunc nunc ultricies nunc, id lacinia risus nisl sed nunc. Sed auctor, mauris id luctus tincidunt, nunc nunc ultricies nunc, id lacinia risus nisl sed nunc.',
    },
    {
      id: 2,
      title: 'Lorem Ipsum 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/images/2.png',
      category: 'Lorem Ipsum',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl id consequat consectetur, nunc nunc ultricies nunc, id lacinia risus nisl sed nunc. Sed auctor, mauris id luctus tincidunt, nunc nunc ultricies nunc, id lacinia risus nisl sed nunc.',
    },
    {
      id: 3,
      title: 'Lorem Ipsum 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/images/3.png',
      category: 'Lorem Ipsum',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl id consequat consectetur, nunc nunc ultricies nunc, id lacinia risus nisl sed nunc. Sed auctor, mauris id luctus tincidunt, nunc nunc ultricies nunc, id lacinia risus nisl sed nunc.',
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
    <div className="px-4 py-12 sm:px-6 lg:px-8">
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
            <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl">Transformasi Kreatif Dimulai Di Sini</h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">Kami menghadirkan solusi desain inovatif yang mempertemukan seni dan fungsionalitas.</p>
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
          <div key={index} className="p-6 text-center transition-transform bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-2">
            <div className="flex justify-center mb-4">{benefit.icon}</div>
            <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.desc}</p>
          </div>
        ))}
      </div>

      {/* Karya Unggulan */}
      {/* Karya Unggulan */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Karya Unggulan Kami</h2>
        <p className="max-w-2xl mx-auto text-gray-600">Setiap proyek adalah perjalanan unik penciptaan dan kreativitas</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredWorks.map((work) => (
          <div key={work.id} className="overflow-hidden transition-transform bg-white shadow-lg rounded-xl hover:scale-105">
            <img src={work.imageUrl} alt={work.title} className="object-cover w-full h-56" />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">{work.title}</h3>
              <p className="text-gray-600">{work.description}</p>
              <div className="mt-4">
                <button onClick={() => openModal(work)} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  <StarIcon className="w-5 h-5 mr-2" />
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            <button onClick={closeModal} className="absolute text-gray-500 top-3 right-3 hover:text-gray-800">
              <XIcon className="w-6 h-6" />
            </button>
            {selectedWork && (
              <>
                <img src={selectedWork.imageUrl} alt={selectedWork.title} className="object-cover w-full h-48 rounded-lg" />
                <div className="mt-4">
                  <h3 className="mb-2 text-2xl font-bold">{selectedWork.title}</h3>
                  <p className="text-sm text-gray-500">{selectedWork.category}</p>
                  <p className="mt-4 text-gray-700">{selectedWork.details}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
