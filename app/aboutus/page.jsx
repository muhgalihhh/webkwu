export default function AboutUsPage() {
  return (
    <div className="relative px-4 py-12 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        {/* Gambar Header */}
        <div className="relative">
          <img src="/images/about-us-banner.png" alt="Tentang MazeArtDesign" className="object-cover w-full h-48 sm:h-64 md:h-72" />
          <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-black to-transparent"></div>
          <h1 className="absolute text-3xl font-extrabold text-white bottom-4 left-6 sm:text-4xl md:text-5xl drop-shadow-lg">
            Tentang <span className="text-blue-300">MazeArtDesign</span>
          </h1>
        </div>

        {/* Konten */}
        <div className="p-6 sm:p-8">
          {/* Pembuka */}
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl md:text-3xl">Inovasi, Kreativitas, dan Solusi Desain</h2>
            <div className="w-12 h-1 mx-auto mt-2 bg-blue-500 rounded-full sm:w-16"></div>
          </div>

          {/* Deskripsi */}
          <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base md:leading-loose">
            <p>
              MazeArtDesign adalah studio desain kreatif yang didirikan untuk menciptakan solusi desain yang inovatif dan bermakna. Dengan pengalaman bertahun-tahun di berbagai industri, kami
              berkomitmen untuk memberikan desain yang tidak hanya estetis tetapi juga fungsional dan berdampak positif.
            </p>
            <p>
              Dari branding hingga desain antarmuka pengguna (UI/UX), kami berkolaborasi dengan klien untuk menerjemahkan visi mereka menjadi karya nyata. Kami percaya bahwa setiap proyek adalah
              kesempatan untuk menceritakan kisah unik dan menciptakan hubungan emosional dengan audiens.
            </p>
            <p>Kami mengundang Anda untuk bergabung dengan perjalanan kami dalam merancang masa depan yang lebih inspiratif dan kreatif.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
