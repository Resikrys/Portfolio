//New header NAVBAR-TOGGLE COMPONENT + efectos nav-link & scroll automático
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from './ThemeToggle';

const sections = ['about', 'experience', 'skills', 'education', 'contact', 'projects'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  {/* Auto-scroll -> nav-links */}
  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop;
          const height = section.offsetHeight;
          if (window.scrollY >= offset - 150 && window.scrollY < offset + height - 150) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClasses = (id, hoverColor) =>
    `${activeSection === id ? 'underline text-pink-500 underline-offset-4 font-semibold' : ''} hover:${hoverColor} transition-colors duration-200`;

  return (
    <header className="sticky top-0 z-50 bg-[var(--background-color)] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--rose-color)]">
        Resikrys<span className="text-[var(--primary-color)]">Dev</span><span className="text-[var(--rosado-color)]"> Portfolio</span> 
        </h1>

        <ThemeToggle /> {/* Dark-light component */}

        {/* Menú Desktop */}
        <nav className="hidden md:flex gap-6 text-base font-medium">
          <a href="#about" className={linkClasses('about', 'text-[var(--rose-color)]')}>Sobre mí</a>
          <a href="#experience" className={linkClasses('experience', 'text-[var(--rose-color)]')}>Experiencia</a>
          <a href="#skills" className={linkClasses('skills', 'text-[var(--rose-color)]')}>Skills</a>
          <a href="#education" className={linkClasses('education', 'text-[var(--rose-color)]')}>Estudios</a>
          <a href="#contact" className={linkClasses('contact', 'text-[var(--rose-color)]')}>Contacto</a>
          <a href="#projects" className={linkClasses('projects', 'text-[var(--rose-color)]')}>Proyectos</a>
        </nav>

        {/* Botón Hamburguesa Móvil */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--background-color)] text-white px-6 pb-4 flex flex-col gap-3">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={toggleMenu}
              className={`${activeSection === id ? 'underline text-pink-500 underline-offset-4 font-semibold' : ''}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}