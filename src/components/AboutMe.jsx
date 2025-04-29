//Modo light-dark
import { useState } from "react";
//import { Swiper, SwiperSlide } from "swiper/react";
//import { ArrowRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import foto1 from '../images/foto1.jpg';
//import foto2 from '../images/foto2.jpg';
//import foto3 from '../images/foto3.jpg';

const fotos = [
  {
    img: foto1,
    texto: "¡Hola! Soy Resikrys, apasionada del frontend, amante del café ☕ y los atajos de teclado.",
    extra: "Dato curioso: una vez hice un deploy desde una cafetería sin Wi-Fi (gracias hotspot).",
  },
  {
    img: foto1,
    texto: "Me encanta combinar diseño y código para crear experiencias elegantes y accesibles.",
    extra: "Dato curioso: colecciono stickers de VSCode.",
  },
  {
    img: foto1,
    texto: "Trabajo con React, Tailwind, Figma y siempre estoy aprendiendo cosas nuevas.",
    extra: "Dato curioso: tengo una playlist de lo-fi solo para debuggear.",
  },
];

export default function AboutMe() {
    const [active, setActive] = useState(0);
    const [showExtra, setShowExtra] = useState(false);
  
    return (
<section id="about" className="py-16 px-6 md:px-12 bg-[var(--background-color)] text-[var(--white)]">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    <div className="relative w-64 h-64 mx-auto">
      <img
        src={fotos[active].img}
        alt={`Foto ${active + 1}`}
        className="w-64 h-64 rounded-full border-[6px] border-[var(--white)] object-cover transition-all duration-500 ease-in-out hover:scale-105 shadow-[0_0_15px_5px_rgba(255,255,255,0.3)]"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            className={`absolute w-6 h-6 rounded-full border-2 border-[var(--white)] 
              ${i === 0 ? 'top-0 left-1/2 -translate-x-1/2 bg-[var(--primary-color)]' : ''}
              ${i === 1 ? 'bottom-0 left-0 translate-x-1/2 bg-[var(--fuchsia-color)]' : ''}
              ${i === 2 ? 'bottom-0 right-0 -translate-x-1/2 bg-[var(--rose-color)]' : ''}
              ${active === i ? 'ring-2 ring-[var(--white)] scale-110' : ''}`}
            onClick={() => {
              setActive(i);
              setShowExtra(false);
            }}
          />
        ))}
      </div>
    </div>

    <div className="bg-[var(--gray-dark)] rounded-2xl p-6 shadow-xl relative">
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
