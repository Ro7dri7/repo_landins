import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full flex justify-center pb-12 mt-10">
      <div 
        className="w-[1083px] h-[411px] rounded-xl relative overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #1C1179 0%, #303D95 100%)', backgroundBlendMode: 'multiply' }}
      >
        
        {/* Top Info Grid */}
        <div className="pt-[40px] px-[88px] flex justify-between h-[230px]">
          {/* Logo / Moto */}
          <div className="w-[336px]">
            {/* Visual Logo approximation since we don't have Intercert con R Blanco 2 */}
            <div className="w-[268px] h-[72px] bg-white bg-opacity-20 mb-4 rounded flex items-center justify-center font-aleo text-white text-xl font-bold">
               INTERCERT
            </div>
            <p className="font-aleo font-normal text-[15px] leading-[18px] text-white">
              Certificaciones ISO para empresas que quieren competir con respaldo internacional.
            </p>
          </div>

          <div className="flex w-[600px] justify-between pl-10 pr-2">
            
            {/* Sectors */}
            <div>
               <h3 className="font-aleo font-semibold text-[24px] text-white mb-6">Sectores</h3>
               <ul className="space-y-4 font-aleo font-normal text-[15px] text-white">
                 <li>Educativo</li>
                 <li>Pesca</li>
                 <li>Construcción</li>
                 <li>Salud</li>
               </ul>
            </div>

            {/* More Sectors */}
            <div>
               <h3 className="font-aleo font-semibold text-[24px] text-white mb-6">Más sectores</h3>
               <ul className="space-y-4 font-aleo font-normal text-[15px] text-white">
                 <li>Alimentos y Bebidas</li>
                 <li>Agroexportación</li>
                 <li>Soluciones Sostenibles</li>
                 <li>Tecnologías de la Información</li>
               </ul>
            </div>

            {/* Contact */}
            <div>
               <h3 className="font-aleo font-semibold text-[24px] text-white mb-6">Contacto</h3>
               <ul className="space-y-4 font-aleo font-normal text-[15px] text-white">
                 <li>soporte@intercet.com</li>
                 <li>+51 999 999 999</li>
                 <li>Lima, Perú</li>
               </ul>
            </div>

          </div>
        </div>

        {/* Separator Line 1 */}
        <div className="w-[928px] mx-auto border-t-[1px] border-[#1C1179] opacity-50 mt-4 mb-8"></div>

        {/* Buttons Strip */}
        <div className="w-[928px] mx-auto flex justify-between px-8">
           {['ISO 9001', 'ISO 14001', 'ISO 37001', 'ISO 45001'].map(iso => (
             <div 
               key={iso} 
               className="w-[152px] h-[35px] rounded-[20px] flex items-center justify-center font-aleo font-normal text-[15px] text-white cursor-pointer hover:brightness-110"
               style={{ background: 'linear-gradient(90deg, #004EAB 0%, #303D95 100%)' }}
             >
                {iso}
             </div>
           ))}
        </div>

        {/* Separator Line 2 */}
        <div className="w-[928px] mx-auto border-t-[1px] border-[#1C1179] opacity-50 mt-8 mb-4"></div>

        {/* Legal Footer */}
        <div className="w-[928px] mx-auto flex justify-between px-4 font-aleo font-normal text-[12px] text-white opacity-80">
           <span>© 2026 Intercert LATAM. Todos los derechos reservados.</span>
           <div className="flex gap-10 pr-2">
             <span>Política de Privacidad</span>
             <span>Términos y Condiciones</span>
           </div>
        </div>

      </div>
    </footer>
  );
};
