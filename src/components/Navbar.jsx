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

  useEffect(() => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
    setLoggedIn(!!token);

    const storedUsername = localStorage.getItem("username") || "";
    const storedEmail = localStorage.getItem("email") || "";
    setUsername(storedUsername);
    setEmail(storedEmail);
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
          {/* ... (Your existing menu items) */}
        </div>

        {isLoggedIn ? (
          <div className="relative">
            <FontAwesomeIcon
              icon={faUser}
              className="text-[#E38B29] font-bold cursor-pointer"
              onClick={handleProfileClick}
            />
            {showProfileBox && (
              <div className="absolute bg-white p-4 rounded border border-gray-300 mt-2 left-[-140px]">
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <button
                  className="text-red-500 cursor-pointer underline"
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
