//New footer
import dino from "../images/dino.jpeg";
import { ArrowUpFromDot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-light-gray bg-[var(--rosado-color)]">
      
      {/* Sección 1: Info sobre mí y proyectos */}
      <div className="bg-dark-gray py-8 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-slate-800 font-semibold text-base mb-2">Sobre mí</h3>
          <p>Desarrolladora frontend apasionada por el diseño, el código limpio y la mejora continua.</p>
          <p>Trabajo con React, Tailwind y Bootstrap adaptándome al backend oportuno.</p>
        </div>
        <div>
          <h3 className="text-slate-800 font-semibold text-base mb-2">Últimos proyectos</h3>
          <a href="#proyectos" className="hover:underline decoration-[var(--primary-color)]">Claimy</a><br></br>
          <a href="#proyectos" className="hover:underline decoration-[var(--primary-color)]">Portfolio</a>
        </div>
        <div>
          <h3 className="text-slate-800 font-semibold text-base mb-2">Contacto</h3>
          <a href="#contact" className="hover:text-[var(--primary-color)]">Contacto</a><br></br>
          <a href="#contact" className="hover:text-[var(--primary-color)]">Curriculum</a>
        </div>
      </div>

      <hr className="border-[var(--light-gray)] mx-auto max-w-6xl" />

      {/* Sección 2: Menú y redes */}
      <div className="bg-dark-gray py-6 px-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <nav className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <a href="#inicio" className="hover:text-[var(--primary-color)]">Inicio</a>
          <a href="#aboutme" className="hover:text-[var(--primary-color)]">Sobre mí</a>
          <a href="#experience" className="hover:text-[var(--primary-color)]">Experiencia</a>
          <a href="#devskills" className="hover:text-[var(--primary-color)]">Dev Skills</a>
          <a href="#education" className="hover:text-[var(--primary-color)]">Educación</a>
        </nav>

        <div className="flex gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]"><i className="fab fa-linkedin fa-lg"></i></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]"><i className="fab fa-github fa-lg"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]"><i className="fab fa-instagram fa-lg"></i></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]"><i className="fab fa-youtube fa-lg"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]"><i className="fab fa-twitter fa-lg"></i></a>
        </div>
      </div>

      {/* Sección 3: Créditos y chatbot */}
      <div className="bg-primary-color text-dark-gray py-6 px-6 flex justify-between items-center max-w-6xl mx-auto text-xs flex-col md:flex-row gap-4 md:gap-0">
        <div className="flex items-center gap-2">
          <img
            src={dino}
            alt="Dino Icon"
            className="w-8 h-8 rounded-full shadow-md"
          />
          <div className="text-sm font-semibold text-[var(--primary-color)]">ResikrysDev</div>
        </div>
        <div className="text-center md:text-left">© {new Date().getFullYear()} Desde Barcelona, con pasión por la tecnología.</div>
      </div>

      {/* Flecha que lleva arriba */}
      <a
      href="#inicio"
      className="fixed bottom-5 left-5 bg-primary-color text-dark-gray p-2 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      title="Volver arriba"
    >
      <i><ArrowUpFromDot/></i>
    </a>
    </footer>
  );
}


//Old footer
// import dino from "../images/dino.jpeg";

// export default function Footer() {
//   return (
//     <footer className="bg-dark-gray text-light-gray py-6">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
//         {/* Logo + Nombre */}
//         <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
//           {/* <div className="text-4xl animate-bounce">🦖</div> Icono Dinosaurio */}
//           <div className="text-4xl animate-bounce"><img
//                      src={dino}
//                     alt="Chatbot Dino"
//                     className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform">
//                     </img>
//           </div> {/* Icono Dinosaurio */}
//           <div className="text-lg font-semibold mt-2">ResikrysDev</div>
//         </div>

//         {/* Redes Sociales */}
//         <div className="flex gap-6">
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
//             <i className="fab fa-linkedin fa-lg"></i> {/* LinkedIn */}
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
//             <i className="fab fa-github fa-lg"></i> {/* GitHub */}
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
//             <i className="fab fa-instagram fa-lg"></i> {/* Instagram */}
//           </a>
//         </div>

//       </div>
//     </footer>
//   );
// }


//First atempt
{/* <footer className="bg-grayDark text-white py-4 flex justify-center gap-4">
  <a href="https://github.com/tuUsuario" target="_blank" rel="noopener noreferrer">
    <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6 hover:scale-110" />
  </a>
  <a href="https://linkedin.com/in/tuUsuario" target="_blank" rel="noopener noreferrer">
    <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:scale-110" />
  </a>
</footer> */}