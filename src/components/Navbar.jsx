// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-300 p-4 mx-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </Link>

        {/* Menu */}
        <div className="flex space-x-8">
          <Link to="/" className="text-[#E38B29] font-bold">
            Beranda
          </Link>
          <Link to="/chatbot" className="text-gray-500">
            Chatbot
          </Link>
          <Link to="/layanan-konsultasi" className="text-gray-500">
            Layanan Konsultasi
          </Link>
          <Link to="/materi-edukasi" className="text-gray-500">
            Materi Edukasi
          </Link>
          <Link to="/quiz" className="text-gray-500">
            Quiz
          </Link>
        </div>

        {/* Tombol Masuk */}
        <Link
          to="/login"
          className="bg-[#E38B29] text-white px-4 py-2 rounded-3xl w-32 flex items-center justify-center"
        >
          Masuk
          <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
