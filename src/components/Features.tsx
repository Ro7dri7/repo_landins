import React from 'react';

const IssueCard: React.FC<{ text: string }> = ({ text }) => (
  <div className="w-full bg-white border-[3px] border-[#EDF0F4] rounded-[15px] flex items-center p-3 relative shadow-sm">
    <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#EAF0F8] rounded-full mr-3 flex-shrink-0"></div>
    <span className="font-aleo text-[12px] md:text-[14px] leading-tight text-black">
      {text}
    </span>
  </div>
);

const ISOFeature: React.FC<{ title: string }> = ({ title }) => (
  <div className="w-full h-[111px] bg-[#2F4299] rounded-[15px] flex flex-col items-center justify-center relative shadow-lg mt-6">
    <div className="absolute -top-[24px] w-[50px] h-[48px] bg-[#00D6F2] rounded-full shadow-[0_0_15px_rgba(0,214,242,0.5)] border-[2px] border-[#18298B]"></div>
    <span className="font-aleo text-[16px] md:text-[20px] leading-tight text-white text-center px-4">
      {title}
    </span>
  </div>
);

export const Features: React.FC = () => {
  return (
    <>
      {/* 1. White Block */}
      <section className="w-full bg-white py-[60px] md:py-[100px]">
        <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center">
          
          <h2 className="font-aleo font-bold text-[28px] md:text-[40px] leading-tight text-[#1B1179] text-center max-w-[900px]">
            Esto ya le está pasando a muchas constructoras
          </h2>
          <p className="font-aleo font-normal text-[16px] md:text-[20px] text-center text-black max-w-[850px] mt-6 mb-12">
            Cuando una empresa compite por una obra o servicio, no solo revisan la propuesta económica. También evalúan cómo gestionas calidad, seguridad, ambiente y control interno.
          </p>

          {/* Gray Container */}
          <div className="w-full max-w-[950px] bg-[rgba(217,217,217,0.15)] border-[3px] border-[#C0D6EE] shadow-md rounded-[15px] flex flex-col md:flex-row items-center p-6 md:p-8 relative mt-10">
            
            {/* Girl Image (Oculta en móvil para no romper el diseño, visible en md) */}
            <div className="hidden md:block absolute -left-[40px] bottom-0 w-[300px] lg:w-[400px]">
              <img src="/images/chica_errores_constructoras.png" alt="Constructora" className="w-full h-auto object-contain" />
            </div>

            <div className="w-full md:w-[60%] md:ml-auto flex flex-col gap-6">
              <p className="font-aleo text-[14px] md:text-[16px] text-center md:text-left text-[#002552]">
                Si no cuentas con certificación ISO o no tienes una gestión que lo respalde, pasan cosas como estas:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <IssueCard text="Otros postores suman más puntos" />
                <IssueCard text="Te descalifican sin mucho detalle" />
                <IssueCard text="Recibes observaciones en la evaluación técnica" />
                <IssueCard text="Tu empresa no logra sustentar cómo trabaja realmente" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Blue Block */}
      <section className="w-full bg-[#18298B] shadow-inner py-[60px] md:py-[100px]">
        <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center">
          <h2 className="font-aleo font-normal text-[28px] md:text-[40px] leading-tight text-white text-center max-w-[950px] mb-6">
            Hoy no solo evalúan experiencia. <span className="text-brand-yellow">Evalúan cómo la demuestras.</span>
          </h2>
          <p className="font-aleo font-normal text-[14px] md:text-[16px] text-white text-center mb-[60px]">
            En construcción ya te están pidiendo más que trayectoria. Te están evaluando por:
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            <ISOFeature title="Procesos documentados" />
            <ISOFeature title="Control de calidad" />
            <ISOFeature title="Gestión ambiental" />
            <ISOFeature title="Seguridad y salud en el trabajo" />
            <ISOFeature title="Trazabilidad y orden operativo" />
            <ISOFeature title="Respaldo con certificaciones ISO" />
          </div>
        </div>
      </section>
    </>
  );
};