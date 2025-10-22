// src/components/CTA.tsx
import { dados } from "../../assets/dados";

// Define o tipo para os números de telefone
type Telefone = {
  nome: string;
  numero: string;
};

export default function CTA() {
  return (
    <section className="bg-amber-500 py-16 px-6 text-center rounded-lg shadow-lg relative overflow-hidden mt-15">
      {/* Texto persuasivo */}
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        Transforme sua superfície em arte!
      </h2>
      <p className="text-gray-800/90 mb-8 max-w-xl mx-auto text-lg sm:text-xl">
        Fale agora com nossos especialistas e peça seu orçamento sem compromisso. 
        Mais de <span className="font-semibold">200 projetos realizados</span> garantem a qualidade que você procura!
      </p>

      {/* Botões de WhatsApp com destaque */}
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {dados.telefones.map((tel: Telefone, i: number) => {
          const numeroFormatado = tel.numero.replace(/\D/g, "");
          const linkWhats = `https://wa.me/55${numeroFormatado}?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informações%20sobre%20a%20${encodeURIComponent(dados.nomeEmpresa)}.`;

          return (
            <a
              key={i}
              href={linkWhats}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-white text-orange-500 font-bold rounded-lg shadow-lg hover:scale-105 hover:bg-white/90 transition-all duration-300
                         ring-2 ring-white/40 ring-offset-2 ring-offset-amber-400"
            >
              {tel.nome} no WhatsApp
            </a>
          );
        })}
      </div>

      {/* Decoração suave */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}
