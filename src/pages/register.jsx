import { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Bagian Kiri */}
      <div className={`flex-shrink-0 w-3/5 register-container`}>
        <img
          src="/loginPage.svg"
          alt="Left Image"
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Bagian Kanan */}
      <div className="flex-shrink-0 w-2/5 p-8 flex items-center relative">
        <div className="flex flex-col items-center w-full">
          <img src="/logo_Curhatin.svg" alt="Logo" className="mb-4 w-2/5" />
          <h2 className="text-gray-500 text-xl mt-4 mb-4 font-bold">Daftar Akun</h2>

          {/* Nama Lengkap */}
          <div className={`input-container ${nameFocus ? "focused" : ""}`}>
            <div className="flex items-center">
              <span className="icon">
                <i className="fas fa-user-alt"></i>
              </span>
              <input
                type="text"
                placeholder="Nama Lengkap"
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                style={{ outline: "none" }}
                className={`input-field ${nameFocus ? "orange-placeholder" : ""
                  }`}
              />
            </div>
          </div>

          {/* Email */}
          <div className={`input-container ${emailFocus ? "focused" : ""}`}>
            <div className="flex items-center">
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                placeholder="email@gmail.com"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                style={{ outline: "none" }}
                className={`input-field ${emailFocus ? "orange-placeholder" : ""
                  }`}
              />
            </div>
          </div>

          {/* Password */}
          <div className={`input-container ${passwordFocus ? "focused" : ""}`}>
            <div className="flex items-center">
              <span className="icon">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                placeholder="*********"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                style={{ outline: "none" }}
                className={`input-field ${passwordFocus ? "orange-placeholder" : ""
                  }`}
              />
            </div>
          </div>

          {/* Tombol Daftar */}
          <button className="register-button w-48">
            <span className="icon">
              <i className="fas fa-user-plus"></i>
            </span>
            Daftar
          </button>

          {/* Sudah Punya Akun */}
          <div className="mt-4 text-base">
            Sudah punya akun? <Link to="/" style={{ color: '#E38B29' }} className="font-bold">Masuk</Link>
          </div>

          {/* Tombol Kembali ke Beranda */}
          <div className="mt-1">
            <a href="/login.jsx" style={{ color: '#A1815D' }} className="font-bold text-sm">Kembali ke Beranda</a>
          </div>

          {/* By Curhat-in Company */}
          <div className="text-lg font-semibold absolute bottom-8" style={{ color: '#B8B8B8' }} >
            By Curhat-in Company
          </div>
        </div>
        <img src="/ellipse.svg" alt="buble" className="absolute top-0 -right-2 w-[150px] rotate-180" />
        <img src="/ellipse.svg" alt="buble" className="absolute bottom-0 left-[50px] w-[150px]" />
        <img src="/ellipse.svg" alt="buble" className="absolute bottom-0 left-[220px] w-[40px]" />
        <img src="/ellipse.svg" alt="buble" className="absolute bottom-[230px] -right-10 w-[150px] -rotate-90" />
      </div>
    </div>
  );
};

export default Register;