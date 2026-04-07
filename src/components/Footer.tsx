import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="w-full text-white pt-[60px] pb-[30px]"
      style={{ background: 'linear-gradient(90deg, #1C1179 0%, #303D95 100%)' }}
    >
      {/* Contenedor centralizado para mantener el contenido alineado con el resto de la página */}
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col">
        
        {/* Top Info Grid */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-10">
          
          {/* Logo / Descripción */}
          <div className="w-full md:w-[35%] flex flex-col">
            <img 
              src="/images/Intercert con R Blanco.png" 
              alt="Intercert Logo" 
              className="w-[220px] h-auto object-contain mb-6"
            />
            <p className="font-aleo text-[14px] leading-relaxed opacity-90 pr-4">
              Certificaciones ISO para empresas que quieren competir con respaldo internacional.
            </p>
          </div>

          {/* Columnas de Enlaces */}
          <div className="w-full md:w-[65%] grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
               <h3 className="font-aleo font-bold text-[18px] mb-6">Sectores</h3>
               <ul className="space-y-4 font-aleo text-[14px] opacity-80">
                 <li><a href="#educativo" className="hover:text-[#FFE100] transition-colors">Educativo</a></li>
                 <li><a href="#pesca" className="hover:text-[#FFE100] transition-colors">Pesca</a></li>
                 <li><a href="#construccion" className="hover:text-[#FFE100] transition-colors">Construcción</a></li>
                 <li><a href="#salud" className="hover:text-[#FFE100] transition-colors">Salud</a></li>
               </ul>
            </div>
            <div>
               <h3 className="font-aleo font-bold text-[18px] mb-6">Más sectores</h3>
               <ul className="space-y-4 font-aleo text-[14px] opacity-80">
                 <li><a href="#alimentos" className="hover:text-[#FFE100] transition-colors">Alimentos y Bebidas</a></li>
                 <li><a href="#agro" className="hover:text-[#FFE100] transition-colors">Agroexportación</a></li>
                 <li><a href="#sostenibles" className="hover:text-[#FFE100] transition-colors">Soluciones Sostenibles</a></li>
                 <li><a href="#ti" className="hover:text-[#FFE100] transition-colors">Tecnologías de la Información</a></li>
               </ul>
            </div>
            <div>
               <h3 className="font-aleo font-bold text-[18px] mb-6">Contacto</h3>
               <ul className="space-y-4 font-aleo text-[14px] opacity-80">
                 <li>soporte@intercet.com</li>
                 <li>+51 999 999 999</li>
                 <li>Lima, Perú</li>
               </ul>
            </div>
          </div>
        </div>

        {/* Botones de Normas ISO */}
        <div className="w-full flex flex-wrap justify-center gap-4 py-8 border-t border-white/20 border-b mb-6">
           {['ISO 9001', 'ISO 14001', 'ISO 37001', 'ISO 45001'].map(iso => (
             <div key={iso} className="px-8 py-2 rounded-[20px] font-aleo text-[14px] cursor-pointer hover:scale-105 transition-transform shadow-md border border-[#00D6F2]/30"
                  style={{ background: 'linear-gradient(90deg, #004EAB 0%, #303D95 100%)' }}>
                {iso}
             </div>
           ))}
        </div>

        {/* Sección Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center font-aleo text-[12px] opacity-70 gap-4">
           <span>© 2026 Intercert LATAM. Todos los derechos reservados.</span>
           <div className="flex gap-6">
             <a href="#privacidad" className="hover:underline hover:text-white">Política de Privacidad</a>
             <a href="#terminos" className="hover:underline hover:text-white">Términos y Condiciones</a>
           </div>
        </div>

      </div>
    </footer>
  );
};