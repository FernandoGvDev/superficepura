// src/components/Footer.tsx
import { Instagram, MessageCircle } from "lucide-react";
import Logo from "/public/img/logo.png"; // substitua pelo seu logo
import { dados } from "../assets/dados";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="w-32 md:w-36 rounded-full shadow-lg" />
        </div>

        {/* Contato */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-gray-300">
          {dados.telefones.map((tel, i) => {
            const numeroFormatado = tel.numero.replace(/\D/g, "");
            const linkWhats = `https://wa.me/55${numeroFormatado}?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informações%20sobre%20a%20${encodeURIComponent(dados.nomeEmpresa)}.`;

            return (
              <a
                key={i}
                href={linkWhats}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                <span>{tel.nome}</span>
              </a>
            );
          })}

          {/* Instagram */}
          <a
            href={dados.redesSociais.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300"
          >
            <Instagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Informações */}
        <div className="text-gray-400 text-center md:text-right text-sm md:text-base">
          <p>Endereço: {dados.endereco.rua}, {dados.endereco.bairro} - {dados.endereco.cidade}, {dados.endereco.estado}</p>
          <p>CEP: {dados.endereco.cep}</p>
          <p>© {new Date().getFullYear()} {dados.nomeEmpresa}. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Decoração leve */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
    </footer>
  );
}
