import React from 'react';

export const ValidationCTA: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center">
      
      {/* 1. Validation White Block */}
      <div className="w-[1091px] h-[409px] bg-[#F0F7FF] relative flex overflow-hidden my-10 shadow-sm rounded-xl">
        
        {/* Left Side */}
        <div className="w-[626px] pl-[82.5px] pt-[20px] relative">
          
          <div className="w-[165px] h-[42px] bg-[#1B1179] rounded-[20px] flex items-center justify-center mb-4">
             <span className="font-aleo font-semibold text-[16px] text-white">INTERCERT LATAM</span>
          </div>

          <h2 className="w-[426px] font-aleo font-semibold text-[36px] leading-[43px] text-[#1C1179] mb-4">
            Validamos que tu gestión cumpla con lo que hoy te están exigiendo
          </h2>

          <p className="w-[502px] font-aleo font-semibold text-[12px] leading-[14px] text-[#8F8F8F] mb-6">
            Te acompañamos en el proceso de certificación para que tu empresa pueda demostrar orden, control y cumplimiento con estándares internacionales aplicables a construcción.
          </p>

          {/* Grid 2x2 of tags */}
          <div className="grid grid-cols-2 gap-y-[13px] gap-x-[10px] w-[500px]">
            <div className="flex items-center space-x-3">
               <div className="w-[44px] h-[44px] bg-[#E5E7F4] rounded-[14px]"></div>
               <span className="font-aleo font-semibold text-[12px] text-[#1B1179] w-[169px]">Evaluación de situación actual</span>
            </div>
            <div className="flex items-center space-x-3">
               <div className="w-[44px] h-[44px] bg-[#E4ECF8] rounded-[14px]"></div>
               <span className="font-aleo font-semibold text-[12px] text-[#1B1179] w-[180px]">Revisión de brechas frente a la norma</span>
            </div>
            <div className="flex items-center space-x-3">
               <div className="w-[44px] h-[44px] bg-[#E3EDEE] rounded-[14px]"></div>
               <span className="font-aleo font-semibold text-[12px] text-[#1B1179] w-[163px]">Proceso de certificación claro</span>
            </div>
            <div className="flex items-center space-x-3">
               <div className="w-[44px] h-[44px] bg-[#70F5FF] rounded-[14px]"></div>
               <span className="font-aleo font-semibold text-[12px] text-[#1B1179] w-[180px]">Enfoque en requisitos reales del sector</span>
            </div>
          </div>
        </div>

        {/* Right Side (Blue box) */}
        <div className="w-[424px] h-[358px] bg-[#182C8C] rounded-[30px] absolute right-[40.5px] top-[18px] p-[25px]">
          <div className="flex items-center space-x-4 border-b border-white border-opacity-20 pb-4 mb-4">
             <div className="w-[45px] h-[45px] bg-white rounded-full"></div>
             <div className="flex flex-col">
                <span className="font-inter font-normal text-[12px] text-[#FFE100]">Certificación ISO</span>
                <span className="font-inter font-medium text-[15px] text-white">Sistema Integrado</span>
             </div>
             <span className="font-aleo font-semibold text-[12px] text-white ml-auto pt-4 w-[165px] text-right">
                Certificaciones reconocidas internacionalmente
             </span>
          </div>

          <div className="flex flex-col space-y-[18px] mt-2">
            {['ISO 9001', 'ISO 14001', 'ISO 37001', 'ISO 45001'].map(iso => (
              <div key={iso} className="w-[392px] h-[38px] bg-[#303D95] rounded-[10px] flex items-center px-[54px] mx-auto">
                 <span className="font-aleo font-semibold text-[12px] text-white">{iso}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 2. Final Gradient CTA Block */}
      <div 
        className="w-[1092px] h-[477px] flex flex-col items-center justify-center relative mt-10 rounded-xl"
        style={{
          background: 'linear-gradient(106.6deg, #1B157C 6.91%, #103B9A 23.83%, #0A47A5 51.5%, #00528A 69.98%, #00525D 89.64%, #005145 93.79%)'
        }}
      >
         <div className="w-[69px] h-[65px] bg-[#FFE100] rounded-full mb-4"></div>
         
         <h2 className="w-[669px] font-aleo font-semibold text-[36px] leading-[43px] text-white text-center mb-6">
            Si ya te están observando por requisitos técnicos, <span className="text-[#FFE100]">esto no es un tema futuro</span>
         </h2>

         <div className="w-[648px] h-[148px] flex flex-col items-center justify-center rounded-[20px] relative mt-2" 
              style={{ background: 'linear-gradient(90deg, #004EAB 0%, #303D95 100%)' }}>
            <p className="w-[620px] font-aleo font-normal text-[20px] leading-[24px] text-white text-center">
              Es algo que <span className="text-[#FFE100]">ya impacta tu capacidad para competir</span>. Hoy no basta con tener experiencia o una buena propuesta.
            </p>
         </div>

         {/* Three Tags */}
         <div className="flex gap-[100px] mt-4 z-10 w-[648px] justify-center absolute top-[305px]">
            <div className="flex items-center space-x-2">
               <div className="w-[22px] h-[22px] bg-[#FFE100] rounded-full"></div>
               <span className="font-aleo font-normal text-[12px] text-white">Demostrar respaldo</span>
            </div>
            <div className="flex items-center space-x-2">
               <div className="w-[22px] h-[22px] bg-[#FFE100] rounded-full"></div>
               <span className="font-aleo font-normal text-[12px] text-white">Demostrar control</span>
            </div>
            <div className="flex items-center space-x-2">
               <div className="w-[22px] h-[22px] bg-[#FFE100] rounded-full"></div>
               <span className="font-aleo font-normal text-[12px] text-white">Certificación ISO</span>
            </div>
         </div>

         {/* Huge Button */}
         <button className="w-[527px] h-[52px] bg-[#FFE100] rounded-[10px] mt-[45px] hover:scale-[1.02] transition-transform">
            <span className="font-aleo font-semibold text-[15px] text-black">Obtén tu certificado ISO y suma puntos en tu licitación</span>
         </button>

         <span className="font-aleo font-normal text-[12px] text-[#C8C8C8] mt-4">Respuesta en menos de 24 horas | Sin compromiso</span>
      </div>

    </section>
  );
};
