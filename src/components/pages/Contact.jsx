import React from "react";
import { useLocation } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function Contact() {
  const location = useLocation();
  const selectedProduct = location.state?.productName || "";

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">

        {/* Main Title Section */}
        <div className="mb-10 text-center md:text-left">

        </div>

        {/* Flex container for Mobile (Column) and Grid for Desktop */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* 1. WHATSAPP BOX (order-1 on mobile, md:order-2 on desktop) */}
          <div className="order-1 md:order-2 w-full bg-gray-900 rounded-[2rem] p-8 lg:p-10 text-white shadow-2xl border border-gray-800">
            {selectedProduct && (
              <div className="mb-8 p-4 font-bold bg-amber-500/20 border border-amber-500/30 rounded-2xl text-amber-400 text-md text-center">
                Confirmation Order<span className=" text-white ml-1"> {selectedProduct}</span>
              </div>
            )}
            <h3 className="text-lg lg:text-2xl font-bold mb-4">Direct Order via WhatsApp</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Select a representative below to start your order. We usually respond within business hours.
            </p>

            <div className="space-y-4">
              {[
                { label: "Order Now", link: "https://wa.me/qr/3YG3W7CW5LPBD1" },
                { label: "Order Now", link: "https://wa.me/message/IHH624CQM7E5K1" }
              ].map((wa, i) => (
                <a key={i} href={wa.link} target="_blank" rel="noreferrer"
                  className="flex items-center justify-between w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition group active:scale-95">
                  <div className="flex items-center gap-4">
                    <FaWhatsapp className="text-2xl text-green-500" />
                    <span className="font-bold text-sm tracking-tight">{wa.label}</span>
                  </div>
                  <FaArrowRight className="text-gray-600 group-hover:translate-x-1 transition" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. CONTACT DETAILS (order-2 on mobile, md:order-1 on desktop) */}
          <div className="order-2 md:order-1 space-y-5 w-full pt-4 md:pt-0">
            <h1 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">
              Get In <span className="text-amber-600">Touch</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Whether you're a retail customer or a wholesale distributor, we’re ready to serve you.
            </p>
            {/* Phone Row */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-black text-gray-900 text-xl  mb-1">Phone Support</h4>
                <p className="text-gray-600 font-medium">+6016-8050930</p>
                <p className="text-gray-500 font-medium">+6012-3623786</p>
              </div>
            </div>

            {/* Address Row */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-black text-gray-900 text-xl mb-1">Corporate HQ</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-bold text-gray-800">SALSABEEL MAJU RESOURCES (M) SDN.BHD</span><br />
                  Jalan Titir 33/25 Technology Park, <br />40400 Shah Alam, Selangor
                </p>
              </div>
            </div>

            {/* Email Row */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-black text-gray-900 text-xl mb-1">Email Inquiry</h4>
                <a href="mailto:salsabeelmaju786@gmail.com" className="text-gray-600 text-sm font-bold hover:text-amber-600 transition-colors">
                  salsabeelmaju786@gmail.com
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}