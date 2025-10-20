import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 py-3 relative" style={{
    backgroundImage: "url('/img/bg-header.png')",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  }}>
        {/* Fundo diagonal atrás da logo */}
        <div className="absolute top-0 left-0 h-full w-1/3 bg-gray-50 -skew-x-12 origin-top-left z-0" />

        {/* Logo */}
        <div className="relative z-10 flex items-center space-x-2">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="md:ml-24 h-25 w-auto object-contain rounded-full"
          />
        </div>

        {/* Links desktop */}
<ul className="hidden md:flex items-center gap-8 relative z-10">
  {[
    { name: "Início", path: "/ " },
    { name: "Sobre", path: "/Sobre" },
    { name: "Galeria", path: "/Galeria" },
  ].map((link) => (
    <li key={link.name}>
      <Link
        to={link.path}
        className="text-black font-medium hover:text-amber-600 transition-colors duration-300 bg-gray-600/80 p-4 rounded-full"
      >
        {link.name}
      </Link>
    </li>
  ))}
</ul>

        {/* Fundo azul inclinado acima dos links */}
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-2 bg-gray-50 skew-x-12 origin-top-right" />

        {/* Menu mobile */}
        <button
          className="md:hidden text-gray-900 z-10"
          onClick={() => setOpen(!open)}
          
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Dropdown mobile */}
        {open && (
          <div className="absolute top-full right-0 bg-gray-200 w-40 py-3 rounded-b-lg md:hidden z-10">
            <ul className="flex flex-col items-center gap-3">
              {["Início", "Sobre", "Projetos"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-black font-bold hover:text-blue-300 transition-colors duration-300"
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
