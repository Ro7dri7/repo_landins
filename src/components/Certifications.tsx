import React from 'react';

const CertificationBox: React.FC<{ title: string, bgClass: string }> = ({ title, bgClass }) => (
  <div className={`w-full aspect-square max-w-[250px] mx-auto rounded-[30px] relative overflow-hidden shadow-md flex items-end p-4 ${bgClass}`}>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
    <div className="relative z-10 flex w-full justify-between items-end">
      <span className="font-aleo font-bold text-white text-[24px] md:text-[32px] drop-shadow-lg">{title}</span>
    </div>
    <div className="absolute right-[5px] top-[10px] h-[80%] flex items-center justify-center writing-vertical-rl">
      <span className="text-white font-aleo font-extrabold text-[30px] md:text-[42px] opacity-20 tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
        CERTIFICATION
      </span>
    </div>
  </div>
);

export const Certifications: React.FC = () => {
  return (
    <section className="w-full bg-brand-gray-light py-[80px]">
      <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center">
        
        <h2 className="font-aleo font-bold text-[28px] md:text-[32px] text-[#1B1179] text-center mb-12">
          Las ISO más relevantes para constructoras y contratistas
        </h2>

        {/* Grid de Normas ISO */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 mb-[100px]">
          <CertificationBox title="ISO 9001" bgClass="bg-gradient-to-tr from-slate-600 to-slate-400" />
          <CertificationBox title="ISO 14001" bgClass="bg-gradient-to-tr from-[#2d6a4f] to-[#52b788]" />
          <CertificationBox title="ISO 37001" bgClass="bg-gradient-to-tr from-blue-900 to-blue-500" />
          <CertificationBox title="ISO 50001" bgClass="bg-gradient-to-tr from-amber-700 to-amber-500" />
        </div>

        {/* Bloque "Demostrarlo" */}
        <div className="w-full bg-[#182D8E] rounded-[25px] relative shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contenido Izquierdo */}
          <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-12 z-10 relative">
            <h3 className="font-aleo font-semibold text-[24px] md:text-[30px] leading-tight text-white mb-8">
              No se trata solo de trabajar bien. <span className="text-[#FFE100]">Se trata de poder demostrarlo.</span>
            </h3>

            {/* Recuadro de Contenido */}
            <div className="w-full bg-gradient-to-r from-[#303D95] to-[#2754AA] rounded-[20px] p-6 shadow-md mb-6 relative">
               <div className="absolute -top-[20px] right-[20px] w-[40px] h-[40px] bg-[#FFE500] rounded-full shadow-[0_0_15px_rgba(255,229,0,0.5)]"></div>
               <p className="font-aleo font-semibold text-[14px] md:text-[16px] text-white text-center">
                 Muchas empresas constructoras <span className="text-[#FFE100]">sí operan</span>, <span className="text-[#FFE100]">sí cumplen</span> y <span className="text-[#FFE100]">sí tienen experiencia</span>. El problema es que no lo tienen estructurado ni respaldado bajo un sistema de gestión certificado.
               </p>
            </div>

            <div className="flex items-start gap-4 mb-8">
               <div className="w-[40px] md:w-[60px] border-b-[2px] border-[#FFE100] mt-3 flex-shrink-0"></div>
               <p className="font-aleo font-semibold text-[14px] md:text-[16px] text-white">
                 Y ahí es donde empiezan las observaciones, la pérdida de puntos y las oportunidades que no avanzan.
               </p>
            </div>

            {/* Tags inferiores */}
            <div className="flex flex-wrap gap-6 font-aleo font-semibold text-[14px]">
               <div><div className="text-[#FFE100]">Observaciones</div><div className="text-white">Más frecuentes</div></div>
               <div><div className="text-[#FFE100]">Puntos perdidos</div><div className="text-white">En evaluación</div></div>
               <div><div className="text-[#FFE100]">Oportunidades</div><div className="text-white">Sin avanzar</div></div>
            </div>
          </div>

          {/* Imagen Derecha */}
          <div className="w-full lg:w-1/2 lg:absolute right-0 top-0 h-full">
             <img 
               src="/images/ingenieros_seccion_demostrarlo.png" 
               alt="Ingenieros revisando planos"
               className="w-full h-[300px] lg:h-full object-cover lg:rounded-l-none lg:rounded-br-[25px]"
             />
          </div>
        </div>

      </div>
    </section>
  );
};