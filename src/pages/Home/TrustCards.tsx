import { motion } from "framer-motion";

// Array de motivos com frase e fundo de textura
const trustReasons = [
  {
    title: "Qualidade Superior",
    description: "Materiais premium e acabamento impecável.",
    bgImage: "/img/projetos/marmore1.jpeg", // caminho da textura
  },
  {
    title: "Equipe Especializada",
    description: "Profissionais treinados e experientes.",
    bgImage: "/img/projetos/marmore2.jpeg",
  },
  {
    title: "Projetos Personalizados",
    description: "Soluções sob medida para cada cliente.",
    bgImage: "/img/projetos/marmore3.jpeg",
  },
  {
    title: "Entrega Pontual",
    description: "Cumprimento de prazos sem surpresas.",
    bgImage: "/img/projetos/marmore4.jpeg",
  },
  {
    title: "Satisfação Garantida",
    description: "Atenção aos detalhes e ao cliente.",
    bgImage: "/img/projetos/marmore5.jpeg",
  },
  {
    title: "Inovação",
    description: "Técnicas modernas e designs exclusivos.",
    bgImage: "/img/projetos/marmore6.jpeg",
  },
];

export default function TrustCards() {
  return (
    <section className="py-20 px-6 bg-gray-950 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Por que confiar na <span className="text-yellow-400">Superfície Pura</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trustReasons.map((item, index) => (
          <motion.div
            key={index}
            className="relative h-64 rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Fundo de textura */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-75"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            />

            {/* Overlay escuro para contraste */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-xs" />

            {/* Conteúdo */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2">
                {item.title}
              </h3>
              <p className="text-white/90">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
