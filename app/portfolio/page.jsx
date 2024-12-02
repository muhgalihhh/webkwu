'use client';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Desain kaos : Skull of Blues',
      description: 'Desain kaos dengan motif tengkorak dan dengan suasana kesedihan.',
      image: '/images/1.png',
      fullDescription: 'A detailed t-shirt design exploring the emotional depth of blues through a skull motif, capturing the melancholy and introspective nature of the genre.',
    },
    {
      title: 'Desain kaos : Engineering',
      description: 'Desain kaos dengan tema teknik dan keinsinyuran.',
      image: '/images/2.png',
      fullDescription: 'An innovative t-shirt design that celebrates the world of engineering, incorporating technical elements and the spirit of innovation.',
    },
    {
      title: 'Desain kaos : Commissions Art',
      description: 'Desain comission dari client dengan sesuai permintaan client',
      image: '/images/3.png',
      fullDescription: 'Custom-designed t-shirt created specifically to meet client requirements, showcasing personalized artistic expression.',
    },
    {
      title: 'Desain kaos : Commissions Art',
      description: 'Desain comission dari client dengan sesuai permintaan client',
      image: '/images/4.png',
      fullDescription: 'Another bespoke t-shirt design tailored to the unique vision and preferences of our valued client.',
    },
    {
      title: 'Desain Pamflet',
      description: 'Desain pamflet kegiatan di himpunan mahasiswa',
      image: '/images/5.png',
      fullDescription: 'Professionally designed flyer for a student association event, combining creativity with clear communication.',
    },
    {
      title: 'Desain kaos : Commissions Art',
      description: 'Desain comission dari client dengan sesuai permintaan client',
      image: '/images/6.png',
      fullDescription: "Unique commissioned t-shirt design that brings the client's creative concept to life.",
    },
    {
      title: 'Desain kaos : Commissions Art',
      description: 'Desain comission dari client dengan sesuai permintaan client',
      image: '/images/7.png',
      fullDescription: 'Another expertly crafted commissioned t-shirt that reflects the individual style of our client.',
    },
    {
      title: 'Poster : Cyborg Evolution',
      description: 'Poster dengan tema evolusi cyborg yang menampilkan keindahan dan kekuatan teknologi.',
      image: '/images/8.png',
      fullDescription: 'A visionary poster exploring the evolution of cyborgs, highlighting the beauty and power of technological integration.',
    },
    {
      title: 'Poster : Virtual Reality',
      description: 'Desain poster dengan tema virtual reality dimana membandingkan character di dunia asli dan dunia virtual',
      image: '/images/9.png',
      fullDescription: 'An innovative poster that juxtaposes characters from real and virtual worlds, exploring the boundaries of perception and technology.',
    },
    {
      title: 'Desain kaos : Informatics Belongs to Me',
      description: 'Desain kaos suporter dengan tema "Informatics Belongs to Me" untuk memperlihatkan rasa bangga terhadap jurusan informatika.',
      image: '/images/10.png',
      fullDescription: 'A spirited t-shirt design for supporters, expressing pride and passion for the field of informatics.',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsPerPage = 3;

  const filteredProjects = projects.filter((project) => project.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 sm:text-5xl lg:text-6xl">Portofolio Kami</h1>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari proyek..."
              className="w-full px-4 py-3 text-gray-800 transition duration-300 border-2 border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
            <svg className="absolute right-4 top-3.5 text-gray-400" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project, index) => (
            <div key={index} className="transition-all duration-300 transform cursor-pointer group hover:scale-105" onClick={() => openModal(project)}>
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg aspect-video">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 transition-opacity duration-300 bg-blue-500 opacity-0 group-hover:opacity-20"></div>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800 truncate">{project.title}</h2>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg'
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`w-10 h-10 rounded-full transition-all duration-300 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg'
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeModal}>
            <div className="relative w-11/12 max-w-4xl overflow-hidden bg-white shadow-2xl rounded-xl" onClick={(e) => e.stopPropagation()}>
              <button className="absolute text-gray-600 transition-all duration-300 top-4 right-4 z-60 hover:text-gray-900" onClick={closeModal}>
                <X size={32} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-square">
                  <img src={selectedProject.image} alt={selectedProject.title} className="object-cover w-full h-full" />
                </div>
                <div className="p-6 md:p-10">
                  <h2 className="mb-4 text-2xl font-bold text-gray-800">{selectedProject.title}</h2>
                  <p className="mb-4 text-gray-600">{selectedProject.description}</p>
                  <p className="leading-relaxed text-gray-700">{selectedProject.fullDescription}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
