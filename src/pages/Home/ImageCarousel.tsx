import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/img/projetos/marmore1.jpeg",
  "/img/projetos/marmore2.jpeg",
  "/img/projetos/marmore3.jpeg",
  "/img/projetos/marmore4.jpeg",
  "/img/projetos/marmore5.jpeg",
  "/img/projetos/marmore6.jpeg",
  "/img/projetos/marmore7.jpeg",
  "/img/projetos/marmore8.jpeg",
  "/img/projetos/marmore9.jpeg",
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 py-20 bg-gray-950 text-white px-6">
      {/* Carousel */}
      <div className="relative w-full lg:w-2/3 flex justify-center items-center">
        {/* Setas */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 z-20 bg-gray-800/70 hover:bg-gray-800/90 rounded-full p-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 z-20 bg-gray-800/70 hover:bg-gray-800/90 rounded-full p-2"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Contêiner das imagens */}
        <div className="w-full h-96 md:h-[500px] relative overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            {/* Imagem atrás (próxima) */}
            <motion.img
              key={current + "-back"}
              src={images[(current + 1) % images.length]}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 0.95, opacity: 0.5 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl filter blur-sm z-0"
            />

            {/* Imagem da frente (atual) */}
            <motion.img
              key={current}
              src={images[current]}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-10"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* CTA centralizado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center gap-4 max-w-md"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Conheça <span className="text-yellow-400">Nossos Resultados</span>
        </h2>
        <p className="text-gray-300">
          Explore nossos projetos e veja a qualidade e sofisticação que
          entregamos em cada detalhe.
        </p>
        <button className="mt-4 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
          Galeria
        </button>
      </motion.div>
    </section>
  );
}
