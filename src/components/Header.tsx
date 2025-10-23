import { useState } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { dados } from "../assets/dados";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/Sobre" },
    { name: "Galeria", path: "/Galeria" },
  ];

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.2, ease: "easeIn" } 
    },
  };

  const linkHover = { scale: 1.05, color: "#f59e0b" };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/60 shadow-lg border-b border-amber-100">
      <nav
        className="flex items-center justify-between px-6 py-3 relative"
        style={{
          backgroundImage: "url('/img/bg-header.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 h-full w-1/3 bg-gray-50 -skew-x-12 origin-top-left z-0" />

        {/* ✅ Logo ajustada */}
        <div className="relative z-10 flex items-center space-x-2">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="md:ml-24 h-20 w-auto object-contain rounded-full drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8 relative z-10">
          {links.map((link) => (
            <motion.li key={link.name} whileHover={linkHover}>
              <Link
                to={link.path}
                className="text-black font-medium hover:text-white transition-colors duration-300 bg-gray-600/80 p-4 rounded-full hover:bg-gradient-to-r hover:from-amber-800 hover:to-yellow-900"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* ✅ Botão menu com h-20 */}
        <button
          className="text-gray-200 z-10 bg-gray-900 rounded-full p-2 flex items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Dropdown mobile */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute top-full right-0 md:right-6 bg-white w-64 py-4 rounded-b-lg z-50 shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
            >
              <ul className="flex flex-col items-center gap-3">
                <div className="md:hidden w-full">
                  {links.map((link) => (
                    <motion.li
                      key={link.name}
                      className="w-full text-center"
                      whileHover={linkHover}
                    >
                      <Link
                        to={link.path}
                        className="text-black font-bold hover:text-amber-600 transition-colors duration-300 block py-2"
                        onClick={() => setOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </div>

                <div className="border-t md:border-t-0 border-gray-300 text-center w-full mt-2">
                  {dados.telefones.map((tel, i) => {
                    const numeroFormatado = tel.numero.replace(/\D/g, "");
                    const linkWhats = `https://wa.me/55${numeroFormatado}`;
                    return (
                      <motion.a
                        key={i}
                        href={linkWhats}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-black text-base bg-gray-200 hover:bg-gray-400 py-2 my-2 rounded-lg cursor-pointer"
                        whileHover={{ scale: 1.05, backgroundColor: "#fbbf24", color: "#000" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Falar com {tel.nome}
                      </motion.a>
                    );
                  })}
                </div>

                {/* ✅ Redes sociais com brilho leve */}
                <div className="flex justify-center gap-4 mt-2">
                  <motion.a
                    href={dados.redesSociais.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#ec4899", filter: "drop-shadow(0 0 6px #ec4899)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Instagram size={22} />
                  </motion.a>
                  <motion.a
                    href={dados.redesSociais.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#3b82f6", filter: "drop-shadow(0 0 6px #3b82f6)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Facebook size={22} />
                  </motion.a>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
