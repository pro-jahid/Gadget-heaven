import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white py-4 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <Link to="/">
              <span className="text-blue-600">Gadget Heaven</span>
            </Link>
          </div>
          <button
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
          <ul
            className={`md:flex space-x-8 text-gray-700 font-medium absolute md:static bg-white w-full md:w-auto left-0 top-16 md:top-auto py-4 md:py-0 px-6 md:px-0 shadow-md md:shadow-none transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block py-2 md:py-0 hover:text-blue-600 transition ${
                    isActive ? "border-b-2 border-blue-600" : ""
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block py-2 md:py-0 hover:text-blue-600 transition ${
                    isActive ? "border-b-2 border-blue-600" : ""
                  }`
                }
                to="/rechart"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block py-2 md:py-0 hover:text-blue-600 transition ${
                    isActive ? "border-b-2 border-blue-600" : ""
                  }`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>

          {/* Buttons (Cart & Wishlist) */}
          <div className="hidden md:flex space-x-4">
            <button className="border rounded-full hover:bg-gray-300 cursor-pointer text-gray-700 px-3 py-2.5 transition">
              🛒 
            </button>
            <button className="border rounded-full hover:bg-gray-300 cursor-pointer text-gray-700 px-3 py-2.5 transition">
              ❤️
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
