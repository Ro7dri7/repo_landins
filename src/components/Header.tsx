import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-[20px] md:top-[36px] w-full z-50 flex justify-center px-4">
      <nav className="w-full max-w-[1200px] h-[60px] bg-brand-blue custom-border-cyan rounded-[15px] flex items-center justify-between px-6 shadow-lg">
        {/* Logo area */}
        <div className="flex items-center">
          <img 
            src="/images/Intercert con R Blanco.png" 
            alt="Intercert Logo" 
            className="w-[100px] md:w-[109px] h-auto object-contain"
          />
        </div>

        {/* Navigation Links (Ocultos en móvil, visibles en desktop) */}
        <div className="hidden md:flex items-center space-x-12 mx-auto">
          <a href="#nosotros" className="text-white font-hanken font-bold text-[14px] hover:text-[#FFE100] transition-colors">Nosotros</a>
          <a href="#servicios" className="text-white font-hanken font-medium text-[14px] hover:text-[#FFE100] transition-colors">Servicios</a>
          <a href="#sectores" className="text-white font-hanken font-medium text-[14px] hover:text-[#FFE100] transition-colors">Sectores</a>
        </div>

        {/* Call to Action */}
        <button className="px-6 h-[36px] bg-[rgba(249,249,249,0.9)] rounded-[20px] flex items-center justify-center text-[#000278] font-hanken font-black text-[14px] hover:bg-white transition-colors">
          Agendar
        </button>
      </nav>
    </header>
  );
};