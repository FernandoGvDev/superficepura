import { Diamond, Briefcase, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const items = [
    { icon: <Diamond className="w-8 h-8 mb-2 text-yellow-400" />, title: "Elegante" },
    { icon: <Briefcase className="w-8 h-8 mb-2 text-yellow-400" />, title: "Profissional" },
    { icon: <Star className="w-8 h-8 mb-2 text-yellow-400" />, title: "Qualidade" },
  ];

  return (
    <section className="relative z-20 flex justify-center -mt-24 sm:-mt-32">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex justify-center items-center gap-4 sm:gap-8 px-4 sm:px-8 py-6 sm:py-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex flex-col items-center text-center bg-white/10 p-3 sm:p-5 rounded-xl shadow-md w-24 sm:w-40"
          >
            {item.icon}
            <h3 className="text-white font-semibold text-xs sm:text-base tracking-wide">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
