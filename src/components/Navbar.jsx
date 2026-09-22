
import { useState } from "react";
import { NavLink } from "react-router-dom";
import imagelogo from "../assets/ppntNewlogo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full  bg-[#0B1120] border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
          <div className="w-12 h-12 shrink-0">
              <img src={imagelogo} className="h-full w-full rounded-full object-cover" alt="ppnt logo" />
          </div>

            <span className="text-xl text-[#F8FAFC] font-bold ">
              PPNT 
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-[#06B6D4]"
                      : "text-white hover:text-green"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* CTA */}
            <NavLink
              to="/contact"
              className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-2 items-center justify-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-lg text-sm font-medium transition w-full text-center ${
                      isActive
                        ? "bg-gray-100 text-black"
                        : "text-gray-600 hover:bg-gray-50 hover:text-black"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-white/50 text-white text-center px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
