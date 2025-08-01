import { Menu, X, Home, Info, Package, FileText, Phone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/react.svg'; // ✅ replace with your actual logo path

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Mobile Navigation */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
        <button onClick={() => setSidebarOpen(true)}>
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>
{/* Desktop Navigation */}
<div className="hidden md:flex items-center justify-between px-6 py-4">
  {/* Left: Logo */}
  <div className="flex items-center space-x-2">
  <img src={logo} alt="Logo" className="w-10 h-10 object-cover rounded-full" />
  {/* Optional: site name */}
  <span className="text-xl font-bold text-green-800 hidden lg:inline">Sikkim Trek</span>
</div>
  {/* Right: Menu */}
  <div className="flex space-x-6">
    <Link to="/" className="flex items-center gap-2 text-gray-800 text-sm md:text-base">
      <Home className="w-5 h-5" /> Home
    </Link>
    <Link to="/about" className="flex items-center gap-2 text-gray-800 text-sm md:text-base">
      <Info className="w-5 h-5" /> About Us
    </Link>

    {/* Packages Dropdown */}
        <Link to="/trek-packages" className="flex items-center gap-2 text-gray-800 text-sm md:text-base">
          <ChevronDown className="w-5 h-5" /> Trek Packages
          </Link>
        {/* Add more subitems here */}
    
  

    <Link to="/blog" className="flex items-center gap-2 text-gray-800 text-sm md:text-base">
      <FileText className="w-5 h-5" /> Blog
    </Link>
    <Link to="/contact" className="flex items-center gap-2 text-gray-800 text-sm md:text-base">
      <Phone className="w-5 h-5" /> Contact
    </Link>
  </div>
</div>


      {/* Mobile Sidebar */}
  
<div
  className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ${
    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
  } w-[75%] max-w-sm`}
>
  <div className="flex items-center justify-between px-4 py-3 border-b">
    <img src={logo} alt="Logo" className="h-8 w-auto" />
    <button onClick={() => setSidebarOpen(false)}>
      <X className="w-5 h-5 text-gray-800" />
    </button>
  </div>

  <div className="p-4 space-y-2">
    <Link
      to="/"
      className="flex items-center gap-2 text-gray-800 px-3 py-2 rounded"
      onClick={() => setSidebarOpen(false)}
    >
      <Home className="w-5 h-5" /> Home
    </Link>

    <Link
      to="/about"
      className="flex items-center gap-2 text-gray-800 px-3 py-2 rounded"
      onClick={() => setSidebarOpen(false)}
    >
      <Info className="w-5 h-5" /> About Us
    </Link>

    <hr />

    <Link
      to="/trek-packages"
      className="flex items-center gap-2 text-gray-800 px-3 py-2 rounded"
      onClick={() => setSidebarOpen(false)}
    >
      <Package className="w-5 h-5" /> Trek Packages
    </Link>

    <hr />

    <Link
      to="/blog"
      className="flex items-center gap-2 text-gray-800 px-3 py-2 rounded"
      onClick={() => setSidebarOpen(false)}
    >
      <FileText className="w-5 h-5" /> Blog
    </Link>

    <Link
      to="/contact"
      className="flex items-center gap-2 text-gray-800 px-3 py-2 rounded"
      onClick={() => setSidebarOpen(false)}
    >
      <Phone className="w-5 h-5" /> Contact
    </Link>
  </div>
</div>

    </nav>
  );
}
