// src/App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home/index";
import Sobre from "./pages/Sobre/Index";
import Galeria from "./pages/Galeria/index"

import Logo from "/public/img/logo.png"; // substitua pelo caminho da sua logo

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // após 2 segundos, remove splash
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 bg-gray-950 flex items-center justify-center z-[9999]"
          >
            <motion.img
              src={Logo}
              alt="Logo"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.8 }}
              className="w-80 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Galeria" element={<Galeria />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
