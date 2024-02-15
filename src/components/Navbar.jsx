import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [showProfileBox, setShowProfileBox] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    setLoggedIn(!!token);

    const storedUsername = localStorage.getItem("username") || "";
    const storedEmail = localStorage.getItem("email") || "";
    const storedProfilePicture = localStorage.getItem("profilePicture") || "";

    setUsername(storedUsername);
    setEmail(storedEmail);
    setProfilePicture(storedProfilePicture);
  }, []);

  const handleProfileClick = () => {
    setShowProfileBox(!showProfileBox);
  };

  const handleLogout = () => {
    // Clear token cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Clear localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("profilePicture");

    // Update isLoggedIn state
    setLoggedIn(false);
  };

  return (
    <nav className="border-b border-gray-300 py-4">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </Link>

        <div className="flex space-x-8">
          {/* Menu */}
          <div className="flex space-x-8">
            <Link to="/home" className={location.pathname === "/home" ? "text-[#E38B29] font-bold" : "text-gray-500"}>
              Beranda
            </Link>
            <Link to="/Chatbot" className={location.pathname === "/Chatbot" ? "text-[#E38B29] font-bold" : "text-gray-500"}>
              Chatbot
            </Link>
            <Link to="/layanan-konsultasi" className={location.pathname === "/layanan-konsultasi" ? "text-[#E38B29] font-bold" : "text-gray-500"}>
              Layanan Konsultasi
            </Link>
            <Link to="/materi-edukasi" className={location.pathname === "/materi-edukasi" ? "text-[#E38B29] font-bold" : "text-gray-500"}>
              Materi Edukasi
            </Link>
            <Link to="/quiz" className={location.pathname === "/quiz" ? "text-[#E38B29] font-bold" : "text-gray-500"}>
              Quiz
            </Link>
          </div>
        </div>

        {isLoggedIn ? (
          <div className="relative -left-3">
            <div className="scale-[200%]">
              <FontAwesomeIcon
                icon={faUser}
                className="text-[#E38B29] font-bold cursor-pointer"
                onClick={handleProfileClick}
              />
            </div>
            {showProfileBox && (
              <div className="absolute z-30 bg-[#E38B29] text-white p-4 rounded border border-gray-300 mt-2 left-[-180px] w-48">
                <div className="flex items-center mb-2">
                  {profilePicture ? (
                    <img
                      src={profilePicture}
                      alt="Profile"
                      className="h-10 w-10 rounded-full mr-2"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-white h-10 w-10 rounded-full mr-2"
                    />
                  )}
                  <div>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>
                  </div>
                </div>
                <button
                  className="bg-white text-[#E38B29] px-2 py-1 rounded cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/"
            className="bg-[#E38B29] text-white px-4 py-2 rounded-3xl w-32 flex items-center justify-center"
          >
            Masuk
            <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
