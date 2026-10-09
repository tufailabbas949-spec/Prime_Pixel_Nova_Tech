import { useState } from "react";
import { NavLink } from "react-router-dom";
import imagelogo from "../assets/ppntNewlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* =========================
          MAIN NAVBAR
      ========================== */}
      <nav className="w-full bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 shadow-lg shadow-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-[72px] flex items-center justify-between">

            {/* =========================
                LOGO
            ========================== */}
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 group shrink-0"
            >
              {/* Logo Image */}
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0">

                {/* Glow */}
                <div className="absolute inset-0 bg-[#06B6D4]/30 blur-xl rounded-full group-hover:bg-[#06B6D4]/50 transition-all duration-300" />

                <img
                  src={imagelogo}
                  className="relative h-full w-full rounded-full object-cover border border-white/10 group-hover:border-[#06B6D4]/50 transition-all duration-300"
                  alt="Prime Pixel Nova Tech logo"
                />
              </div>

              {/* Logo Text */}
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl xl:text-2xl font-bold text-white tracking-tight">
                  Prime Pixel Nova Tech
                </h1>

                <p className="text-[10px] lg:text-xs text-[#06B6D4] tracking-[0.25em] uppercase">
                  Digital Solutions
                </p>
              </div>
            </NavLink>


            {/* =========================
                DESKTOP NAVIGATION
            ========================== */}
            <div className="hidden md:flex flex-1 items-center justify-center">

              <div className="flex items-center justify-center gap-1 lg:gap-3">

                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-4 lg:px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 group ${
                        isActive
                          ? "text-[#06B6D4] bg-[#06B6D4]/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}

                        {/* Bottom Active Line */}
                        <span
                          className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-[#06B6D4] rounded-full transition-all duration-300 ${
                            isActive
                              ? "w-5"
                              : "w-0 group-hover:w-5"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                ))}

              </div>
            </div>


            {/* =========================
                DESKTOP GET STARTED
            ========================== */}
            <div className="hidden md:block shrink-0">

              <NavLink
                to="/contact"
                className="group relative overflow-hidden flex items-center gap-2 bg-[#06B6D4] text-[#07111f] px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:bg-[#22D3EE] transition-all duration-300"
              >
                <span>
                  Get Started
                </span>

                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </NavLink>

            </div>


            {/* =========================
                MOBILE MENU BUTTON
            ========================== */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#06B6D4] hover:border-[#06B6D4]/40 hover:bg-[#06B6D4]/5 transition-all duration-300"
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
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
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            </button>

          </div>
        </div>
      </nav>


      {/* =========================
          MOBILE DARK OVERLAY
      ========================== */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />


      {/* =========================
          MOBILE SIDE DRAWER
      ========================== */}
      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0B1120] border-l border-white/10 z-[70] shadow-2xl shadow-black/60 md:hidden transform transition-transform duration-500 ease-out ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* =========================
            DRAWER HEADER
        ========================== */}
        <div className="h-[72px] px-5 flex items-center justify-between border-b border-white/10">

          {/* Drawer Logo */}
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
          >
            <img
              src={imagelogo}
              className="w-10 h-10 rounded-full object-cover border border-white/10"
              alt="PPNT logo"
            />

            <div>
              <h2 className="text-sm font-bold text-white">
                Prime Pixel Nova Tech
              </h2>

              <p className="text-[9px] text-[#06B6D4] tracking-[0.2em] uppercase">
                Digital Solutions
              </p>
            </div>
          </NavLink>


          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-300"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5"
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
          </button>

        </div>


        {/* =========================
            MOBILE NAVIGATION
        ========================== */}
        <div className="px-5 py-8">

          {/* Navigation Title */}
          <p className="text-xs text-gray-500 uppercase tracking-[0.25em] mb-5 text-center">
            Navigation
          </p>


          {/* Navigation Items */}
          <div className="space-y-2">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `relative flex items-center justify-center w-full px-4 py-4 rounded-xl text-center transition-all duration-300 ${
                    isActive
                      ? "bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/20"
                      : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Centered Text */}
                    <span className="font-medium text-center">
                      {item.name}
                    </span>

                    {/* Active Dot */}
                    {isActive && (
                      <span className="absolute right-4 w-2 h-2 rounded-full bg-[#06B6D4] shadow-lg shadow-cyan-400/50" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

          </div>


          {/* =========================
              MOBILE CTA
          ========================== */}
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 w-full flex items-center justify-center gap-2 bg-[#06B6D4] text-[#07111f] px-5 py-4 rounded-xl font-bold shadow-lg shadow-cyan-500/20 hover:bg-[#22D3EE] hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <span>
              Get Started
            </span>

            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </NavLink>

        </div>


        {/* =========================
            DRAWER FOOTER
        ========================== */}
        <div className="absolute bottom-0 left-0 right-0 p-5">

          {/* Gradient Line */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#06B6D4]/40 to-transparent" />

          <p className="text-center text-xs text-gray-600 mt-4">
            © {new Date().getFullYear()} Prime Pixel Nova Tech
          </p>

        </div>

      </aside>
    </>
  );
};

export default Navbar;