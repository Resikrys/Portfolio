// src/components/ProjectCard.jsx
import { useState } from "react";
// import { Link } from "react-router-dom"; // Si usas rutas internas

export default function ProjectCard({ title, description, image, link, isFuture }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group overflow-hidden rounded-lg shadow-xl min-h-[250px] cursor-pointer transition-all duration-300"
    >
      {/* Imagen de fondo con blur */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
          hovered ? "blur-none scale-110" : "blur-sm scale-100"
        }`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Overlay inicial con título o logo */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-2xl font-bold text-[white] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      >
        {title}
      </div>

      {/* Texto visible al hacer hover */}
      <div
        className={`absolute inset-0 p-6 flex flex-col justify-between text-white transition-opacity duration-500 ${
          hovered ? "opacity-100 bg-black/70" : "opacity-0"
        }`}
      >
        <p className="text-sm text-gray-200">{description}</p>
        {isFuture ? (
        //   <Link
        //     to="/en-construccion"
        //     className="text-sm font-bold text-[var(--primary-color)] hover:underline self-end"
        //   >
        //     Ver mockup →
        //   </Link>
        <a href="#en-construccion" className="hover:underline text-[var(--primary-color)]">
  Ver mockup →
</a>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-[var(--primary-color)] hover:underline self-end"
          >
            Ver proyecto →
          </a>
        )}
      </div>
    </div>
  );
}


// Subcomponente de tarjeta de proyecto
// export default function ProjectCard({ title, description, link, type }) {
//     const isReal = type === "real";
//     return (
//       <div className="relative bg-white shadow-xl rounded-lg p-6 border-l-4 hover:scale-[1.02] transition-transform duration-300
//         border-[var(--primary-color)]">
//         <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
//         <p className="text-[var(--light-gray)] mb-4">{description}</p>
//         {isReal && link && (
//           <a
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block mt-auto text-sm font-bold text-[var(--rosado-color)] hover:underline"
//           >
//             Ver proyecto ↗
//           </a>
//         )}
//       </div>
//     );
//   }