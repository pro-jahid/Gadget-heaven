import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
   
    <div>
      <nav className="bg-white shadow-md py-4 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">Gadget Heaven</span>
          </div>

          {/* Menu Button for MD Devices */}
          <button
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Navbar Links (Hidden on small screens) */}
          <ul
            className={`md:flex space-x-8 text-gray-700 font-medium absolute md:static bg-white w-full md:w-auto left-0 top-16 md:top-auto py-4 md:py-0 px-6 md:px-0 shadow-md md:shadow-none transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 hover:text-blue-600 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 hover:text-blue-600 transition"
              >
                Statistics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 hover:text-blue-600 transition"
              >
                Dashboard
              </a>
            </li>
          </ul>

          {/* Buttons (Cart & Wishlist) */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition">
              🛒 Cart
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
              ❤️ Wishlist
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
