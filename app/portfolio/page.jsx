'use client';
import { useState } from 'react';

export default function PortfolioPage() {
  const projects = [
    { title: 'Project 1', description: 'Desain kreatif untuk branding perusahaan.', image: '/images/1.png' },
    { title: 'Project 2', description: 'Ilustrasi untuk kampanye pemasaran.', image: '/images/2.png' },
    { title: 'Project 3', description: 'Desain UI/UX untuk aplikasi mobile.', image: '/images/3.png' },
    { title: 'Project 4', description: 'Pengembangan website untuk e-commerce.', image: '/images/4.png' },
    { title: 'Project 5', description: 'Desain logo untuk startup teknologi.', image: '/images/5.png' },
    { title: 'Project 6', description: 'Animasi untuk presentasi bisnis.', image: '/images/6.png' },
    { title: 'Project 7', description: 'Desain sistem interaktif untuk edukasi.', image: '/images/7.png' },
    { title: 'Project 8', description: 'Pengembangan platform SaaS untuk startup.', image: '/images/8.png' },
    { title: 'Project 9', description: 'Desain marketing untuk media sosial.', image: '/images/9.png' },
    { title: 'Project 10', description: 'Desain branding untuk event besar.', image: '/images/10.png' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const filteredProjects = projects.filter((project) => project.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-800 sm:text-4xl lg:text-5xl">Portofolio Kami</h1>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Cari proyek..."
          className="w-full p-3 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((project, index) => (
          <div key={index} className="p-4 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="overflow-hidden rounded-lg aspect-video">
              <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-800 sm:text-2xl">{project.title}</h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-4">
        {/* Previous Button */}
        <button
          className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button key={index} className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
