import { motion } from "framer-motion";
import bg from "../../assets/texturas/bg.jpg"

export default function SobreHeader() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-center py-27 px-4 mt-25"
      style={{
        backgroundImage: `url(${bg})`, // coloque sua imagem em public/assets/img/
      }}
    >
      {/* Overlay branco translúcido para contraste */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

      {/* Conteúdo com animação */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 drop-shadow-sm">
          Sobre Nós
        </h1>
        <p className="text-lg md:text-xl text-[#ce5200] font-light">
          Tradição e excelência em mármores e granitos há mais de 15 anos.
        </p>
      </motion.div>
    </section>
  );
}
