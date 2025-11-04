import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/gallery/logo.png";  // ✅ import your logo file

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(18,58,56,0.85)] backdrop-blur-md border-b border-gold/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link to="/" className="font-serif text-gold text-2xl tracking-wider flex items-center">
          <img src={Logo} alt="Bourbon & Breeze" className="h-20 w-55 mr-2" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-gold/90">
          <Link to="/menu" className="hover:text-white transition">Menu</Link>
          <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
  <div className="md:hidden bg-[rgba(18,58,56,0.95)] backdrop-blur-md text-gold text-lg">
    <div className="flex flex-col space-y-3 p-5 animate-slideDown">
      <Link
        to="/"
        onClick={() => setOpen(false)}
        className="hover:text-white transition duration-200 border-b border-gold/20 pb-2"
      >
        Home
      </Link>

      <Link
        to="/menu"
        onClick={() => setOpen(false)}
        className="hover:text-white transition duration-200 border-b border-gold/20 pb-2"
      >
        Menu
      </Link>

      <Link
        to="/gallery"
        onClick={() => setOpen(false)}
        className="hover:text-white transition duration-200 pb-2"
      >
        Gallery
      </Link>
    </div>
  </div>
)}

    </nav>
  );
}
