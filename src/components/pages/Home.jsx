import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTruck, FaLeaf, FaShieldAlt } from "react-icons/fa";
import Img2 from "../../assets/2.jpeg";

// Clean, corporate variants
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
    return (
        <div className="min-h-screen  text-gray-800">
            {/* HERO */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">Premium Poultry Supplier</p>
                        <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
                            Trusted Farm-Fresh Poultry
                            <span className="block text-green-700">for Malaysia</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 max-w-xl">
                            We supply hygienically processed, ethically raised poultry products to retailers, wholesalers, and food service partners across Malaysia.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="/products"
                                className="bg-green-500 px-10 text-lg py-4 rounded-lg border border-gray-300 text-white font-semibold hover:bg-green-600 transition"
                            >
                                Our Products
                            </a>
                        </div>
                    </motion.div>

                    {/* Right visual (minimal, professional) */}
                    <motion.div
                        className="rounded-3xl p-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >

                        <img
                            src={Img2}
                            alt="product"
                            className="w-full h-56 object-fit hover:scale-110 transition duration-500"
                        />
                        {/* <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <FaCheckCircle className="text-green-700 mt-1" />
                <span className="text-gray-700">Halal-compliant processing standards</span>
              </li>
              <li className="flex items-start gap-4">
                <FaShieldAlt className="text-green-700 mt-1" />
                <span className="text-gray-700">Strict hygiene & quality assurance</span>
              </li>
              <li className="flex items-start gap-4">
                <FaLeaf className="text-green-700 mt-1" />
                <span className="text-gray-700">Antibiotic & hormone-free farming</span>
              </li>
              <li className="flex items-start gap-4">
                <FaTruck className="text-green-700 mt-1" />
                <span className="text-gray-700">Reliable cold-chain logistics</span>
              </li>
            </ul> */}
                    </motion.div>
                </div>
            </section>

            {/* VALUE PROPOSITION */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <motion.div
                    className="grid md:grid-cols-3 gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {["Consistent Supply", "Certified Quality", "Business-Focused Service"].map((title, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            className="bg-white rounded-xl border p-8 shadow-sm"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Designed to meet the needs of supermarkets, restaurants, and distributors with dependable volumes and professional support.
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <div>
                <footer className="bg-gray-900 text-gray-400">
                    <div className="w-full py-6 flex justify-around">
                        <p className="text-lg">© {new Date().getFullYear()} Salsabeel Maju Malaysia. All rights reserved.</p>
                        <p className="text-lg">Developed by Hamdhan Jahir</p>
                    </div>
                </footer>
            </div>
        </div>

    );
}
