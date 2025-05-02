import { useState } from "react";
import { ChevronDown, CodeXml, PawPrint, Activity, ThumbsUp } from "lucide-react";
import foto1 from '../images/foto1.jpg';
import foto2 from '../images/foto2.jpg';
import foto3 from '../images/foto3.jpg';
import foto4 from '../images/foto4.jpg';
import dinoIcon from '../images/dino_icon.png';

const fotos = [
  {
    img: foto1,
    texto: "¡Hola! Soy Resikrys, apasionada del frontend, me encanta combinar diseño y código para crear experiencias elegantes y accesibles.",
    extra: "Tengo una playlist de Ghibli solo para debuggear.",
  },
  {
    img: foto2,
    texto: "Soy una persona enérgica y optimista, practico muchos deportes, me encanta afrontar nuevos retos y dar lo mejor de mí.",
    extra: "Soy personal trainer & instructora de Wing Chun kung fu.",
  },
  {
    img: foto3,
    texto: "Me encanta la naturaleza y los animales, especialmente los perros. Tengo dos amores llamados Happy y Yue.",
    extra: "No compres, adopta! Un pequeño gesto puede cambiar una vida.",
  },
  {
    img: foto4,
    texto: "Trabajo con React, Tailwind, Figma y siempre estoy aprendiendo cosas nuevas. Estoy estudiando backend con Java & Spring.",
    extra: "Me encantan los dinosaurios!!",
  },
];

export default function AboutMe() {
  const [active, setActive] = useState(0);
  const [showExtra, setShowExtra] = useState(false);

  const positionClasses = [
    'top-0 left-1/2 -translate-x-1/2 -translate-y-[120%]',     // Norte
    'bottom-0 left-1/2 -translate-x-1/2 translate-y-[120%]',   // Sur
    'top-1/2 left-0 -translate-y-1/2 -translate-x-[120%]',     // Oeste
    'top-1/2 right-0 -translate-y-1/2 translate-x-[120%]',     // Este
  ];

  const bgColors = [
    'bg-[var(--fuchsia-color)]',
    'bg-[var(--fuchsia-color)]',
    'bg-[var(--rose-color)]',
    'bg-[var(--rose-color)]',
  ];

  const icons = [
    { icon: <CodeXml size={12} />, tooltip: "Programming ninja" },
    { icon: <Activity size={12} />, tooltip: "Creativa y activa" },
    { icon: <PawPrint size={12} />, tooltip: "Animal lover" },
    { icon: <ThumbsUp size={12} />, tooltip: "Curiosa, constante y positiva" },
  ];

  return (
    <section id="about" className="py-10 px-6 md:px-12 bg-[var(--background-color)] text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-[var(--primary-color)] pb-4">
        About me
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-64 h-64 mx-auto">
          <img
            src={fotos[active].img}
            alt={`Foto ${active + 1}`}
            className="w-64 h-64 rounded-full border-[6px] border-[var(--darkSun)] object-cover transition-all duration-500 ease-in-out hover:scale-105 shadow-[0_0_15px_5px_rgba(255,255,255,0.3)]"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            {[0, 1, 2, 3].map((i) => (
              <div
  key={i}
  className={`absolute ${positionClasses[i]} group`}
>
  <button
    className={`w-8 h-8 flex items-center justify-center rounded-full border-2 border-[var(--white)] text-[var(--gray-dark)]
    ${bgColors[i]}
    ${active === i ? 'ring-2 ring-[var(--white)] scale-110' : ''}
    transition duration-300`}
    onClick={() => {
      setActive(i);
      setShowExtra(false);
    }}
  >
    {icons[i].icon}
  </button>

  {/* Tooltip personalizado */}
  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
    <span className="bg-[var(--fuchsia-color)] text-white text-xs px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
      {icons[i].tooltip}
    </span>
    <div className="w-2 h-2 bg-[var(--fuchsia-color)] rotate-45 mt-[-4px]"></div>
  </div>
</div>

            ))}
          </div>
        </div>

        <div className="bg-[var(--gray-dark)] rounded-2xl p-6 shadow-xl relative mt-2">
          <p className="text-lg">{fotos[active].texto}</p>

          <button
            className="mt-4 text-sm flex items-center gap-2 text-[var(--primary-color)] hover:underline"
            onClick={() => setShowExtra(!showExtra)}
          >
            ¿Sabías qué...? <ChevronDown size={18} />
          </button>

          {showExtra && (
            <p className="mt-2 text-sm text-[var(--light-gray)] transition-all duration-300">
              {fotos[active].extra}
            </p>
          )}
        </div>
      </div>
<div className="flex items-center justify-center my-12">
  {/* Línea izquierda con degradado */}
  <div className="h-[4px] w-1/4 bg-gradient-to-r from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />

  {/* Icono central */}
  <img
    src={dinoIcon}
    alt="Separador dino"
    className="mx-4 w-10 h-10 object-contain"
  />

  {/* Línea derecha con degradado */}
  <div className="h-[4px] w-1/4 bg-gradient-to-l from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />
</div>
    </section>
  );
}


//WORKING template
// import { useState } from "react";
// //import { Swiper, SwiperSlide } from "swiper/react";
// //import { ArrowRight } from "lucide-react";
// import { ChevronDown } from "lucide-react";
// import foto1 from '../images/foto1.jpg';
// //import foto2 from '../images/foto2.jpg';
// //import foto3 from '../images/foto3.jpg';

// const fotos = [
//   {
//     img: foto1,
//     texto: "¡Hola! Soy Resikrys, apasionada del frontend, amante del café ☕ y los atajos de teclado.",
//     extra: "Dato curioso: una vez hice un deploy desde una cafetería sin Wi-Fi (gracias hotspot).",
//   },
//   {
//     img: foto1,
//     texto: "Me encanta combinar diseño y código para crear experiencias elegantes y accesibles.",
//     extra: "Dato curioso: colecciono stickers de VSCode.",
//   },
//   {
//     img: foto1,
//     texto: "Trabajo con React, Tailwind, Figma y siempre estoy aprendiendo cosas nuevas.",
//     extra: "Dato curioso: tengo una playlist de lo-fi solo para debuggear.",
//   },
// ];

// export default function AboutMe() {
//     const [active, setActive] = useState(0);
//     const [showExtra, setShowExtra] = useState(false);
  
//     return (
//       <section id="about" className="py-16 px-6 md:px-12 bg-[var(--background-color)] text-white">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           {/* Imagen con borde circular de botones */}
//           <div className="relative w-64 h-64 mx-auto">
//             {/* Imagen central */}
//             <img
//                 src={fotos[active].img}
//                 alt={`Foto ${active + 1}`}
//                 className="w-64 h-64 rounded-full border-[6px] border-white object-cover transition-all duration-500 ease-in-out hover:scale-105 shadow-[0_0_15px_5px_rgba(255,255,255,0.3)]"
//             />
  
//             {/* Botones circulares (posicionados en círculo) */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               {[0, 1, 2].map((i) => (
//                 <button
//                   key={i}
//                   className={`absolute w-6 h-6 rounded-full border-2 border-white 
//                     ${i === 0 ? 'top-0 left-1/2 -translate-x-1/2 bg-[var(--primary-color)]' : ''}
//                     ${i === 1 ? 'bottom-0 left-0 translate-x-1/2 bg-[var(--fuchsia-color)]' : ''}
//                     ${i === 2 ? 'bottom-0 right-0 -translate-x-1/2 bg-[var(--rose-color)]' : ''}
//                     ${active === i ? 'ring-2 ring-white scale-110' : ''}`}
//                   onClick={() => {
//                     setActive(i);
//                     setShowExtra(false);
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
  
//           {/* Cuadro de descripción */}
//           <div className="bg-[var(--dark-gray)] rounded-2xl p-6 shadow-xl relative">
//             <p className="text-lg">{fotos[active].texto}</p>
  
//             <button
//               className="mt-4 text-sm flex items-center gap-2 text-[var(--primary-color)] hover:underline"
//               onClick={() => setShowExtra(!showExtra)}
//             >
//               ¿Sabías qué...? <ChevronDown size={18} />
//             </button>
  
//             {showExtra && (
//               <p className="mt-2 text-sm text-[var(--light-gray)] transition-all duration-300">
//                 {fotos[active].extra}
//               </p>
//             )}
//           </div>
//         </div>
//       </section>
//     );
//   }
