'use client';
import { InstagramIcon, MailIcon, MapPinIcon, PhoneIcon, SendIcon } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
      <div className="grid gap-12 overflow-hidden bg-white shadow-xl lg:grid-cols-2 rounded-3xl">
        {/* Contact Form */}
        <div className="p-6 bg-gray-50 sm:p-8 lg:p-12">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 sm:text-4xl">Hubungi Kami</h1>
            <p className="text-gray-600 sm:text-lg">Kami siap membantu Anda dengan segala kebutuhan desain</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan email Anda"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Pesan</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tulis pesan Anda di sini"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-6 py-3 text-white transition bg-blue-500 rounded-full hover:bg-blue-600 group"
                disabled={status === 'loading'}
              >
                <SendIcon className="mr-2 transition group-hover:translate-x-1" />
                {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </div>
          </form>

          {status === 'success' && <p className="mt-4 text-center text-green-500">Pesan berhasil dikirim!</p>}
          {status === 'error' && <p className="mt-4 text-center text-red-500">Terjadi kesalahan. Coba lagi.</p>}
        </div>

        {/* Contact Info and Map */}
        <div className="p-6 sm:p-8 lg:p-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl">Informasi Kontak</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <MailIcon className="mr-4 text-blue-500" />
              <span className="text-sm text-gray-700 sm:text-base">mazeartdesignsupport@gmail.com</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="mr-4 text-green-500" />
              <span className="text-sm text-gray-700 sm:text-base">+62 8579 9196 683</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="mr-4 text-red-500" />
              <span className="text-sm text-gray-700 sm:text-base">Kost Blater 34, Jalan Kendil Wesi, Blater, Kalimanah, Purbalingga</span>
            </div>
            <div className="flex items-center">
              <InstagramIcon className="mr-4 text-purple-500" />
              <a href="https://www.instagram.com/mzr_dsgn" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 sm:text-base">
                @mzr_dsgn
              </a>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg shadow-md h-60 sm:h-80 lg:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15825.33891004328!2d109.339122!3d-7.4281607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65595958fba3d7%3A0x6f991176e517cba6!2sKost%20Blater%2034!5e0!3m2!1sid!2sid!4v1731941203818!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
