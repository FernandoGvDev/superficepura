import { motion } from "framer-motion";

// Imagens de fundo (adicione as suas em src/assets/img/)
import missaoBg from "../../assets/texturas/textura1.png";
import visaoBg from "../../assets/texturas/textura2.jpg";
import valoresBg from "../../assets/texturas/textura3.png";

export default function MissaoVisaoValores() {
  const cards = [
    {
      title: "Missão",
      text: "Entregar elegância e durabilidade através de cada peça de mármore, transformando ambientes em experiências únicas.",
      image: missaoBg,
      delay: 0.1,
    },
    {
      title: "Visão",
      text: "Ser reconhecida como a marmoraria mais confiável e moderna da região, unindo tradição e inovação.",
      image: visaoBg,
      delay: 0.3,
    },
    {
      title: "Valores",
      text: "Comprometimento, qualidade, transparência e respeito ao cliente em cada projeto realizado.",
      image: valoresBg,
      delay: 0.5,
    },
  ];

  return (
    <section className="bg-gray-800 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-4"
        >
          Missão, Visão e Valores
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-[#FF6600] mx-auto rounded-full origin-left"
        />
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: card.delay, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-80 rounded-2xl overflow-hidden shadow-lg group"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-500"></div>

            {/* Conteúdo */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 relative z-10">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-gray-200 font-light relative z-10">
                {card.text}
              </p>

              {/* Linha laranja animada ao hover */}
              <div className="mt-4 w-12 h-1 bg-[#FF6600] rounded-full transition-all duration-500 group-hover:w-20"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
