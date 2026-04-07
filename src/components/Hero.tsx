import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="w-full relative min-h-screen flex items-center justify-center pt-[120px] pb-[80px] overflow-hidden" 
             style={{ background: 'linear-gradient(360deg, #000000 0%, #1C1179 74.52%)' }}>
      
      {/* Fondo decorativo derecho */}
      <img src="/svgs/Group 2.svg" alt="Fondo" className="absolute top-[10%] right-0 w-[60%] opacity-40 pointer-events-none hidden md:block" />

      {/* Contenedor Centralizado */}
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Textos y Botones */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <h1 className="font-adamina text-[32px] md:text-[45px] leading-tight text-white">
            Construya confianza y gane grandes obras <span className="text-[#FFE100]">con estandares globales</span>
          </h1>
          
          <p className="font-hanken font-medium text-[16px] md:text-[18px] text-white opacity-90">
            No siempre es el valor de tu propuesta. Si no tienes certificaciones como ISO 37001, 9001, 14001 o 45001, perderás oportunidades porque hoy también evalúan cómo demuestras procesos, control y cumplimiento.
          </p>

          <div className="flex flex-col gap-4 mt-4 w-full max-w-md mx-auto lg:mx-0">
            <button className="w-full bg-[#FFD500] hover:bg-yellow-400 text-[#1C1179] font-bold py-3 px-4 rounded-[12px] flex items-center justify-center gap-3 transition-transform hover:scale-[1.02]">
              <svg width="14" height="14" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L3.5 6.5L9 1" stroke="#1C1179" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[13px] md:text-[15px]">Obtén tu certificado ISO y suma puntos</span>
            </button>
            <button className="w-full bg-transparent border-[2px] border-[#00D6F2] text-white font-bold py-3 px-4 rounded-[12px] hover:bg-[#00D6F2] hover:text-[#1C1179] transition-colors text-[13px] md:text-[15px]">
              Solicita diagnóstico de cumplimiento ISO
            </button>
          </div>
        </div>

        {/* Formulario */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
          <div className="w-full max-w-[400px] bg-[rgba(240,247,255,0.95)] rounded-[18px] p-6 shadow-2xl relative z-20">
            <h3 className="font-glory font-extrabold text-[18px] md:text-[20px] text-[#1C1179] text-center mb-6">
              Contáctanos es gratis
            </h3>
            
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col">
                  <label className="font-glory font-bold text-[11px] text-[#8F8F8F] mb-1">Nombre</label>
                  <input type="text" className="bg-[#00D6F2] rounded-[5px] px-2 py-[6px] text-[12px] text-black outline-none" />
                </div>
                <div className="flex flex-col">
                  <label className="font-glory font-bold text-[11px] text-[#8F8F8F] mb-1">Apellidos</label>
                  <input type="text" className="bg-[#00D6F2] rounded-[5px] px-2 py-[6px] text-[12px] text-black outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col">
                  <label className="font-glory font-bold text-[11px] text-[#8F8F8F] mb-1">Correo</label>
                  <input type="email" className="bg-[#00D6F2] rounded-[5px] px-2 py-[6px] text-[12px] text-black outline-none" />
                </div>
                <div className="flex flex-col">
                  <label className="font-glory font-bold text-[11px] text-[#8F8F8F] mb-1">Nombre de la empresa</label>
                  <input type="text" className="bg-[#00D6F2] rounded-[5px] px-2 py-[6px] text-[12px] text-black outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col">
                  <label className="font-glory font-bold text-[11px] text-[#8F8F8F] mb-1">Número de teléfono</label>
                  <div className="flex bg-[#00D6F2] rounded-[5px] overflow-hidden h-[28px]">
                    <div className="bg-[#9EA1B2] flex items-center justify-center px-2 text-white text-[10px] font-bold">PE V</div>
                    <span className="text-[12px] flex items-center px-1 text-black">+51</span>
                    <input type="tel" className="w-full bg-transparent px-1 text-[12px] text-black outline-none" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-glory font-bold text-[11px] text-[#8F8F8F] mb-1">¿Cuál es tu cargo?</label>
                  <input type="text" className="bg-[#00D6F2] rounded-[5px] px-2 py-[6px] text-[12px] text-black outline-none" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-glory font-bold text-[11px] text-[#8F8F8F] mb-1">¿En que norma ISO está interesado?</label>
                <input type="text" className="bg-[#00D6F2] rounded-[5px] px-2 py-[6px] text-[12px] text-black outline-none" />
              </div>

              <button type="submit" className="w-full bg-[#1C1179] text-white font-glory font-extrabold text-[12px] py-2 rounded-[5px] mt-4 hover:bg-blue-900 transition-colors">
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Ola Blanca Inferior */}
      <div className="absolute bottom-[-1px] left-0 w-full pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto block">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,85.3C640,85,800,75,960,69.3C1120,64,1280,64,1360,64L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};