import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LoginReminder = () => {
  return (
    <div className="bg-[#FFF0DE] h-screen w-full">
      {/* Navbar */}
      <div className="w-full flex justify-center">
        <nav className="border-b border-gray-300 absolute w-[90%] h-[80px] flex justify-center items-center">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link to="/">
              <img src="/logo.svg" alt="Logo" className="h-8" />
            </Link>

            {/* Menu */}
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-500 font-bold">
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
      </div>

      {/* Konten halaman */}
      <div className="flex p-8 justify-center items-center text-center h-full">
        <div className="">
          {/* Gambar di tengah halaman */}
          <img
            src="/mohonlogin.svg"
            alt="Gambar"
            className="mx-auto max-w-full mb-4 w-[300px]"
          />

          {/* Tulisan di bawah gambar */}
          <p className="font-bold text-[24px]">
            Mohon untuk login terlebih dahulu
          </p>
          <p className="mb-4">
            Untuk menggunakan fitur Quiz Game, mohon <br />
            untuk login terlebih dahulu atau membuat akun
          </p>

          <div className="flex space-x-4 justify-center mt-8">
            <button className="border-2 border-[#E38B29] text-[#E38B29] hover:bg-[#E38B29] hover:text-white px-4 py-2 rounded-3xl w-40">
              Daftar Akun
            </button>
            <button className="border-2 border-[#E38B29] text-[#E38B29] hover:bg-[#E38B29] hover:text-white px-4 py-2 rounded-3xl w-40">
              Masuk Akun
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginReminder;
