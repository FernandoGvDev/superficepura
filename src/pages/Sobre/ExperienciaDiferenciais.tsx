import { motion } from "framer-motion";
import { Clock, Users, Settings, Handshake, Truck, Shield } from "lucide-react";

const diferenciais = [
  { icon: Clock, title: "Mais de 15 anos de experiência" },
  { icon: Users, title: "Equipe especializada" },
  { icon: Settings, title: "Tecnologia de corte moderno (CNC)" },
  { icon: Handshake, title: "Atendimento personalizado" },
  { icon: Truck, title: "Entrega rápida" },
  { icon: Shield, title: "Garantia de qualidade" },
];

export default function ExperienciaDiferenciais() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-orange-500"
        >
          Experiência e Diferenciais
        </motion.h2>

        {/* Grid de diferenciais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/60 rounded-2xl p-8 border border-gray-700 hover:border-orange-500 hover:shadow-[0_0_20px_#ff660044] transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Frase de impacto */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-lg md:text-xl max-w-3xl mx-auto text-gray-300 italic"
        >
          “Trabalhamos com equipamentos de corte de precisão e uma equipe
          altamente qualificada para transformar pedra em{" "}
          <span className="text-orange-500 font-semibold">arte.</span>”
        </motion.p>
      </div>
    </section>
  );
}
