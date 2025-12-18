import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="pt-20 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





// import React from "react";
// import Navbar from "./components/pages/Navbar";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Products from "./components/pages/Products";
// import Contact from "./components/pages/Contact";

// function App() {
//   return (
//     <div className="scroll-smooth">
//       <Navbar />
//       <main className="pt-20">
//         <section id="home">
//           <Home />
//         </section>
//         <section id="about">
//           <About />
//         </section>
//         <section id="products">
//           <Products />
//         </section>
//         <section id="contact">
//           <Contact />
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;

