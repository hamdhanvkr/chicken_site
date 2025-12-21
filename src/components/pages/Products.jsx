
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const products = [
    { img: Img12, name: "Whole Chicken" },
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
    { img: Img13, name: "Tomyan Frozen" },
    { img: Img14, name: "Tengiri Frozen" },
  ];

  const handleProductClick = (name) => {
    navigate("/contact", { state: { productName: name } });
  };
  return (
    <div className="pt-32 pb-24 bg-gray-50 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Product <span className="text-amber-600">Catalogs</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              onClick={() => navigate("/contact", { state: { productName: product.name } })}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={product.img} alt={product.name} className="w-full h-full object-fit group-hover:scale-110 transition duration-700" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-amber-600">
                  In Stock
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition">{product.name}</h3>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Fresh Processed</p>
                <button className="mt-6 w-full py-3 bg-gray-50 group-hover:bg-amber-600 group-hover:text-white rounded-xl text-sm font-bold transition-colors">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
