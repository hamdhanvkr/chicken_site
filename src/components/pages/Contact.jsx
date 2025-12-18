import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Get in touch with us for bulk orders, partnerships, or general enquiries.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT – CONTACT DETAILS */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 space-y-6">

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Corporate Office
            </h2>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-green-600 mt-1" />
              <div className="flex flex-col">
                <p className="font-semibold text-gray-800">Phone</p>
                <a href="tel:+60168050930" className="text-gray-600 hover:text-green-600">
                  +6016-8050930
                </a>
                <a href="tel:+60123623786" className="text-gray-600 hover:text-green-600">
                  +6012-3623786
                </a>

              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-green-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <a
                  href="mailto:info@salsabeelmaju.com"
                  className="text-gray-600 hover:text-green-600"
                >
                  info@salsabeelmaju.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-800"> SALSABEEL MAJU RESOURCES (M) SDN.BHD</p>
                <p className="text-gray-600 leading-relaxed">
                  COMPANY ADDRESS : JALAN TITIR 33/25 TECHNOLOGY PARK , 40400 <br />
                  SHAH ALAM <br />
                  SELANGOR <br />
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT – WHATSAPP + LOCATIONS */}

          {/* WhatsApp Orders */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 ">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order Now
            </h2>

            <div className="flex flex-col gap-8">
              <a
                href="https://wa.me/60168050930"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white font-semibold px-6 py-4 rounded-xl hover:bg-green-600 transition"
              >
                <FaWhatsapp size={20} />
                Order Via WhatsApp
              </a>

              <a
                href="https://wa.me/qr/3YG3W7CW5LPBD1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white font-semibold px-6 py-4 rounded-xl hover:bg-green-600 transition"
              >
                <FaWhatsapp size={20} />
                Order Via WhatsApp
              </a>

              <a
                href="https://wa.me/message/IHH624CQM7E5K1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white font-semibold px-6 py-4 rounded-xl hover:bg-green-600 transition"
              >
                <FaWhatsapp size={20} />
                Order Via WhatsApp
              </a>
            </div>
          </div>

          {/* Branch Location */}
          {/* <div className="bg-white rounded-2xl shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Branch Location
              </h2>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-green-600 mt-1" />
                <p className="text-gray-600 leading-relaxed">
                  COMPANY ADDRESS : JALAN TITIR 33/25 TECHNOLOGY PARK , 40400
                  SHAH ALAM
                  SELANGOR
                </p>
              </div>
            </div> */}


        </div>

      </div>
    </div>
  );
}

export default Contact;
