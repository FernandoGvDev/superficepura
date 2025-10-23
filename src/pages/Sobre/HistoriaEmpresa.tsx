import { motion } from "framer-motion";

export default function HistoriaEmpresa() {
  return (
    <section className="bg-gray-800 text-white text-center py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Título animado */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-6"
        >
          Nossa História
        </motion.h2>

        {/* Linha decorativa abaixo do título */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-[#FF6600] mx-auto mb-10 rounded-full origin-left"
        />

        {/* Texto narrativo com animação */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-base md:text-lg leading-relaxed font-light text-gray-200"
        >
          Antes mesmo de existir a{" "}
          <span className="font-semibold text-white">Superfície Pura</span>, já
          existia a paixão pelo trabalho com pedras. Foram mais de{" "}
          <span className="text-[#FF6600] font-medium">20 anos de dedicação</span>
          , aprendizados e aperfeiçoamento que deram origem, em{" "}
          <span className="text-[#FF6600] font-medium">2014</span>, à empresa que
          hoje busca ser referência em mármores e granitos de alto padrão.
          <br />
          <br />
          Desde então, seguimos com o mesmo propósito: transformar pedras
          naturais em obras únicas que unem{" "}
          <span className="text-[#FF6600] font-medium">
            beleza, durabilidade e exclusividade
          </span>
          .
          <br />
          <br />
          Com o passar dos anos, consolidamos nossa presença no mercado graças ao
          compromisso inabalável com a{" "}
          <span className="text-[#FF6600] font-medium">excelência</span>. Cada
          peça produzida reflete a união entre tecnologia de ponta e o olhar
          cuidadoso de quem entende que o luxo está nos detalhes.
          <br />
          <br />
          Hoje, a Superfície Pura é sinônimo de{" "}
          <span className="text-[#FF6600] font-medium">confiança e requinte</span>
          . Atuamos em projetos residenciais, corporativos e comerciais, sempre
          com o mesmo propósito: transformar ambientes comuns em espaços
          extraordinários. Nosso nome carrega uma promessa — a de oferecer
          produtos que unem{" "}
          <span className="text-[#FF6600] font-medium">
            beleza, durabilidade e exclusividade
          </span>
          , entregando uma experiência premium do início ao fim.
          <br />
          <br />
          Acreditamos que cada superfície conta uma história. E é essa essência
          que nos move: criar obras únicas que refletem o estilo, o bom gosto e a
          personalidade de quem confia em nós. Porque mais do que trabalhar com
          pedras, nós moldamos sonhos — com precisão, arte e paixão.
        </motion.p>
      </div>
    </section>
  );
}
