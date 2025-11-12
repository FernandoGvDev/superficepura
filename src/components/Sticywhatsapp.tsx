import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { dados } from "../assets/dados";

const whatsappNumber = dados.telefones[0].numero.replace(/\D/g, "");
const WHATSAPP_LINK = `https://wa.me/55${whatsappNumber}?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20com%20a%20${dados.nomeEmpresa}`;

export default function StickyWhatsApp() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.offsetHeight;
      
      // Chegou no final da página
      if (scrollPosition >= pageHeight - 20) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex justify-center items-center">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Solicitar orçamento via WhatsApp"
        className={`
          flex items-center gap-2 bg-green-500 text-gray-900 font-semibold
          px-5 py-3 rounded-full shadow-lg
          hover:bg-green-400 active:scale-95 transition-all duration-300 overflow-hidden
          ${shrink ? "px-3 py-3" : "px-5 py-3"}
        `}
      >
        <FaWhatsapp className="text-2xl transition-all duration-300" />
        <span
          className={`
            transition-all duration-300
            ${shrink ? "w-1 opacity-0 overflow-hidden h-0" : "w-auto opacity-100"}
          `}
        >
          Solicitar orçamento
        </span>
      </a>
    </div>
  );
}
