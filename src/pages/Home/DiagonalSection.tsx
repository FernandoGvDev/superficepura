import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Star, CheckCircle, Award, Layers, Feather, Maximize2, X } from "lucide-react";
import { useState, useEffect } from "react";

interface Card {
  title: string;
  description: string;
  image: string;
  highlights?: string[];
  attributes: { icon: any; label: string }[];
}

const cards: Card[] = [
  {
    title: "Cozinha dos sonhos:",
    description:
      "Neste projeto, a bancada e a ilha em mármore escuro com veios claros são a grande protagonista, trazendo um toque de sofisticação e modernidade para o ambiente.",
    image: "/img/marmore-detalhe.jpeg",
    highlights: ["Cozinha dos sonhos:"],
    attributes: [
      { icon: Coffee, label: "Artesanal" },
      { icon: Star, label: "Luxo" },
      { icon: CheckCircle, label: "Precisão" },
    ],
  },
  {
    title: "Banheiro elegante:",
    description:
      "Lavabo com design exclusivo. Neste projeto, a bancada e o revestimento de parede criam um visual clean e sofisticado. A execução precisa garante um acabamento impecável.",
    image: "/img/projetos/lavabo.jpeg",
    highlights: ["Banheiro elegante:"],
    attributes: [
      { icon: Award, label: "Exclusivo" },
      { icon: Layers, label: "Design" },
      { icon: Star, label: "Luxo" },
    ],
  },
  {
    title: "Sala de estar luxuosa:",
    description:
      "Uma mesa de centro exclusiva, esculpida em uma única peça de mármore com veios exóticos. A marmoraria transformando ambientes com a grandiosidade da pedra natural.",
    image: "/img/projetos/mesa-centro.jpeg",
    highlights: ["Sala de estar luxuosa:"],
    attributes: [
      { icon: Feather, label: "Leveza" },
      { icon: Layers, label: "Estrutura" },
      { icon: Star, label: "Luxo" },
    ],
  },
];

export default function DiagonalSplitCards() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  // Fechar imagem ao pressionar "voltar" no celular
  useEffect(() => {
    const handlePopState = () => setExpandedImage(null);
    if (expandedImage) {
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", handlePopState);
    }
    return () => window.removeEventListener("popstate", handlePopState);
  }, [expandedImage]);

  return (
    <section className="w-full flex flex-col items-center py-20 bg-gray-950 gap-12 relative">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-[95%] md:w-[85%] lg:w-[75%] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Lado da Imagem */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <div
              className="w-full h-full bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url('${card.image}')` }}
              onClick={() => setExpandedImage(card.image)}
            />

            {/* Ícone de expandir */}
            <button
              onClick={() => setExpandedImage(card.image)}
              className="absolute top-3 left-3 bg-black/40 text-white p-1.5 rounded-full hover:bg-black/70 transition"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Lado do Texto */}
          <div className="relative w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 py-10 bg-gray-900/95 text-white z-10">
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left"
            >
              {card.title.split(" ").map((word, idx) =>
                card.highlights?.includes(word + (idx === 0 ? ":" : "")) ? (
                  <span key={idx} className="text-yellow-400">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </motion.h2>

            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base text-center md:text-left"
            >
              {card.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex justify-center md:justify-start gap-6"
            >
              {card.attributes.map((attr, i) => {
                const Icon = attr.icon;
                return (
                  <div key={i} className="flex flex-col items-center text-center">
                    <Icon className="w-6 h-6 text-yellow-400 mb-1" />
                    <span className="text-xs md:text-sm text-gray-300">{attr.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Modal da Imagem Expandida */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setExpandedImage(null)}
          >
            <motion.img
              src={expandedImage}
              alt="Imagem expandida"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90%] max-h-[85%] rounded-xl object-contain shadow-2xl"
            />

            {/* Botão de fechar */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpandedImage(null);
              }}
              className="absolute top-5 right-5 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
