import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://wt81rphl-3000.asse.devtunnels.ms/login", {
        email,
        password,
      });

      const { token, username, email: userEmail } = response.data;

      // Save the token as a cookie
      document.cookie = `token=${token}; path=/;`;

      // Save username and email to local storage
      localStorage.setItem('username', username);
      localStorage.setItem('email', userEmail);

      // Redirect to the home page
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  useEffect(() => {
    // Check if a token is already present in cookies
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
    if (token) {
      // If a token is present, the user is already logged in, redirect to home
      navigate("/home");
    }
  }, [navigate]);

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
          <h2 className="text-gray-500 text-xl mt-4 mb-4 font-bold">Masuk Akun</h2>

          {/* Email */}
          <div className={`input-container ${emailFocus ? "focused" : ""}`}>
            <div className="flex items-center">
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                placeholder="email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                style={{ outline: "none" }}
                className={`input-field ${emailFocus ? "orange-placeholder" : ""}`}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                style={{ outline: "none" }}
                className={`input-field ${passwordFocus ? "orange-placeholder" : ""}`}
              />
            </div>
          </div>

          {/* Tombol Daftar */}
          <button onClick={handleLogin} className="register-button w-48">
            <span className="icon">
              <i className="fas fa-sign-in-alt"></i>
            </span>
            Masuk
          </button>

          {/* Sudah Punya Akun */}
          <div className="mt-4 text-base">
            Belum punya akun? <Link to="/register" style={{ color: '#E38B29' }} className="font-bold">Daftar</Link>
          </div>

          {/* Tombol Kembali ke Beranda */}
          <div className="mt-1">
            <Link to="/" style={{ color: '#A1815D' }} className="font-bold text-sm">Kembali ke Beranda</Link>
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

export default Login;
