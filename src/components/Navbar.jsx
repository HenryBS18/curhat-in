import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [showProfileBox, setShowProfileBox] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
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
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </Link>

        <div className="flex space-x-8">
          {/* Menu */}
          <div className="flex space-x-8">
          <Link to="/home" className={location.pathname === "/home" ? "text-[#E38B29] font-bold" : "text-gray-500"}>
            Beranda
          </Link>
            <Link
              to="/Chatbot"
              className={location.pathname === "/Chatbot" ? "text-[#E38B29] font-bold" : "text-gray-500"}
            >
              {isLoggedIn ? (
                "Chatbot"
              ) : (
                <span onClick={() => (window.location.href = "/loginreminder")}>Chatbot</span>
              )}
            </Link>
            <Link
              to="/Layanan-konsultasi"
              className={location.pathname === "/layanankonsultasi" ? "text-[#E38B29] font-bold" : "text-gray-500"}
            >
              {isLoggedIn ? (
                "LayananKonsultasi"
              ) : (
                <span onClick={() => (window.location.href = "/loginreminder")}>Layanan Konsultasi</span>
              )}
            </Link>
            <Link
              to="/education"
              className={location.pathname === "/materiedukasi" ? "text-[#E38B29] font-bold" : "text-gray-500"}
            >
              {isLoggedIn ? (
                "MateriEdukasi"
              ) : (
                <span onClick={() => (window.location.href = "/loginreminder")}>Login Reminder</span>
              )}
            </Link>
            <Link
              to="/Quiz"
              className={location.pathname === "/Quiz" ? "text-[#E38B29] font-bold" : "text-gray-500"}
            >
              {isLoggedIn ? (
                "Quiz"
              ) : (
                <span onClick={() => (window.location.href = "/loginreminder")}>Quiz</span>
              )}
            </Link>
          </div>
        </div>

        {isLoggedIn ? (
          <div className="relative">
            <FontAwesomeIcon
              icon={faUser}
              className="text-[#E38B29] font-bold cursor-pointer"
              onClick={handleProfileClick}
            />
            {showProfileBox && (
              <div className="absolute bg-[#E38B29] text-white p-4 rounded border border-gray-300 mt-2 left-[-180px] w-48">
                <div className="flex items-center mb-2">
                  {profilePicture ? (
                    <img src={profilePicture} alt="Profile" className="h-8 w-8 rounded-full mr-2" />
                  ) : (
                    <FontAwesomeIcon icon={faUser} className="text-white h-8 w-8 rounded-full mr-2" />
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
