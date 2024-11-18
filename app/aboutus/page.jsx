export default function AboutUsPage() {
  return (
    <div className="relative px-6 py-12">
      {/* Container */}
      <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        {/* Gambar Header */}
        <div className="relative">
          <img src="/images/about-us-banner.png" alt="Tentang MazeArtDesign" className="object-cover w-full h-64" />
          <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-black to-transparent"></div>
          <h1 className="absolute text-4xl font-extrabold text-white bottom-4 left-6 drop-shadow-lg">
            Tentang <span className="text-blue-300">MazeArtDesign</span>
          </h1>
        </div>

        {/* Konten */}
        <div className="p-8">
          {/* Pembuka */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Inovasi, Kreativitas, dan Solusi Desain</h2>
            <div className="w-16 h-1 mx-auto mt-2 bg-blue-500 rounded-full"></div>
          </div>

          {/* Deskripsi */}
          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
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
