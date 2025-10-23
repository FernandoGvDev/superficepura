// src/components/AboutSection.tsx
"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <motion.section
      className="relative w-full h-auto flex items-center justify-center text-center overflow-hidden my-20 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Fundo parallax */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/img/marmoraria-fundo.jpeg')" }}
      />

      {/* Overlay semi-transparente */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px]" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-3xl px-6 flex flex-col gap-6 items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Somos <span className="text-yellow-400">Especialistas</span>
        </h2>
        <p className="text-white/90 text-lg md:text-xl leading-relaxed">
          Na <span className="text-yellow-400 font-semibold">Nossa Marmoraria</span>, transformamos
          pedras naturais em verdadeiras obras de arte, entregando <span className="text-yellow-400 font-semibold">sofisticação</span> e <span className="text-yellow-400 font-semibold">elegância</span> em cada projeto.  
          Cada detalhe é cuidadosamente trabalhado, garantindo <span className="text-yellow-400 font-semibold">acabamento de alto padrão</span> e <span className="text-yellow-400 font-semibold">durabilidade</span> incomparável.
        </p>
        <p className="text-white/90 text-lg md:text-xl leading-relaxed">
          Sejam <span className="text-yellow-400 font-semibold">residências ou empresas</span>, nossos projetos são totalmente personalizados, combinando <span className="text-yellow-400 font-semibold">criatividade</span>, <span className="text-yellow-400 font-semibold">tecnologia</span> e <span className="text-yellow-400 font-semibold">paixão pelo que fazemos</span>.  
          Do planejamento à instalação, cada etapa recebe atenção especial, garantindo que cada peça seja única e perfeita para o seu ambiente.
        </p>
        <Link
          to="/Sobre"
          className="mt-4 px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full backdrop-blur-sm bg-white/10 hover:bg-yellow-400 hover:text-gray-900 hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
        >
          Saiba mais
        </Link>
      </div>
    </motion.section>
  );
}
