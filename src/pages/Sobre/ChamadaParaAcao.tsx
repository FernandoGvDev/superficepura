import { dados } from "../../assets/dados";
import bg from "../../assets/texturas/textura1.png"

export default function ChamadaParaAcao() {
  return (
    <section
      className="relative py-24 text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay embaçado */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Quer transformar seu ambiente com elegância?
        </h2>
        <p className="text-lg md:text-xl mb-12">
          Fale conosco pelo WhatsApp e solicite um orçamento sem compromisso!
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {dados.telefones.map((tel, index) => {
            const numeroWhatsApp = tel.numero.replace(/\D/g, "");
            return (
              <a
                key={index}
                href={`https://wa.me/${numeroWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-8 py-3 rounded-lg border-2 border-orange-500 text-orange-500 font-semibold transition-all duration-300
                  hover:text-white hover:border-transparent hover:bg-orange-500 hover:shadow-lg"
              >
                WhatsApp: {tel.nome}
                {/* Brilho sutil */}
                <span className="absolute inset-0 rounded-lg shadow-[0_0_15px_2px_rgba(255,165,0,0.6)] opacity-0 hover:opacity-100 transition-opacity"></span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
