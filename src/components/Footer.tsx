import { Instagram, MessageCircle } from "lucide-react";
import Logo from "/public/img/logo.png"; // substitua pelo seu logo

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="w-30 md:w-32 rounded-full" />
        </div>

        {/* Contato */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-gray-300">
          <div className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
            <MessageCircle className="w-6 h-6" />
            <span>WhatsApp</span>
          </div>
          <div className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
            <Instagram className="w-6 h-6" />
            <span>Instagram</span>
          </div>
        </div>

        {/* Informações */}
        <div className="text-gray-400 text-center md:text-right text-sm md:text-base">
          <p>Endereço: Rua Exemplo, 123 - Cidade, Estado</p>
          <p>Email: contato@empresa.com</p>
          <p>© {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
