import React from 'react';

const IssueCard: React.FC<{ text: string }> = ({ text }) => (
  <div className="w-[256px] h-[93px] bg-white border-[3px] border-[#EDF0F4] rounded-[15px] flex items-center pr-2 relative shadow-sm">
    <div className="w-[53px] h-[52px] bg-[#EAF0F8] rounded-full mx-3 flex-shrink-0"></div>
    <span className="font-aleo text-[14px] leading-[17px] text-black pt-1">
      {text}
    </span>
  </div>
);

const ISOFeature: React.FC<{ title: string }> = ({ title }) => (
  <div className="w-[311px] h-[111px] bg-[#2F4299] rounded-[15px] flex flex-col items-center justify-center relative shadow-lg">
    <div className="absolute -top-[24px] w-[50px] h-[48px] bg-[#00D6F2] rounded-full shadow-[0_0_15px_rgba(0,214,242,0.5)] border-[2px] border-[#18298B]"></div>
    <span className="font-aleo text-[20px] leading-[24px] text-white text-center px-4 mt-4">
      {title}
    </span>
  </div>
);

export const Features: React.FC = () => {
  return (
    <>
      {/* 1. White Block */}
      <section className="w-full bg-white pt-[50px] pb-[80px] flex flex-col items-center relative overflow-hidden">
        
        <h2 className="font-aleo font-bold text-[40px] leading-[48px] text-[#1B1179] text-center w-[884px]">
          Esto ya le está pasando a muchas constructoras
        </h2>
        <p className="font-aleo font-normal text-[20px] leading-[24px] text-center text-black w-[839px] mt-6 mb-12">
          Cuando una empresa compite por una obra o servicio, no solo revisan la propuesta económica. También evalúan cómo gestionas calidad, seguridad, ambiente y control interno.
        </p>

        {/* Gray Container */}
        <div className="w-[866px] h-[321px] bg-[rgba(217,217,217,0.15)] border-[3px] border-[#C0D6EE] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[15px] relative mt-[20px]">
          
          {/* Girl Image */}
          <div className="absolute -left-[80px] bottom-0 z-10 w-[409px] h-[409px]">
            <img src="/images/chica_errores_constructoras.png" alt="Constructora preocupada" className="w-full h-full object-contain" />
          </div>

          <div className="absolute left-[229px] top-[18px] w-[490px]">
            <p className="font-aleo text-[15px] leading-[18px] text-center text-[#002552]">
              Si no cuentas con certificación ISO o no tienes una gestión que lo respalde, pasan cosas como estas:
            </p>
          </div>

          <div className="absolute right-[30px] top-[75px] grid grid-cols-2 gap-x-[17px] gap-y-[13px]">
            <IssueCard text="Otros postores suman más puntos" />
            <IssueCard text="Te descalifican sin mucho detalle" />
            <IssueCard text="Recibes observaciones en la evaluación técnica" />
            <IssueCard text="Tu empresa no logra sustentar cómo trabaja realmente" />
          </div>
        </div>

      </section>

      {/* 2. Blue Block */}
      <section className="w-full bg-[#18298B] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] relative py-[50px] flex flex-col items-center">
        
        <h2 className="font-aleo font-normal text-[40px] leading-[48px] text-white text-center w-[931px] mb-[30px]">
          Hoy no solo evalúan experiencia. <span className="text-brand-yellow">Evalúan cómo la demuestras.</span>
        </h2>
        <p className="font-aleo font-normal text-[15px] leading-[18px] text-white text-center mb-[70px]">
          En construcción ya te están pidiendo más que trayectoria. Te están evaluando por:
        </p>

        <div className="grid grid-cols-3 gap-x-[28px] gap-y-[60px] pb-6">
          <ISOFeature title="Procesos documentados" />
          <ISOFeature title="Control de calidad" />
          <ISOFeature title="Gestión ambiental" />
          <ISOFeature title="Seguridad y salud en el trabajo" />
          <ISOFeature title="Trazabilidad y orden operativo" />
          <ISOFeature title="Respaldo con certificaciones ISO" />
        </div>

      </section>
    </>
  );
};
