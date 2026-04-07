import React from 'react';

const CertificationBox: React.FC<{ title: string, bgClass: string }> = ({ title, bgClass }) => (
  <div className={`w-[253px] h-[253px] rounded-[30px] relative overflow-hidden shadow-md flex items-end p-4 ${bgClass}`}>
    {/* Inner shadow/gradient for legibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
    
    <div className="relative z-10 flex w-full justify-between items-end">
      <span className="font-aleo font-bold text-white text-[32px] drop-shadow-lg">{title}</span>
    </div>

    {/* Text CERTIFICATION rotated */}
    <div className="absolute right-[5px] top-[10px] h-[230px] flex items-center justify-center writing-vertical-rl">
      <span 
        className="text-white font-aleo font-extrabold text-[42px] opacity-20 tracking-widest"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        CERTIFICATION
      </span>
    </div>
  </div>
);

export const Certifications: React.FC = () => {
  return (
    <section className="w-full bg-brand-gray-light py-[80px] flex flex-col items-center">
      
      <h2 className="font-aleo font-bold text-[32px] leading-[38px] text-[#1B1179] text-center mb-12">
        Las ISO más relevantes para constructoras y contratistas
      </h2>

      {/* Grid of 4 ISO images (simulated with gradients/colors since exact assets are missing) */}
      <div className="flex gap-4 mb-[160px] max-w-[1081px] justify-center px-4">
        <CertificationBox title="ISO 9001" bgClass="bg-gradient-to-tr from-slate-600 to-slate-400" />
        <CertificationBox title="ISO 14001" bgClass="bg-gradient-to-tr from-[#2d6a4f] to-[#52b788]" />
        <CertificationBox title="ISO 37001" bgClass="bg-gradient-to-tr from-blue-900 to-blue-500" />
        <CertificationBox title="ISO 50001" bgClass="bg-gradient-to-tr from-amber-700 to-amber-500" />
      </div>

      {/* "Demostrarlo" Block (Engineers) */}
      <div className="w-[1034px] h-[501px] bg-[#182D8E] rounded-[25px] relative shadow-xl overflow-hidden flex">
        
        {/* Left Side text content */}
        <div className="w-[500px] h-full relative z-10 flex flex-col pl-[68px] justify-center pt-8">
            <h3 className="font-aleo font-semibold text-[30px] leading-[36px] text-white absolute top-[80px] left-[68px] w-[857px]">
              No se trata solo de trabajar bien. <span className="text-[#FFE100]">Se trata de poder demostrarlo.</span>
            </h3>

            {/* Warning Dot */}
             <div className="absolute top-[20px] left-[520px] w-[52px] h-[52px] bg-[#FFE500] rounded-full shadow-[0_0_20px_rgba(255,229,0,0.5)]"></div>

            {/* Content Box */}
            <div className="w-[552px] h-[216px] bg-gradient-to-r from-[#303D95] to-[#2754AA] rounded-[25px] flex items-center justify-center px-8 shadow-md mt-[100px] relative z-20">
              <p className="font-aleo font-semibold text-[16px] leading-[19px] text-white text-center">
                 Muchas empresas constructoras <span className="text-[#FFE100]">sí operan</span>, <span className="text-[#FFE100]">sí cumplen</span> y <span className="text-[#FFE100]">sí tienen experiencia</span>. El problema es que no lo tienen estructurado ni respaldado bajo un sistema de gestión certificado.
              </p>
            </div>

            <div className="mt-8 flex items-center">
               <div className="w-[59px] border-b-[2px] border-[#FFE100] mr-4"></div>
               <p className="font-aleo font-semibold text-[16px] leading-[19px] text-white w-[410px]">
                 Y ahí es donde empiezan las observaciones, la pérdida de puntos y las oportunidades que no avanzan.
               </p>
            </div>

        </div>

        {/* Right Side Image Engineers */}
        <div className="absolute right-0 top-0 w-[630px] h-full flex items-end">
           {/* Adjusted the height/width of the image depending on asset size */}
           <img 
             src="/images/ingenieros_seccion_demostrarlo.png" 
             alt="Ingenieros revisando planos"
             className="w-full h-auto object-cover rounded-br-[25px]"
           />
        </div>

        {/* Bottom tags inside the blue container */}
        <div className="absolute bottom-[20px] left-[68px] flex gap-12 font-aleo font-semibold text-[16px] leading-[19px]">
           <div>
              <div className="text-[#FFE100]">Observaciones</div>
              <div className="text-white">Más frecuentes</div>
           </div>
           <div>
              <div className="text-[#FFE100]">Puntos perdidos</div>
              <div className="text-white">En evaluación</div>
           </div>
           <div>
              <div className="text-[#FFE100]">Oportunidades</div>
              <div className="text-white">Sin avanzar</div>
           </div>
        </div>

      </div>
    </section>
  );
};
