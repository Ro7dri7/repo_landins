import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      className="w-full flex justify-center items-start relative pb-10"
      style={{ background: 'linear-gradient(360deg, #000000 0%, #1C1179 74.52%)' }}
    >

      {/* Contenedor Base a Escala Exacta para contenido */}
      <div
        style={{
          position: 'relative',
          width: '1082px',
          height: '646px',
        }}
      >

        {/* --- FORMAS ABSTRACTAS Y FONDOS SVG --- */}

        {/* Ellipse 9 */}
        <img
          src="/svgs/Ellipse 9.svg"
          alt="Abstract Curve 1"
          style={{
            position: 'absolute',
            width: '598.31px',
            height: '229.38px',
            left: '-174px',
            top: '216px'
          }}
        />

        {/* Group 2 */}
        <img
          src="/svgs/Group 2.svg"
          alt="Abstract Curve 2"
          style={{
            position: 'absolute',
            width: '756px',
            height: '395px',
            left: '285.5px',
            top: '150px',
            transform: 'matrix(-1, 0, 0, 1, 0, 0)'
          }}
        />

        {/* --- IMAGEN PRINCIPAL ENMASCARADA SVG --- */}
        {/* Rectangle 25 */}
        <img
          src="/svgs/Rectangle 25.svg"
          alt="Construcción"
          style={{
            position: 'absolute',
            width: '791px',
            height: '458.75px',
            left: '290.5px',
            top: '187px'
          }}
        />

        {/* --- TEXTOS HERO --- */}
        <div
          style={{
            position: 'absolute',
            width: '585px',
            height: '186px',
            left: '33.5px',
            top: '107px',
            fontFamily: 'Adamina, serif',
            fontSize: '40px',
            lineHeight: '54px',
            color: '#FFFFFF'
          }}
        >
          Construya confianza y gane grandes obras <span style={{ color: '#FFE100' }}>con estandares globales</span>
        </div>

        <div
          style={{
            position: 'absolute',
            width: '364px',
            height: '95px',
            left: '43.5px',
            top: '288px',
            fontFamily: '"Hanken Grotesk", sans-serif',
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '20px',
            color: '#FFFFFF'
          }}
        >
          No siempre es el valor de tu propuesta. Si no tienes certificaciones como ISO 37001, 9001, 14001 o 45001, perderás oportunidades porque hoy también evalúan cómo demuestras procesos, control y cumplimiento.
        </div>

        {/* --- BOTONES --- */}

        {/* Botón Amarillo Contenedor */}
        <div style={{ position: 'absolute', width: '381px', height: '44px', left: '43.5px', top: '431px', background: '#FFD500', borderRadius: '12px', cursor: 'pointer' }} />
        {/* Ícono de Visto (Check) dentro del botón amarillo */}
        <div style={{ position: 'absolute', width: '22px', height: '21px', left: '57.5px', top: '442px', border: '2px solid #1C1179', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4L3.5 6.5L9 1" stroke="#1C1179" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Texto Botón Amarillo */}
        <div
          style={{
            position: 'absolute',
            width: '325px',
            height: '55px',
            left: '88.5px',
            top: '443px',
            fontFamily: '"Hanken Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: '13px',
            lineHeight: '17px',
            color: '#1C1179',
            pointerEvents: 'none'
          }}
        >
          Obtén tu certificado ISO y suma puntos en tu licitación
        </div>

        {/* Botón Azul Contenedor */}
        <div style={{ position: 'absolute', width: '381px', height: '44px', left: '43.5px', top: '489px', background: 'linear-gradient(360deg, #000000 0%, #2824E5 100%)', border: '1px solid #00D6F2', borderRadius: '12px', boxSizing: 'border-box', cursor: 'pointer' }} />
        {/* Texto Botón Azul */}
        <div
          style={{
            position: 'absolute',
            width: '325px',
            height: '55px',
            left: '107.5px',
            top: '503px',
            fontFamily: '"Hanken Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: '13px',
            lineHeight: '17px',
            color: '#FFFFFF',
            pointerEvents: 'none'
          }}
        >
          Solicita diagnóstico de cumplimiento ISO
        </div>


        {/* --- FORMULARIO ABSOLUTO --- */}

        {/* Fondo del Formulario */}
        <div style={{ position: 'absolute', width: '300px', height: '259px', left: '731.5px', top: '138px', background: 'rgba(240, 247, 255, 0.95)', borderRadius: '18px' }} />

        {/* Título */}
        <div style={{ position: 'absolute', width: '142px', height: '22px', left: '817.5px', top: '144px', fontFamily: '"Glory", sans-serif', fontWeight: 800, fontSize: '15px', lineHeight: '17px', color: '#1C1179' }}>
          Contáctanos es gratis
        </div>

        {/* Lables Fila 1 */}
        <div style={{ position: 'absolute', width: '37px', height: '11px', left: '747.5px', top: '164px', fontFamily: '"Glory", sans-serif', fontWeight: 800, fontSize: '10px', lineHeight: '11px', color: '#8F8F8F' }}>Nombre</div>
        <div style={{ position: 'absolute', width: '37px', height: '11px', left: '893.5px', top: '164px', fontFamily: '"Glory", sans-serif', fontWeight: 800, fontSize: '10px', lineHeight: '11px', color: '#8F8F8F' }}>Apellidos</div>

        {/* Inputs Fila 1 */}
        <input style={{ position: 'absolute', width: '130px', height: '17px', left: '745.5px', top: '177px', background: '#00D6F2', borderRadius: '5px', padding: '0 4px', fontSize: '10px', outline: 'none', border: 'none', color: '#000' }} />
        <input style={{ position: 'absolute', width: '130px', height: '17px', left: '888.5px', top: '177px', background: '#00D6F2', borderRadius: '5px', padding: '0 4px', fontSize: '10px', outline: 'none', border: 'none', color: '#000' }} />

        {/* Lables Fila 2 */}
        <div style={{ position: 'absolute', width: '37px', height: '11px', left: '747.5px', top: '201px', fontFamily: '"Glory", sans-serif', fontWeight: 800, fontSize: '10px', lineHeight: '11px', color: '#8F8F8F' }}>Correo</div>
        <div style={{ position: 'absolute', width: '93px', height: '11px', left: '891.5px', top: '201px', fontFamily: '"Glory", sans-serif', fontWeight: 800, fontSize: '10px', lineHeight: '11px', color: '#8F8F8F' }}>Nombre de la empresa</div>

        {/* Inputs Fila 2 */}
        <input style={{ position: 'absolute', width: '130px', height: '17px', left: '745.5px', top: '214px', background: '#00D6F2', borderRadius: '5px', padding: '0 4px', fontSize: '10px', outline: 'none', border: 'none', color: '#000' }} />
        <input style={{ position: 'absolute', width: '130px', height: '17px', left: '888.5px', top: '214px', background: '#00D6F2', borderRadius: '5px', padding: '0 4px', fontSize: '10px', outline: 'none', border: 'none', color: '#000' }} />

        {/* Lables Fila 3: Num Teléfono y Cargo */}
        <div style={{ position: 'absolute', width: '93px', height: '11px', left: '747.5px', top: '238px', fontFamily: '"Glory", sans-serif', fontWeight: 800, fontSize: '10px', lineHeight: '11px', color: '#8F8F8F' }}>Número de teléfono</div>
        <div style={{ position: 'absolute', width: '93px', height: '11px', left: '891.5px', top: '238px', fontFamily: '"Glory", sans-serif', fontWeight: 800, fontSize: '10px', lineHeight: '11px', color: '#8F8F8F' }}>¿Cuál es tu cargo?</div>

        {/* Input Fila 3: Num Teléfono Compuesto y Cargo */}
        <div style={{ position: 'absolute', width: '130px', height: '17px', left: '745.5px', top: '251px', background: '#00D6F2', borderRadius: '5px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ width: '30px', height: '17px', background: '#9EA1B2', display: 'flex', alignItems: 'center', justifyItems: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: '"Glory", sans-serif', fontWeight: 800, fontSize: '10px', color: 'rgba(240,241,245,0.9)', width: '100%', textAlign: 'center' }}>PE V</span>
          </div>
          <span style={{ fontFamily: '"Glory", sans-serif', fontWeight: 400, fontSize: '10px', color: '#000000', marginLeft: '4px', marginRight: '2px' }}>+51</span>
          <input type="tel" style={{ flex: 1, height: '100%', background: 'transparent', outline: 'none', border: 'none', fontSize: '10px', color: '#000' }} />
        </div>
        <input style={{ position: 'absolute', width: '130px', height: '17px', left: '888.5px', top: '251px', background: '#00D6F2', borderRadius: '5px', padding: '0 4px', fontSize: '10px', outline: 'none', border: 'none', color: '#000' }} />

        {/* Label ISO */}
        <div style={{ position: 'absolute', width: '154px', height: '11px', left: '747.5px', top: '276px', fontFamily: '"Glory", sans-serif', fontWeight: 800, fontSize: '10px', lineHeight: '11px', color: '#8F8F8F' }}>¿En que norma ISO está interesado?</div>
        {/* Input ISO */}
        <input style={{ position: 'absolute', width: '273px', height: '17px', left: '745.5px', top: '293px', background: '#00D6F2', borderRadius: '5px', padding: '0 4px', fontSize: '10px', outline: 'none', border: 'none', color: '#000' }} />

        {/* Footer Submit */}
        <button style={{ position: 'absolute', width: '273px', height: '21px', left: '745.5px', top: '363px', background: '#1C1179', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
          <div style={{ position: 'absolute', width: '42px', height: '11px', left: '118px', top: '5px', fontFamily: '"Glory", sans-serif', fontWeight: 800, fontSize: '10px', lineHeight: '11px', color: '#FFFFFF', textAlign: 'center' }}>ENVIAR</div>
        </button>

      </div>

      {/* Ola Blanca en el fondo (Oculta cortes y mezcla fluida al siguiente bloque) */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', pointerEvents: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto block">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,85.3C640,85,800,75,960,69.3C1120,64,1280,64,1360,64L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

    </section>
  );
};
