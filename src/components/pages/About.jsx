import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            About Salsabeel Maju Malaysia
          </h1>
          <p className="text-lg text-gray-600">
            A trusted poultry supplier delivering fresh, hygienic and responsibly farmed poultry products across Malaysia.
          </p>
        </motion.div>

        {/* WHO WE ARE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm p-10"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-7 text-lg">
            Salsabeel Maju Resources is a family-operated poultry farm committed to
            delivering high-quality chicken and farm-fresh eggs. Our operations
            follow strict hygiene standards and ethical farming practices to ensure
            consistent quality and food safety.
          </p>
        </motion.div>

        {/* OUR PRACTICES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          <div className="bg-white rounded-2xl shadow-sm p-10">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Our Farming Practices
            </h2>
            <ul className="space-y-3 text-lg text-gray-700 list-disc pl-6">
              <li>Halal-compliant poultry processing</li>
              <li>No antibiotics or growth hormones</li>
              <li>Strict hygiene & quality control</li>
              <li>Nutritious and controlled feed</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-10">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-700 leading-7 text-lg">
              We are committed to supplying safe, fresh, and responsibly sourced
              poultry to households, restaurants, retailers, and wholesalers.
              Quality, reliability, and customer trust remain at the core of our
              business.
            </p>
          </div>
        </motion.div>

        {/* SERVICE AREA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-green-700 text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-extrabold mb-4">
            Serving Across Malaysia
          </h2>
          <p className="text-lg opacity-90">
            We proudly supply fresh poultry products to homes, restaurants,
            hotels, and retail partners with dependable delivery and consistent quality.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

export default About;
