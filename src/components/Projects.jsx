// src/components/ProjectsSection.jsx
import { useState } from 'react';
import dinoIcon from '../images/dino_icon.png';
import SkewedTitle from './SkewedTitle';
import ProjectCard from './ProjectCard';
import EnConstruccion from './EnConstruccion';
import picMock from '../images/picMock.jpg';

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
          title="Landing page Claimy.cl"
          description="Diseño e implementación del frontend de una landing page profesional en colaboración con el equipo de Claimy. Responsive, accesible y enfocado en UX."
          image={picMock}
          link="https://claimy.cl"
        />
        <ProjectCard
          title="Portfolio personal"
          description="Este sitio web, desarrollado con React y Tailwind CSS, representa mi trabajo, mis intereses y mis valores como frontend developer."
          image={picMock}
          link="https://github.com/tuusuario/portfolio"
        />
      </div>

      {/* Divider */}
      <hr className="my-16 border-t-2 border-[var(--primary-color)] w-1/2 mx-auto" />

      {/* Proyectos futuros */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Canal de YouTube: Muévete Fácil"
          description="Videos cortos, claros y accesibles sobre entrenamiento físico, movilidad y rutinas básicas para comenzar a moverse desde casa."
          image={picMock}
          isFuture={true}
          onClickFuture={() => setShowUnderConstruction(true)}
        />
        <ProjectCard
          title="Blog informativo: Entrena y come bien"
          description="Blog con artículos sencillos sobre entrenamiento, motivación y nutrición basados en evidencia y experiencia real."
          image={picMock}
          isFuture={true}
          onClickFuture={() => setShowUnderConstruction(true)}
        />
        <ProjectCard
          title="App HIIT Timer"
          description="Aplicación para crear y personalizar entrenamientos HIIT. Temporizador ajustable, sonidos y rutinas express."
          image={picMock}
          isFuture={true}
          onClickFuture={() => setShowUnderConstruction(true)}
        />
        <ProjectCard
          title="App de entrenamiento progresivo"
          description="Una app con rutinas, progresiones, retos y objetivos que acompañan al usuario en su evolución física y mental."
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


//New section PROJECTS concept -working a medias
// src/components/ProjectsSection.jsx
// import dinoIcon from '../images/dino_icon.png';
// import SkewedTitle from './SkewedTitle';
// import ProjectCard from './ProjectCard';
// import picMock from '../images/picMock.jpg';

// export default function ProjectsSection() {
//   return (
//     <section id="proyectos" className="py-16 bg-[var(--background-color)] text-[var(--dark-gray)]">
//       <div className="text-center my-12">
//   <SkewedTitle>Proyectos</SkewedTitle>
// </div>

//       {/* Proyectos reales */}
//       <div className="mt-12 grid md:grid-cols-2 gap-8">
//         <ProjectCard
//           title="Landing page Claimy.cl"
//           description="Diseño e implementación del frontend de una landing page profesional en colaboración con el equipo de Claimy. Responsive, accesible y enfocado en UX."
//           image={picMock}
//           link="https://claimy.cl"
//         />
//         <ProjectCard
//           title="Portfolio personal"
//           description="Este sitio web, desarrollado con React y Tailwind CSS, representa mi trabajo, mis intereses y mis valores como frontend developer."
//           image={picMock}
//           link="https://github.com/tuusuario/portfolio" // cámbialo si tienes el link de GitHub Pages
//         />
//       </div>

//       {/* Divider */}
//       <hr className="my-16 border-t-2 border-[var(--primary-color)] w-1/2 mx-auto" />

//       {/* Proyectos futuros */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         <ProjectCard
//           title="Canal de YouTube: Muévete Fácil"
//           description="Videos cortos, claros y accesibles sobre entrenamiento físico, movilidad y rutinas básicas para comenzar a moverse desde casa."
//           image={picMock}
//           isFuture={true}
//         />
//         <ProjectCard
//           title="Blog informativo: Entrena y come bien"
//           description="Blog con artículos sencillos sobre entrenamiento, motivación y nutrición basados en evidencia y experiencia real."
//           image={picMock}
//           isFuture={true}
//         />
//         <ProjectCard
//           title="App HIIT Timer"
//           description="Aplicación para crear y personalizar entrenamientos HIIT. Temporizador ajustable, sonidos y rutinas express."
//           image={picMock}
//           isFuture={true}
//         />
//         <ProjectCard
//           title="App de entrenamiento progresivo"
//           description="Una app con rutinas, progresiones, retos y objetivos que acompañan al usuario en su evolución física y mental."
//           image={picMock}
//           isFuture={true}
//         />
//       </div>
//       <div className="flex items-center justify-center my-12">
//         {/* Línea izquierda con degradado */}
//         <div className="h-[4px] w-1/4 bg-gradient-to-r from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />
      
//         {/* Icono central */}
//         <img
//           src={dinoIcon}
//           alt="Separador dino"
//           className="mx-4 w-10 h-10 object-contain"
//         />
      
//         {/* Línea derecha con degradado */}
//         <div className="h-[4px] w-1/4 bg-gradient-to-l from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />
//       </div>
//     </section>
//   );
// }

//Old section PROJECTS concept
// import { useState, useEffect } from 'react';
// import dinoIcon from '../images/dino_icon.png';
// import SkewedTitle from '../components/SkewedTitle';

// export default function Projects() {
//   const [activeSection, setActiveSection] = useState('blog');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['blog', 'contenidos', 'redes'];
//       const scrollPosition = window.scrollY + window.innerHeight / 3; // Ajuste para que cambie antes del final del bloque

//       let currentSection = 'blog'; // default
//       sections.forEach((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           if (scrollPosition >= element.offsetTop) {
//             currentSection = section;
//           }
//         }
//       });

//       setActiveSection(currentSection);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const linkClass = (section) =>
//     `transition-colors ${activeSection === section ? 'text-primary underline underline-offset-4' : 'text-light-gray hover:text-primary'}`;

//   return (
//     <section id="projects" className="py-12 bg-[var(--background-color)] text-white">
//       <div className="text-center my-12">
//   <SkewedTitle>Proyectos</SkewedTitle>
// </div>
//       {/* <h2 className="text-3xl font-bold text-center mb-10 text-[var(--primary-color)]">Proyectos</h2> */}
//       {/* <div className="relative inline-block mx-auto skewed-title">
//   <span className="block absolute inset-0 bg-[var(--rose-color)] skew-x-[-6deg] translate-x-1.5 translate-y-1.5 z-0 rounded" />
//   <h2 className="relative z-10 px-6 py-3 text-3xl font-bold text-white bg-[var(--rosado-color)] skew-x-[-6deg] rounded">
//     Proyectos
//   </h2>
// </div> */}

//       {/* Mini-navbar */}
//       <div className="sticky top-16 bg-background z-10 flex justify-center gap-6 py-2">
//         <a href="#blog" className={linkClass('blog')}>Blog</a>
//         <a href="#contenidos" className={linkClass('contenidos')}>Contenidos</a>
//         <a href="#redes" className={linkClass('redes')}>Redes</a>
//       </div>

//       {/* Contenidos */}
//       <div className="max-w-4xl mx-auto mt-10 space-y-20">

//         <section id="blog" className="scroll-mt-24">
//           <h3 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">Blog</h3>
//           <p>En mi blog comparto artículos sobre frontend, productividad y diseño web. ¡Pronto estará online!</p>
//           <p>En mi blog comparto artículos sobre frontend, productividad y diseño web. ¡Pronto estará online!</p>
//           <p>En mi blog comparto artículos sobre frontend, productividad y diseño web. ¡Pronto estará online!</p>
//           <p>En mi blog comparto artículos sobre frontend, productividad y diseño web. ¡Pronto estará online!</p>
//         </section>

//         <section id="contenidos" className="scroll-mt-24">
//           <h3 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">Contenidos</h3>
//           <p>Estoy preparando recursos gratuitos: guías de React, cheatsheets de Tailwind, y más. 🚀</p>
//           <p>En mi blog comparto artículos sobre frontend, productividad y diseño web. ¡Pronto estará online!</p>
//           <p>En mi blog comparto artículos sobre frontend, productividad y diseño web. ¡Pronto estará online!</p>
//           <p>En mi blog comparto artículos sobre frontend, productividad y diseño web. ¡Pronto estará online!</p>
//         </section>

//         <section id="redes" className="scroll-mt-24">
//           <h3 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">Redes</h3>
//           <div className="flex gap-4 mt-4">
//             <a href="https://linkedin.com" target="_blank" className="hover:text-primary">LinkedIn</a>
//             <a href="https://instagram.com" target="_blank" className="hover:text-primary">Instagram</a>
//             <a href="https://github.com" target="_blank" className="hover:text-primary">GitHub</a>
//           </div>
//           <p>En mi blog comparto artículos sobre frontend, productividad y diseño web. ¡Pronto estará online!</p>
//           <p>En mi blog comparto artículos sobre frontend, productividad y diseño web. ¡Pronto estará online!</p>
//           <p>En mi blog comparto artículos sobre frontend, productividad y diseño web. ¡Pronto estará online!</p>
//         </section>

//       </div>
//       <div className="flex items-center justify-center my-12">
//         {/* Línea izquierda con degradado */}
//         <div className="h-[4px] w-1/4 bg-gradient-to-r from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />
      
//         {/* Icono central */}
//         <img
//           src={dinoIcon}
//           alt="Separador dino"
//           className="mx-4 w-10 h-10 object-contain"
//         />
      
//         {/* Línea derecha con degradado */}
//         <div className="h-[4px] w-1/4 bg-gradient-to-l from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />
//       </div>
//     </section>
//   );
// }

//Second attempt -> working
// import { useState, useEffect } from 'react';
// import dinoIcon from '../images/dino_icon.png';

// export default function Projects() {
//   const [activeSection, setActiveSection] = useState('blog');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['blog', 'contenidos', 'redes'];
//       const scrollPosition = window.scrollY + window.innerHeight / 3; // Ajuste para que cambie antes del final del bloque

//       let currentSection = 'blog'; // default
//       sections.forEach((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           if (scrollPosition >= element.offsetTop) {
//             currentSection = section;
//           }
//         }
//       });

//       setActiveSection(currentSection);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const linkClass = (section) =>
//     `transition-colors ${activeSection === section ? 'text-primary underline underline-offset-4' : 'text-light-gray hover:text-primary'}`;

//   return (
//     <section id="projects" className="py-12 bg-[var(--background-color)] text-white">
//       <h2 className="text-3xl font-bold text-center mb-10 text-[var(--primary-color)]">Proyectos</h2>

//       {/* Mini-navbar */}
//       <div className="sticky top-16 bg-background z-10 flex justify-center gap-6 py-2">
//         <a href="#blog" className={linkClass('blog')}>Blog</a>
//         <a href="#contenidos" className={linkClass('contenidos')}>Contenidos</a>
//         <a href="#redes" className={linkClass('redes')}>Redes</a>
//       </div>

//       {/* Contenidos */}
//       <div className="max-w-4xl mx-auto mt-10 space-y-20">

//         <section id="blog" className="scroll-mt-24">
//           <h3 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">Blog</h3>
//           <p>En mi blog comparto artículos sobre frontend, productividad y diseño web. ¡Pronto estará online!</p>
//         </section>

//         <section id="contenidos" className="scroll-mt-24">
//           <h3 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">Contenidos</h3>
//           <p>Estoy preparando recursos gratuitos: guías de React, cheatsheets de Tailwind, y más. 🚀</p>
//         </section>

//         <section id="redes" className="scroll-mt-24">
//           <h3 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">Redes</h3>
//           <div className="flex gap-4 mt-4">
//             <a href="https://linkedin.com" target="_blank" className="hover:text-primary">LinkedIn</a>
//             <a href="https://instagram.com" target="_blank" className="hover:text-primary">Instagram</a>
//             <a href="https://github.com" target="_blank" className="hover:text-primary">GitHub</a>
//           </div>
//         </section>

//       </div>
//       <div className="flex items-center justify-center my-12">
//         {/* Línea izquierda con degradado */}
//         <div className="h-[4px] w-1/4 bg-gradient-to-r from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />
      
//         {/* Icono central */}
//         <img
//           src={dinoIcon}
//           alt="Separador dino"
//           className="mx-4 w-10 h-10 object-contain"
//         />
      
//         {/* Línea derecha con degradado */}
//         <div className="h-[4px] w-1/4 bg-gradient-to-l from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />
//       </div>
//     </section>
//   );
// }

//First atempt
// export default function AlsoInterested() {
//     return (
//       <section id="interests" className="py-12 bg-background text-white">
//         <h2 className="text-3xl font-bold text-center mb-10">Also Interested In</h2>
  
//         {/* Mini-navbar de subsecciones */}
//         <div className="sticky top-16 bg-background z-10 flex justify-center gap-6 py-2">
//           <a href="#blog" className="hover:text-primary text-light-gray transition-colors">Blog</a>
//           <a href="#contenidos" className="hover:text-primary text-light-gray transition-colors">Contenidos</a>
//           <a href="#redes" className="hover:text-primary text-light-gray transition-colors">Redes</a>
//         </div>
  
//         {/* Secciones internas */}
//         <div className="max-w-4xl mx-auto mt-10 space-y-20">
  
//           {/* Blog */}
//           <section id="blog" className="scroll-mt-24">
//             <h3 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">Blog</h3>
//             <p>En mi blog comparto artículos sobre frontend, productividad y diseño web. ¡Pronto estará online!</p>
//           </section>
  
//           {/* Contenidos */}
//           <section id="contenidos" className="scroll-mt-24">
//             <h3 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">Contenidos</h3>
//             <p>Estoy preparando recursos gratuitos: guías de React, cheatsheets de Tailwind, y más. 🚀</p>
//           </section>
  
//           {/* Redes */}
//           <section id="redes" className="scroll-mt-24">
//             <h3 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">Redes</h3>
//             <div className="flex gap-4 mt-4">
//               <a href="https://linkedin.com" target="_blank" className="hover:text-[var(--primary-color)]">LinkedIn</a>
//               <a href="https://instagram.com" target="_blank" className="hover:text-[var(--primary-color)]">Instagram</a>
//               <a href="https://github.com" target="_blank" className="hover:text-[var(--primary-color)]">GitHub</a>
//             </div>
//           </section>
  
//         </div>
//       </section>
//     );
//   }