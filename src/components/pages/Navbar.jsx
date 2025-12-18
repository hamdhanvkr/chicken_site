import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaBars,
  FaTimes,
  FaFeatherAlt,
  FaArrowRight,
} from "react-icons/fa";

/* ------------------ NAV CONFIG ------------------ */

const navLinks = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "About", path: "/about", icon: FaInfoCircle },
  { name: "Products", path: "/products", icon: FaBoxOpen },
];

const ctaLink = { name: "Contact Us", path: "/contact", icon: FaArrowRight };

/* ------------------ ANIMATIONS ------------------ */

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3 },
  },
  exit: { opacity: 0, height: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

/* ------------------ COMPONENT ------------------ */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `
      relative flex items-center gap-2 px-3 py-2 font-semibold transition-all duration-300
      ${isActive
        ? "text-amber-600"
        : "text-gray-700 hover:text-amber-600"}
    `;
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white shadow-md"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`flex items-center justify-between transition-all duration-300
          ${scrolled ? "py-3" : "py-6"}`}
        >
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 font-extrabold tracking-wide text-amber-600"
          >
            <FaFeatherAlt
              className={`transition-transform duration-300
                ${scrolled ? "text-3xl scale-90" : "text-4xl"}
              `}
            />
            <span className="text-xl sm:text-2xl">Salsabeel Maju</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.name} to={link.path} className={getLinkClass(link.path)}>
                  <link.icon className="text-lg" />
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              to={ctaLink.path}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300
                ${scrolled
                  ? "bg-amber-500 text-white shadow hover:bg-amber-600"
                  : "bg-amber-600 text-white shadow-lg hover:bg-amber-700"}
              `}
            >
              {ctaLink.name}
              <ctaLink.icon />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-3xl p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white border-t shadow-lg"
          >
            <ul className="p-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.li key={link.name} variants={itemVariants}>
                    <Link
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-semibold transition
                        ${isActive
                          ? "bg-amber-500 text-white shadow"
                          : "text-gray-700 hover:bg-gray-100"}
                      `}
                    >
                      <link.icon />
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}

              {/* MOBILE CTA */}
              <motion.li variants={itemVariants} className="pt-3">
                <Link
                  to={ctaLink.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-amber-500 text-white font-bold text-lg rounded-full shadow hover:bg-amber-600"
                >
                  {ctaLink.name}
                  <ctaLink.icon />
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
