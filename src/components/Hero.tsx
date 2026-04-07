import React, { useEffect } from 'react';

export const Hero: React.FC = () => {
  
  // Integración de HubSpot para el formulario
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.hsforms.net/forms/embed/developer/47637900.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* SECCIÓN 1: HERO - FONDO OSCURO Y DISEÑO ORGÁNICO */}
      <section 
        className="w-full relative min-h-[85vh] flex items-center pt-[120px] md:pt-[160px] pb-[160px] overflow-hidden bg-black"
        style={{ background: 'linear-gradient(360deg, #000000 0%, #1C1179 74.52%)' }}
      >
        
        {/* Contenedor Principal */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-8">
          
          {/* Columna Izquierda: Textos (45% de ancho) */}
          <div className="w-full md:w-[45%] flex flex-col gap-6 text-left items-start pr-4 relative z-30">
            <h1 className="font-adamina text-[36px] md:text-[45px] lg:text-[50px] leading-tight text-white drop-shadow-md">
              Construya confianza y gane grandes obras <span className="text-[#FFE100]">con estandares globales</span>
            </h1>
            
            <p className="font-hanken font-medium text-[16px] md:text-[18px] text-white opacity-95 max-w-xl">
              No siempre es el valor de tu propuesta. Si no tienes certificaciones como ISO 37001, 9001, 14001 o 45001, perderás oportunidades porque hoy también evalúan cómo demuestras procesos, control y cumplimiento.
            </p>

            <div className="flex flex-col gap-4 mt-2 w-full max-w-md">
              <button className="w-full bg-[#FFD500] hover:bg-yellow-400 text-[#1C1179] font-bold py-3.5 px-4 rounded-[12px] flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] shadow-lg">
                <svg width="14" height="14" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#1C1179" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px]">Obtén tu certificado ISO y suma puntos</span>
              </button>
              <button className="w-full bg-transparent border-[2px] border-[#00D6F2] text-white font-bold py-3.5 px-4 rounded-[12px] hover:bg-[#00D6F2] hover:text-[#1C1179] transition-colors text-[14px]">
                Solicita diagnóstico de cumplimiento ISO
              </button>
            </div>
          </div>

          {/* Columna Derecha: Imagen grande sobre el óvalo orgánico (55% de ancho) */}
          <div className="w-full md:w-[55%] relative flex justify-center items-center min-h-[400px] md:min-h-[500px] mt-12 md:mt-0 z-20">
            
            {/* 1. El borde orgánico gigante en el fondo (Group 2.svg) */}
            <img 
              src="/svgs/Group 2.svg" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] max-w-[850px] h-auto pointer-events-none z-0"
              alt="Borde orgánico decorativo"
            />
            
            {/* 2. La imagen de los ingenieros superpuesta, grande y pegada a la derecha */}
            <img 
              src="/images/construccion_hero.png" 
              alt="Ingenieros en construcción" 
              className="relative z-10 w-[95%] max-w-[600px] h-auto object-contain drop-shadow-2xl translate-x-[5%]"
            />
          </div>

        </div>

        {/* Ola Blanca Inferior (Suave) */}
        <div className="absolute bottom-[-1px] left-0 w-full pointer-events-none z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto block">
            <path fill="#F0F7FF" fillOpacity="1" d="M0,80L80,85.3C160,91,320,101,480,96C640,91,800,69,960,64C1120,59,1280,69,1360,74.7L1440,80L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* SECCIÓN 2: CONTENEDOR DE FORMULARIO HUBSPOT */}
      <section className="w-full bg-[#F0F7FF] pb-16 px-4">
        
        <div className="w-full max-w-[950px] mx-auto bg-white rounded-[20px] p-8 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.1)] border-t-[4px] border-[#00D6F2] relative z-30 -mt-[100px] min-h-[400px]">
          
          <h3 className="font-glory font-extrabold text-[24px] md:text-[28px] text-[#1C1179] text-center mb-8">
            Contáctanos es gratis
          </h3>
          
          {/* Aquí es donde HubSpot inyecta el formulario */}
          <div 
            className="hs-form-html w-full" 
            data-region="na1" 
            data-form-id="34d72d3d-5c59-43f4-b760-329e7d467a10" 
            data-portal-id="47637900"
          ></div>

        </div>
      </section>
    </>
  );
};