import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-[36px] w-full z-50 flex justify-center px-4">
      <nav 
        className="w-[833px] h-[51px] bg-brand-blue custom-border-cyan rounded-[15px] flex items-center justify-between px-6"
      >
        {/* Logo area */}
        <div className="flex items-center">
          <img 
            src="/images/Intercert con R Blanco.png" 
            alt="Intercert Logo" 
            className="w-[109px] h-auto object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-12 ml-auto mr-12 h-full">
          <a href="#nosotros" className="text-white font-hanken font-bold text-[12px] leading-[16px]">Nosotros</a>
          <a href="#servicios" className="text-white font-hanken font-medium text-[12px] leading-[16px]">Servicios</a>
          <a href="#sectores" className="text-white font-hanken font-medium text-[12px] leading-[16px]">Sectores</a>
        </div>

        {/* Call to Action */}
        <button 
          className="w-[103px] h-[29px] bg-[rgba(249,249,249,0.9)] rounded-[20px] flex items-center justify-center text-[#000278] font-hanken font-black text-[15px] leading-[20px] hover:bg-white transition-colors"
        >
          Agendar
        </button>
      </nav>
    </header>
  );
};
