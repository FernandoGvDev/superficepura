// src/components/Hero.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const frases = [
  "Mais de 200 Projetos Realizados",
  "Mais de 200 Clientes Satisfeitos",
  "Superfície Pura: A Escolha Certa",
  "Qualidade e Elegância em Cada Detalhe",
  "Transformando Espaços com Marmoraria Premium",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Troca de frases a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/img/fundoGaleria.jpeg')" }}>
      {/* Overlay escuro suave para contraste */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-amber-200 drop-shadow-lg"
          >
            {frases[index]}
          </motion.h1>
        </AnimatePresence>
        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl">
          Transformamos cada projeto em uma obra-prima de elegância e durabilidade.
        </p>
      </div>
    </section>
  );
}
