import Navbar from '@/components/Navbar';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weights: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-nunito',
});

export const metadata = {
  title: 'MazeArtDesign - Company Profile',
  description: 'Website resmi MazeArtDesign',
  icons: {
    icon: '/favicon.ico', // Add a favicon path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${nunito.variable} 
          font-sans 
          bg-gradient-to-br 
          from-gray-50 
          to-gray-100 
          min-h-screen 
          flex 
          flex-col
        `}
      >
        <div className="fixed inset-x-0 top-0 z-50">
          <Navbar />
        </div>

        <div className="flex-grow pt-20">
          <div className="container max-w-6xl px-4 mx-auto">
            <main className="p-6 rounded-xl md:p-8 lg:p-10">{children}</main>
          </div>
        </div>

        <footer className="py-6 mt-8 text-white shadow-inner bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="container max-w-6xl px-4 mx-auto text-center">
            <p className="text-sm opacity-80">© 2024 MazeArtDesign. All rights reserved.</p>
            <div className="flex justify-center mt-2 space-x-4 opacity-70">
              <a href="/privacy" className="text-xs hover:underline">
                Privacy Policy
              </a>
              <a href="/terms" className="text-xs hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
