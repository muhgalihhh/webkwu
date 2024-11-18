'use client';
import { useState } from 'react';

export default function PortfolioPage() {
  const projects = [
    { title: 'Project 1', description: 'Desain kreatif untuk branding perusahaan.', image: '/images/project1.jpg' },
    { title: 'Project 2', description: 'Ilustrasi untuk kampanye pemasaran.', image: '/images/project2.jpg' },
    { title: 'Project 3', description: 'Desain UI/UX untuk aplikasi mobile.', image: '/images/project3.jpg' },
    { title: 'Project 4', description: 'Pengembangan website untuk e-commerce.', image: '/images/project4.jpg' },
    { title: 'Project 5', description: 'Desain logo untuk startup teknologi.', image: '/images/project5.jpg' },
    { title: 'Project 6', description: 'Animasi untuk presentasi bisnis.', image: '/images/project6.jpg' },
    { title: 'Project 7', description: 'Desain sistem interaktif untuk edukasi.', image: '/images/project7.jpg' },
    { title: 'Project 8', description: 'Pengembangan platform SaaS untuk startup.', image: '/images/project8.jpg' },
    { title: 'Project 9', description: 'Desain marketing untuk media sosial.', image: '/images/project9.jpg' },
    { title: 'Project 10', description: 'Desain branding untuk event besar.', image: '/images/project10.jpg' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Filter berdasarkan pencarian
  const filteredProjects = projects.filter((project) => project.title.toLowerCase().includes(searchQuery.toLowerCase()));

  // Menghitung total halaman
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Mendapatkan proyek yang ditampilkan pada halaman saat ini
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Fungsi untuk mengganti halaman
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold text-gray-800">Portofolio Kami</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari proyek..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Daftar Proyek */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((project, index) => (
          <div key={index} className="p-4 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
            <img src={project.image} alt={project.title} className="object-cover w-full h-64 rounded-lg" />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">{project.title}</h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Paging Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        {/* Previous Button */}
        <button
          className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Page Number Buttons */}
        {[...Array(totalPages)].map((_, index) => (
          <button key={index} className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
