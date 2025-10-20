import { motion } from "framer-motion";

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
          mt-31
        "
        style={{
          backgroundImage: "url('/img/marmoraria-bg.png')", // imagem para PC
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
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
          transition={{ duration: 1.2, ease: 'easeOut' }}
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
        </motion.div>
      </section>
    </>
  );
}
