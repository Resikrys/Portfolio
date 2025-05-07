import { useState } from "react";

export default function ProjectCard({
    title,
    description,
    image,
    link,
    isFuture,
    onClickFuture,
  }) {
    const [hovered, setHovered] = useState(false);
  
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group overflow-hidden rounded-lg shadow-xl min-h-[250px] cursor-pointer transition-all duration-300"
      >
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
            hovered ? "blur-none scale-110" : "blur-sm scale-100"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
  
        <div
          className={`absolute inset-0 flex items-center justify-center text-2xl font-bold text-[white] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {title}
        </div>
  
        <div
          className={`absolute inset-0 p-6 flex flex-col justify-between text-white transition-opacity duration-500 ${
            hovered ? "opacity-100 bg-black/70" : "opacity-0"
          }`}
        >
          <p className="text-sm text-gray-200">{description}</p>
          {isFuture ? (
            <button
              onClick={onClickFuture}
              className="text-sm font-bold text-[var(--primary-color)] hover:underline self-end"
            >
              Ver mockup →
            </button>
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
  

//New modal style
// import { useState } from "react";
// import Modal from "./Modal";
// import EnConstruccion from "./EnConstruccion"; // el contenido a mostrar en el modal

// export default function ProjectCard({ title, description, image, link, type }) {
//   const isFuture = type === "future";
//   const [showModal, setShowModal] = useState(false);

//   const handleClick = () => {
//     if (isFuture) {
//       setShowModal(true);
//     } else {
//       window.open(link, "_blank");
//     }
//   };

//   return (
//     <>
//       <div
//         className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition"
//         onClick={handleClick}
//       >
//         <img src={image} alt={title} className="rounded-lg mb-4" />
//         <h3 className="text-xl font-bold text-gray-800">{title}</h3>
//         <p className="text-gray-600">{description}</p>
//         {isFuture && <p className="text-sm text-pink-500 mt-2 font-semibold">Próximamente</p>}
//       </div>

//       <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
//         <EnConstruccion />
//       </Modal>
//     </>
//   );
// }


// src/components/ProjectCard.jsx
// import { useState } from "react";
// export default function ProjectCard({ title, description, image, link, isFuture }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="relative group overflow-hidden rounded-lg shadow-xl min-h-[250px] cursor-pointer transition-all duration-300"
//     >
//       {/* Imagen de fondo con blur */}
//       <div
//         className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
//           hovered ? "blur-none scale-110" : "blur-sm scale-100"
//         }`}
//         style={{ backgroundImage: `url(${image})` }}
//       ></div>

//       {/* Overlay inicial con título o logo */}
//       <div
//         className={`absolute inset-0 flex items-center justify-center text-2xl font-bold text-[white] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
//           hovered ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         {title}
//       </div>

//       {/* Texto visible al hacer hover */}
//       <div
//         className={`absolute inset-0 p-6 flex flex-col justify-between text-white transition-opacity duration-500 ${
//           hovered ? "opacity-100 bg-black/70" : "opacity-0"
//         }`}
//       >
//         <p className="text-sm text-gray-200">{description}</p>
//         {isFuture ? (
//         //   <Link
//         //     to="/en-construccion"
//         //     className="text-sm font-bold text-[var(--primary-color)] hover:underline self-end"
//         //   >
//         //     Ver mockup →
//         //   </Link>
//         <a href="#en-construccion" className="hover:underline text-[var(--primary-color)]">
//   Ver mockup →
// </a>
//         ) : (
//           <a
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm font-bold text-[var(--primary-color)] hover:underline self-end"
//           >
//             Ver proyecto →
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }


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