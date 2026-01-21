import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaLeaf, FaTruck, FaAward } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-2 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
              Quality Poultry <br />
              <span className="text-amber-600">Rooted in Trust.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed text-justify">
              Salsabeel Maju is more than a supplier. We are a dedicated
              providing Halal, farm-fresh poultry across Malaysia.
            </p>
          </motion.div>
        </div>
        {/* Decorative background element */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 transform translate-x-20 hidden lg:block" />
      </section>

      <div className="max-w-7xl mx-auto px-2 py-20 space-y-24">
        
        {/* 2. WHO WE ARE (Split Layout) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-amber-600">Our Identity</h2>
            <h3 className="text-2xl font-black text-gray-900 leading-tight">Leading with Integrity and Food Safety.</h3>
            <p className="text-gray-600 leading-8 text-lg text-justify">
              Salsabeel Maju Resources operates with a single mission: to bridge the gap 
              between the farm and your kitchen. By following strict Halal standards and 
              ethical farming practices, we ensure that every product meets the highest 
              expectations of hygiene and taste.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 p-8 rounded-3xl text-center">
              <p className="text-amber-500 text-3xl font-black mb-1">100%</p>
              <p className="text-white text-xs uppercase font-bold tracking-widest">Halal</p>
            </div>
            <div className="bg-amber-500 p-8 rounded-3xl text-center">
              <p className="text-white text-3xl font-black mb-1">Fresh</p>
              <p className="text-amber-900 text-xs uppercase font-bold tracking-widest">Daily Delivery</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-3xl text-center col-span-2">
              <p className="text-gray-900 text-3xl font-black mb-1">Strict</p>
              <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Hygiene Control</p>
            </div>
          </div>
        </motion.div>

        {/* 3. CORE VALUES (Cards with Icons) */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-600 mb-4">Our Practices</h2>
            <h3 className="text-2xl lg:text-4xl font-black text-gray-900">The Standards We Live By</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaLeaf />, title: "Natural Growth", desc: "Our poultry is raised without harmful growth hormones or unnecessary antibiotics." },
              { icon: <FaCheckCircle />, title: "Halal Processing", desc: "Strict adherence to Halal standards in every step of the processing cycle." },
              { icon: <FaAward />, title: "Premium Quality", desc: "We use high-nutrition controlled feed to ensure superior meat quality and flavor." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-5 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <div className="text-amber-600 text-3xl mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. SERVICE AREA (Call to Action) */}
        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-900 rounded-[2rem] p-12 lg:p-10 text-center relative overflow-hidden"
        > */}
          {/* <div className="relative z-10">
            <div className="flex justify-center mb-6 text-amber-500 text-4xl">
              <FaTruck />
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              Serving Across Malaysia
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              From local households to large-scale restaurant chains and wholesalers, 
              we provide reliable logistics and consistent poultry quality every single day.
            </p>
          </div>
          {/* Subtle background glow */}
          {/* <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-600/20 blur-[100px]" /> */}
        {/* </motion.div> */}

      </div>
    </div>
  );
}

export default About;