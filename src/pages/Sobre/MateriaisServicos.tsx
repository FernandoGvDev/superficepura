import { motion } from "framer-motion";
import { Droplets, Table, Gem, Icon as LucideIcon } from "lucide-react";
import { stairs } from "@lucide/lab"; // ícone disponível no "lab"

// Lista de serviços com ícones (note o uso de `renderIcon` para o stairs do lab)
const servicos = [
  {
    renderIcon: (className: string) => <Droplets className={className} />,
    title: "Pias e bancadas",
  },
  {
    // stairs está no @lucide/lab — renderizamos via <LucideIcon iconNode={stairs} />
    renderIcon: (className: string) => (
      <LucideIcon iconNode={stairs} className={className} />
    ),
    title: "Soleiras e escadas",
  },
  {
    renderIcon: (className: string) => <Table className={className} />,
    title: "Revestimentos e mesas",
  },
  {
    renderIcon: (className: string) => <Gem className={className} />,
    title: "Granito, mármore, quartzo, porcelanato",
  },
];

export default function MateriaisServicos() {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-[#FF6600] mb-16"
        >
          Tipos de Materiais e Serviços
        </motion.h2>

        {/* Lista animada vertical */}
        <ul className="space-y-8">
          {servicos.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.18 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-lg md:text-xl group"
            >
              <div className="p-3 rounded-full bg-gray-800 border border-gray-700 group-hover:border-[#FF6600] group-hover:shadow-[0_0_15px_#ff660044] transition-all duration-300">
                {/* renderIcon recebe a classe para o ícone */}
                {item.renderIcon("w-7 h-7 text-[#FF6600]")}
              </div>
              <span className="group-hover:text-orange-400 transition-colors duration-300">
                {item.title}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Texto final destacado */}
        <motion.p
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-lg md:text-xl text-gray-300 italic"
        >
          “Trabalhamos com os melhores materiais nacionais e importados, garantindo{" "}
          <span className="text-[#FF6600] font-semibold">acabamento impecável</span>{" "}
          e <span className="text-[#FF6600] font-semibold">resistência</span>.”
        </motion.p>
      </div>
    </section>
  );
}
