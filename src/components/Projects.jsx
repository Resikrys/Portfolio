//Project component & link href
import { useState } from 'react';
import dinoIcon from '../images/dino_icon.png';
import SkewedTitle from './SkewedTitle';
import ProjectCard from './ProjectCard';
import EnConstruccion from './EnConstruccion';
import picMock from '../images/laptop.jpeg';
import picClaimy from '../images/claimy.webp';
import picWeb from '../images/webDev.jpg';

export default function Projects() {
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);

  return (
    <section id="proyectos" className="py-16 bg-[var(--background-color)] text-[var(--dark-gray)]">
      <div className="text-center my-12">
        <SkewedTitle>Proyectos</SkewedTitle>
      </div>

      {/* Proyectos reales */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="AM5/Claimy"
          description="Diseño e implementación del frontend de una landing page profesional en colaboración con el equipo de Claimy, completamente personalizado ajustándonos a las directrices del cliente. Responsive, accesible y enfocado en UX."
          image={picClaimy}
          link="https://claimy.cl"
        />
        <ProjectCard
          title="Portfolio personal"
          description="Este sitio web, desarrollado con React y Tailwind CSS, representa mi trabajo, mis intereses y mis valores como frontend developer. Me gusta crear proyectos que representen y expresen el enfoque y estilo de cada cliente."
          image={picWeb}
          link="https://github.com/tuusuario/portfolio"
        />
      </div>

      {/* Divider */}
      <hr className="my-16 border-t-2 border-[var(--primary-color)] w-1/2 mx-auto" />

      {/* Proyectos futuros */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Entrena y come bien"
          description="Contenido gratuito dónde podrás disponer de videos cortos, claros y accesibles sobre entrenamiento físico, movilidad y rutinas básicas para comenzar a moverse desde casa. 
          Además, encuentra la información que buscas en formato de blog con artículos sencillos sobre entrenamiento, motivación y nutrición basados en evidencia y experiencia real."
          image={picMock}
          isFuture={true}
          onClickFuture={() => setShowUnderConstruction(true)}
        />
        <ProjectCard
          title="App de entrenamiento progresivo"
          description="Una app con rutinas, progresiones, retos y objetivos que acompañan al usuario en su evolución física y mental. 
          Seguimiento a través de un entrenador online con el que poder contacta y aclarar dudas o cambios para ofrecer una experiencia totalmente personalizada para cada usuario."
          image={picMock}
          isFuture={true}
          onClickFuture={() => setShowUnderConstruction(true)}
        />
        <ProjectCard
          title="App Crono-Timer"
          description="Aplicación para crear y personalizar entrenamientos en circuito aptos para distintas modalidades. Temporizador ajustable, sonidos y rutinas express."
          image={picMock}
          isFuture={true}
          onClickFuture={() => setShowUnderConstruction(true)}
        />
      </div>

      {/* Separador final */}
      <div className="flex items-center justify-center my-12">
        <div className="h-[4px] w-1/4 bg-gradient-to-r from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />
        <img src={dinoIcon} alt="Separador dino" className="mx-4 w-10 h-10 object-contain" />
        <div className="h-[4px] w-1/4 bg-gradient-to-l from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />
      </div>

      {/* Modal de EnConstruccion */}
      {showUnderConstruction && (
        <EnConstruccion onClose={() => setShowUnderConstruction(false)} />
      )}
    </section>
  );
}