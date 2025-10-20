// src/pages/sobre/Sobre.tsx
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-6 py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-center text-amber-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sobre Nós
      </motion.h1>

      <motion.p
        className="max-w-2xl text-lg text-center leading-relaxed text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Somos uma equipe apaixonada por tecnologia e design, especializada em criar
        sites modernos, responsivos e otimizados para empresas locais. Nosso objetivo
        é transformar sua presença digital e destacar seu negócio no mundo online.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col md:flex-row gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-amber-600 text-white p-6 rounded-2xl shadow-md w-72 text-center">
          <h3 className="text-xl font-semibold mb-2">Missão</h3>
          <p>Oferecer soluções criativas e acessíveis para impulsionar negócios locais.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl shadow-md w-72 text-center">
          <h3 className="text-xl font-semibold mb-2 text-amber-600">Visão</h3>
          <p>Ser referência no desenvolvimento de sites e sistemas para pequenos negócios.</p>
        </div>

        <div className="bg-amber-600 text-white p-6 rounded-2xl shadow-md w-72 text-center">
          <h3 className="text-xl font-semibold mb-2">Valores</h3>
          <p>Comprometimento, inovação e transparência em cada projeto.</p>
        </div>
      </motion.div>
    </section>
  );
}
