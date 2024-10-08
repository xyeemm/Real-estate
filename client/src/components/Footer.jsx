import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-200 shadow-md  min-h-32">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* Brand Section */}
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Zaeem</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        
        {/* Social Icons in place of Home, About, Contact */}
        <ul className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-slate-600 hover:text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-slate-600 hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-slate-600 hover:text-pink-500" />
          </a>
        </ul>
      </div>

      <div className="text-center text-slate-600 text-xs py-2">
        © 2024 Zaeem Estate. All rights reserved.
      </div>
    </footer>
  );
}
