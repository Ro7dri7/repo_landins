import React from 'react';

export const ValidationCTA: React.FC = () => {
  return (
    <section className="w-full bg-white py-[60px]">
      <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center gap-10">
        
        {/* 1. Validation White/Blue Block */}
        <div className="w-full bg-[#F0F7FF] rounded-xl shadow-md flex flex-col lg:flex-row overflow-hidden">
          
          {/* Lado Izquierdo */}
          <div className="w-full lg:w-[60%] p-8 lg:p-12 flex flex-col justify-center">
            <div className="w-[165px] h-[35px] bg-[#1B1179] rounded-[20px] flex items-center justify-center mb-6">
               <span className="font-aleo font-semibold text-[14px] text-white">INTERCERT LATAM</span>
            </div>

            <h2 className="font-aleo font-semibold text-[28px] md:text-[36px] leading-tight text-[#1C1179] mb-4">
              Validamos que tu gestión cumpla con lo que hoy te están exigiendo
            </h2>

            <p className="font-aleo font-semibold text-[14px] text-[#8F8F8F] mb-8">
              Te acompañamos en el proceso de certificación para que tu empresa pueda demostrar orden, control y cumplimiento con estándares internacionales aplicables a construcción.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3"><div className="w-[40px] h-[40px] bg-[#E5E7F4] rounded-[10px] flex-shrink-0"></div><span className="font-aleo font-semibold text-[13px] text-[#1B1179]">Evaluación de situación actual</span></div>
              <div className="flex items-center space-x-3"><div className="w-[40px] h-[40px] bg-[#E4ECF8] rounded-[10px] flex-shrink-0"></div><span className="font-aleo font-semibold text-[13px] text-[#1B1179]">Revisión de brechas frente a la norma</span></div>
              <div className="flex items-center space-x-3"><div className="w-[40px] h-[40px] bg-[#E3EDEE] rounded-[10px] flex-shrink-0"></div><span className="font-aleo font-semibold text-[13px] text-[#1B1179]">Proceso de certificación claro</span></div>
              <div className="flex items-center space-x-3"><div className="w-[40px] h-[40px] bg-[#70F5FF] rounded-[10px] flex-shrink-0"></div><span className="font-aleo font-semibold text-[13px] text-[#1B1179]">Enfoque en requisitos reales del sector</span></div>
            </div>
          </div>

          {/* Lado Derecho (Caja Azul) */}
          <div className="w-full lg:w-[40%] p-6 flex justify-center items-center bg-[#F0F7FF]">
            <div className="w-full max-w-[400px] bg-[#182C8C] rounded-[25px] p-6 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white border-opacity-20 pb-4 mb-6 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-[40px] h-[40px] bg-white rounded-full"></div>
                  <div className="flex flex-col">
                    <span className="font-inter text-[12px] text-[#FFE100]">Certificación ISO</span>
                    <span className="font-inter font-medium text-[15px] text-white">Sistema Integrado</span>
                  </div>
                </div>
                <span className="font-aleo font-semibold text-[11px] text-white sm:text-right max-w-[140px]">
                  Certificaciones reconocidas internacionalmente
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {['ISO 9001', 'ISO 14001', 'ISO 37001', 'ISO 45001'].map(iso => (
                  <div key={iso} className="w-full h-[40px] bg-[#303D95] rounded-[10px] flex items-center px-6">
                    <span className="font-aleo font-semibold text-[13px] text-white">{iso}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Final Gradient CTA Block */}
        <div className="w-full rounded-[25px] p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-2xl"
             style={{ background: 'linear-gradient(106.6deg, #1B157C 6.91%, #103B9A 23.83%, #0A47A5 51.5%, #00528A 69.98%, #00525D 89.64%, #005145 93.79%)' }}>
           
           <div className="w-[60px] h-[60px] bg-[#FFE100] rounded-full mb-6"></div>
           
           <h2 className="font-aleo font-semibold text-[28px] md:text-[36px] text-white max-w-[800px] mb-8">
              Si ya te están observando por requisitos técnicos, <span className="text-[#FFE100]">esto no es un tema futuro</span>
           </h2>

           <div className="w-full max-w-[700px] bg-gradient-to-r from-[#004EAB] to-[#303D95] rounded-[20px] p-6 mb-8 shadow-lg">
              <p className="font-aleo text-[16px] md:text-[20px] text-white">
                Es algo que <span className="text-[#FFE100]">ya impacta tu capacidad para competir</span>. Hoy no basta con tener experiencia o una buena propuesta.
              </p>
           </div>

           <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
              <div className="flex items-center space-x-2"><div className="w-[18px] h-[18px] bg-[#FFE100] rounded-full"></div><span className="font-aleo text-[14px] text-white">Demostrar respaldo</span></div>
              <div className="flex items-center space-x-2"><div className="w-[18px] h-[18px] bg-[#FFE100] rounded-full"></div><span className="font-aleo text-[14px] text-white">Demostrar control</span></div>
              <div className="flex items-center space-x-2"><div className="w-[18px] h-[18px] bg-[#FFE100] rounded-full"></div><span className="font-aleo text-[14px] text-white">Certificación ISO</span></div>
           </div>

           <button className="w-full max-w-[500px] py-4 bg-[#FFE100] rounded-[10px] hover:scale-[1.02] transition-transform shadow-lg">
              <span className="font-aleo font-bold text-[14px] md:text-[16px] text-black">Obtén tu certificado ISO y suma puntos en tu licitación</span>
           </button>

           <span className="font-aleo text-[12px] text-[#C8C8C8] mt-4">Respuesta en menos de 24 horas | Sin compromiso</span>
        </div>

      </div>
    </section>
  );
};