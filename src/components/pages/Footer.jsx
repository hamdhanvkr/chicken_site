import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-800 mt-auto">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start mb-10">

                    <div className="flex flex-col items-center sm:items-start">
                        <span className="text-3xl lg:text-2xl font-black text-white mb-2">
                            Salsabeel  <span className="text-amber-500">Maju</span>
                        </span>
                    </div>

                    <div className="flex flex-col items-center">
                        <h4 className="text-amber-500 font-bold mb-3 text-xl">Quick Links</h4>
                        <nav className="flex flex-wrap justify-center gap-6">
                            <Link to="/" className="text-lg hover:text-amber-500 transition">Home</Link>
                            <Link to="/about" className="text-lg hover:text-amber-500 transition">About</Link>
                            <Link to="/products" className="text-lg hover:text-amber-500 transition">Products</Link>
                            <Link to="/contact" className="text-lg hover:text-amber-500 transition">Contact</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col items-center sm:items-end">
                        <h4 className="text-amber-500 font-bold mb-3 text-xl">Support</h4>
                        <div className="flex flex-col items-center sm:items-end gap-y-2 lg:text-lg">
                            <a href="tel:+60168050930" className="flex items-center gap-2 hover:text-white transition ">
                                <FaPhone className="text-amber-500 text-[15px] " /> +6016-8050930
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 lg:text-lg  font-bold">
                    <p className="text-white opacity-80 text-center sm:text-left">
                        © {new Date().getFullYear()} Salsabeel Maju Resources
                    </p>

                    <p className="text-white text-center sm:text-right ">
                        Site by <span className="text-amber-500 ml-1">Hamdhan Jahir</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}