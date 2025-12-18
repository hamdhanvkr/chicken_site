// import React from "react";

// // Import all 14 images
// import Img1 from "../../assets/1.jpeg";
// import Img2 from "../../assets/2.jpeg";
// import Img3 from "../../assets/3.jpeg";
// import Img4 from "../../assets/4.jpeg";
// import Img5 from "../../assets/5.jpeg";
// import Img6 from "../../assets/6.jpeg";
// import Img7 from "../../assets/7.jpeg";
// import Img8 from "../../assets/8.jpeg";
// import Img9 from "../../assets/9.jpeg";
// import Img10 from "../../assets/10.jpeg";
// import Img11 from "../../assets/11.jpeg";
// import Img12 from "../../assets/12.jpeg";
// import Img13 from "../../assets/13.jpeg";
// import Img14 from "../../assets/14.jpeg";

// function Products() {
//   const products = [
//     { name: "Fresh Chicken", img: Img1 },
//     { name: "Country Chicken", img: Img2 },
//     { name: "Chicken Breasts", img: Img3 },
//     { name: "Chicken Drumsticks", img: Img4 },
//     { name: "Chicken Wings", img: Img5 },
//     { name: "Skinless Chicken", img: Img6 },
//     { name: "Chicken Leg Piece", img: Img7 },
//     { name: "Chicken Liver", img: Img8 },
//     { name: "Chicken Gizzard", img: Img9 },
//     { name: "Farm Fresh Eggs", img: Img10 },
//     { name: "Organic Eggs", img: Img11 },
//     { name: "Brown Eggs", img: Img12 },
//     { name: "Chicken Feed", img: Img13 },
//     { name: "Special Broiler Meat", img: Img14 },
//   ];

//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-red-600 mb-4">Our Products</h1>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((item, index) => (
//           <div
//             key={index}
//             className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
//           >
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-full h-48 object-cover"
//             />
//             <h2 className="text-center p-3 text-lg font-semibold">
//               {item.name}
//             </h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;

import React from "react";
import { motion } from "framer-motion";

import Img1 from "../../assets/1.jpeg";
import Img2 from "../../assets/2.jpeg";
import Img3 from "../../assets/3.jpeg";
import Img4 from "../../assets/4.jpeg";
import Img5 from "../../assets/5.jpeg";
import Img6 from "../../assets/6.jpeg";
import Img7 from "../../assets/7.jpeg";
import Img8 from "../../assets/8.jpeg";
import Img9 from "../../assets/9.jpeg";
import Img10 from "../../assets/10.jpeg";
import Img11 from "../../assets/11.jpeg";
import Img12 from "../../assets/12.jpeg";
import Img13 from "../../assets/13.jpeg";
import Img14 from "../../assets/14.jpeg";

function Products() {
  const products = [
    { img: Img1, name: "Whole Leg" },
    { img: Img2, name: "Drumstick" },
    { img: Img3, name: "Wings" },
    { img: Img4, name: "Boneless" },
    { img: Img5, name: "Hati Ayam" },
    { img: Img6, name: "Kaki Ayam" },
    { img: Img7, name: "Lollipop Fresh" },
    { img: Img8, name: "Udang Frozen" },
    { img: Img9, name: "Sotong Frozen" },
    { img: Img10, name: "Kambing Frozen" },
    { img: Img11, name: "Daging Frozen" },
    { img: Img12, name: "Whole Chicken" },
    { img: Img13, name: "Tomyan Frozen" },
    { img: Img14, name: "Tengiri Frozen" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Our Products
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Freshly processed poultry products delivered with hygiene, quality
          assurance, and Halal compliance.
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            {/* Name */}
            <div className="p-5 text-center bg-gray-50">
              <h3 className="text-base font-semibold tracking-wide text-gray-800 uppercase">
                {product.name}
              </h3>

              {/* Accent Line */}
              <div className="mt-2 mx-auto w-10 h-[2px] bg-red-600 rounded-full opacity-70" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Products;
