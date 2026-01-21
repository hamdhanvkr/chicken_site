import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaTruck, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";
import Img1 from "../../assets/1.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative px-2 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Premium Quality</span>
            <h1 className="text-4xl lg:text-7xl font-black text-gray-900 mt-6 leading-none">
              Freshness You
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-amber-600"> Can Trust.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-lg text-justify">
              Salsabeel Maju delivers ethically raised, Halal-compliant poultry products directly from our farm to your business or doorstep.We bridge the gap between farm-fresh quality and modern convenience.
              Whether you are a restaurant owner seeking a consistent supply or a
              family looking for healthy, antibiotic-free meals, we ensure our
              delivery reaches you with the freshness of the morning harvest.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold shadow-xl shadow-green-100 hover:bg-green-700 transition-all text-center">
                Explore Products
              </Link>
              <Link to="/about" className="px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-all text-center">
                Our Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute -inset-4 bg-amber-500/10 rounded-full blur-3xl" />
            <img src={Img1} alt="Poultry" className="relative w-full h-[400px] object-fit rounded-[2rem]" />
          </motion.div>
        </div>
      </section>

      {/* STATS/FEATURES */}
      <section className="py-20 px-2">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: FaShieldAlt, title: "Halal", desc: "Strict adherence to Islamic slaughtering and processing standards." },
            { icon: FaAward, title: "Hormone Free", desc: "Naturally raised poultry without growth hormones or antibiotics." },
            { icon: FaTruck, title: "Supply", desc: "Advanced logistics to ensure products stay fresh during delivery." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <item.icon className="text-4xl text-amber-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}