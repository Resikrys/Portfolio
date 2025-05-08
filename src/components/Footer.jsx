import dino from "../images/dino.jpeg";
import { ArrowUpFromDot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-light-gray bg-[var(--rosado-color)]">
      
      {/* Sección 1: Info sobre mí y proyectos */}
      <div className="bg-dark-gray py-8 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-slate-800 font-semibold text-base mb-2">Sobre mí</h3>
          <p className="text-white">Desarrolladora frontend apasionada por el diseño, el código limpio y la mejora continua.</p>
          <p className="text-white">Trabajo con React, Tailwind y Bootstrap adaptándome al backend oportuno.</p>
        </div>
        <div>
          <h3 className="text-slate-800 font-semibold text-base mb-2">Últimos proyectos</h3>
          <a href="#proyectos" className="hover:underline decoration-[var(--primary-color)]">Claimy</a><br></br>
          <a href="#proyectos" className="hover:underline decoration-[var(--primary-color)]">Portfolio</a>
        </div>
        <div>
          <h3 className="text-slate-800 font-semibold text-base mb-2">Contacto</h3>
          <a href="#contact" className="hover:underline decoration-[var(--primary-color)]">Contacto</a><br></br>
          <a href="#contact" className="hover:underline decoration-[var(--primary-color)]">Curriculum</a>
        </div>
      </div>

      <hr className="border-[var(--primary-color)] mx-auto max-w-6xl" />

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
          <a href="https://www.linkedin.com/in/cristina-resina-del-campo-a44074129/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]"><i className="fab fa-linkedin fa-lg"></i></a>
          <a href="https://github.com/Resikrys" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]"><i className="fab fa-github fa-lg"></i></a>
          <a href="https://www.instagram.com/resikrys/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]"><i className="fab fa-instagram fa-lg"></i></a>
          <a href="https://www.youtube.com/@traditionalvingtsun" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]"><i className="fab fa-youtube fa-lg"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]"><i className="fab fa-twitter fa-lg"></i></a>
        </div>
      </div>

      {/* Sección 3: Nombre y créditos */}
      <div className="bg-primary-color text-dark-gray py-6 px-6 flex justify-between items-center max-w-6xl mx-auto text-xs flex-col md:flex-row gap-4 md:gap-0">
        <div className="flex items-center gap-2">
          <img
            src={dino}
            alt="Dino Icon"
            className="w-8 h-8 rounded-full shadow-md"
          />
          <div className="text-sm font-semibold text-[var(--rose-color)]">Resikrys<span className="text-[var(--primary-color)]">Dev</span></div>
        </div>
        <div className="text-center md:text-left text-white">© {new Date().getFullYear()} Desde Barcelona, con pasión por la tecnología.</div>
      </div>

      {/* Flecha que lleva arriba/inicio */}
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