import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-md py-4 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <Link to="/"><span className="text-blue-600">Gadget Heaven</span></Link>
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
                className="block py-2 md:py-0 hover:text-blue-600 transition"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block py-2 md:py-0 hover:text-blue-600 transition"
                to="/rechart"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block py-2 md:py-0 hover:text-blue-600 transition"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>

          {/* Buttons (Cart & Wishlist) */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-gray-200 hover:bg-gray-300 cursor-pointer text-gray-700 px-4 py-2 rounded-lg transition">
              🛒 Cart
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-4 py-2 rounded-lg transition">
              ❤️ Wishlist
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
