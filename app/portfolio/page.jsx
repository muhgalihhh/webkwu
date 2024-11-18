'use client';
import { useState } from 'react';

export default function PortfolioPage() {
  const projects = [
    { title: 'Lorem Ipsum 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/images/1.png' },
    { title: 'Lorem Ipsum 2', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', image: '/images/2.png' },
    { title: 'Lorem Ipsum 3', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', image: '/images/3.png' },
    { title: 'Lorem Ipsum 4', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.', image: '/images/4.png' },
    { title: 'Lorem Ipsum 5', description: 'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.', image: '/images/5.png' },
    { title: 'Lorem Ipsum 6', description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.', image: '/images/6.png' },
    { title: 'Lorem Ipsum 7', description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.', image: '/images/7.png' },
    { title: 'Lorem Ipsum 8', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '/images/8.png' },
    { title: 'Lorem Ipsum 9', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: '/images/9.png' },
    { title: 'Lorem Ipsum 10', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/images/10.png' },
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
