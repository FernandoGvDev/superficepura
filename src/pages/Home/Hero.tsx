import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      {/* ======== HERO DESKTOP ======== */}
      <section
        className="
          relative hidden sm:flex
          h-screen items-center justify-center 
          text-center text-white overflow-hidden
          bg-cover bg-center
          md:py-20
          md:my-20
        "
        style={{
          backgroundImage: "url('/img/marmoraria-bg.png')", // imagem para PC
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-2xl px-6"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Marmoraria especialista em{" "}
            <span className="text-[#daa32f] drop-shadow-md">luxo</span> e{" "}
            <span className="text-[#daa32f] drop-shadow-md">
              acabamentos finos
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Transformando ambientes com elegância e qualidade incomparável.
          </motion.p>

          {/* === CTA === */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <motion.a
              href="https://wa.me/5511976930484?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20em%20mármores."
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3 px-8 py-4 
                rounded-full border-2 border-green-500
                text-green-400 font-semibold text-lg
                backdrop-blur-md bg-white/10
                hover:bg-white/20 transition-all duration-300
                shadow-lg hover:shadow-green-400/20
              "
              whileHover={{ scale: 1.05 }}
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 0 10px rgba(34,197,94,0.2)",
                  "0 0 20px rgba(34,197,94,0.4)",
                  "0 0 10px rgba(34,197,94,0.2)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <FaWhatsapp className="text-2xl text-green-400" />
              Fale com um especialista
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ======== HERO MOBILE ======== */}
      <section
        className="
          relative flex sm:hidden
          h-[85vh] items-center justify-center 
          text-center text-white overflow-hidden
          bg-cover bg-center
        "
        style={{
          backgroundImage: "url('/img/marmoraria-bg-mobile.jpeg')", // imagem para celular
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 px-5"
        >
          <motion.h1
            className="text-4xl font-bold leading-snug"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Marmoraria de{" "}
            <span className="text-[#daa32f]">luxo</span> e{" "}
            <span className="text-[#daa32f]">acabamentos finos</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Elegância e perfeição em cada detalhe.
          </motion.p>

          {/* === CTA MOBILE === */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <motion.a
              href="https://wa.me/5511976930484?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20em%20mármores."
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3 px-6 py-3 
                rounded-full border-2 border-green-500
                text-green-400 font-semibold text-base
                backdrop-blur-md bg-white/10
                hover:bg-white/20 transition-all duration-300
                shadow-md hover:shadow-green-400/20
              "
              whileHover={{ scale: 1.05 }}
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 8px rgba(34,197,94,0.2)",
                  "0 0 15px rgba(34,197,94,0.4)",
                  "0 0 8px rgba(34,197,94,0.2)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <FaWhatsapp className="text-xl text-green-400" />
              Fale com um especialista
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
