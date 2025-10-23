// src/components/Galeria.tsx
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowUp, HiArrowDown } from "react-icons/hi2"; // ícones modernos

// Importa automaticamente todas as imagens da pasta projetos
const images: string[] = Object.values(
  import.meta.glob("/src/assets/projetos/*.{jpg,png,jpeg,webp}", { eager: true, import: "default" })
);

export default function Galeria() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const galeriaRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    window.history.pushState({ lightbox: true }, "");
  };

  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = () =>
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  const nextImage = () =>
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));

  const scrollToEnd = () => {
    galeriaRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const scrollToStart = () => {
    galeriaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Detecta se o componente está parcialmente visível na tela
  useEffect(() => {
    const handleScroll = () => {
      if (!galeriaRef.current) return;
      const rect = galeriaRef.current.getBoundingClientRect();
      const isOnScreen = rect.top < window.innerHeight && rect.bottom > 0;
      setIsVisible(isOnScreen);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // checa imediatamente ao montar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle back button do Lightbox
  useEffect(() => {
    const handlePopState = () => {
      if (selectedIndex !== null) closeLightbox();
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedIndex]);

  return (
    <section className="p-4 relative" ref={galeriaRef}>
      {/* Título e botão para final */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-200">Trabalhos Realizados</h2>
        <button
          onClick={scrollToEnd}
          className="px-4 py-2 bg-gradient-to-r from-orange-300 to-amber-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 font-medium text-sm"
        >
          Ir até o final
        </button>
      </div>

      {/* Masonry Grid com animação */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {images.map((src: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <motion.img
              src={src}
              alt={`Projeto ${i + 1}`}
              loading="lazy"
              className="mb-4 w-full rounded-lg cursor-pointer shadow-lg"
              onClick={() => openLightbox(i)}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Botão para voltar ao início */}
      <div className="flex justify-center mt-8">
        <button
          onClick={scrollToStart}
          className="px-6 py-3 bg-gradient-to-r from-orange-300 to-amber-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 font-medium"
        >
          Voltar ao Início
        </button>
      </div>

      {/* Botões flutuantes com animação tipo “pulo” */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-6 right-6 flex flex-col gap-3 z-50"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <motion.button
              onClick={scrollToStart}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-300 to-amber-600 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300 font-medium"
              whileTap={{ scale: 0.95 }}
            >
              <HiArrowUp size={20} />
            </motion.button>
            <motion.button
              onClick={scrollToEnd}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-300 to-amber-600 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300 font-medium"
              whileTap={{ scale: 0.95 }}
            >
              <HiArrowDown size={20} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.img
              src={images[selectedIndex]}
              alt={`Projeto ${selectedIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            />
            {/* Navegação */}
            <button
              className="absolute left-5 text-white text-3xl font-bold select-none"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ‹
            </button>
            <button
              className="absolute right-5 text-white text-3xl font-bold select-none"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ›
            </button>
            {/* Fechar Lightbox */}
            <button
              className="absolute top-5 right-5 text-white text-2xl font-bold bg-black/50 px-3 py-1 rounded select-none"
              onClick={closeLightbox}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
