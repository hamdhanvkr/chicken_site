import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaInfoCircle, FaBoxOpen, FaBars, FaTimes, FaFeatherAlt, FaArrowRight } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "About", path: "/about", icon: FaInfoCircle },
  { name: "Products", path: "/products", icon: FaBoxOpen },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-white py-4"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-amber-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <FaFeatherAlt className="text-white text-xl" />
          </div>
          <span className="text-sm lg:text-xl font-black text-gray-900">
            SALSABEEL MAJU <span className="text-amber-600">RESOURCES (M) SDN.BHD</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                location.pathname === link.path ? "bg-amber-50 text-amber-600" : "text-gray-600 hover:text-amber-600 hover:bg-gray-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-bold hover:bg-amber-600 transition-colors flex items-center gap-2 shadow-lg shadow-gray-200"
          >
            Contact Us <FaArrowRight className="text-xs" />
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden text-2xl text-gray-900" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b shadow-xl md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-xl font-bold ${
                    location.pathname === link.path ? "bg-amber-600 text-white" : "bg-gray-50 text-gray-700"
                  }`}
                >
                  <link.icon /> {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="p-4 bg-green-600 text-white rounded-xl font-bold text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}