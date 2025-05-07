import { useState, useEffect } from 'react';
import dinoIcon from '../images/dino_icon.png';
import SkewedTitle from '../components/SkewedTitle';

export default function Projects() {
  const [activeSection, setActiveSection] = useState('blog');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['blog', 'contenidos', 'redes'];
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Ajuste para que cambie antes del final del bloque

      let currentSection = 'blog'; // default
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (section) =>
    `transition-colors ${activeSection === section ? 'text-primary underline underline-offset-4' : 'text-light-gray hover:text-primary'}`;

  return (
    <section id="projects" className="py-12 bg-[var(--background-color)] text-white">
      <div className="text-center my-12">
  <SkewedTitle>Proyectos</SkewedTitle>
</div>
      {/* <h2 className="text-3xl font-bold text-center mb-10 text-[var(--primary-color)]">Proyectos</h2> */}
      {/* <div className="relative inline-block mx-auto skewed-title">
  <span className="block absolute inset-0 bg-[var(--rose-color)] skew-x-[-6deg] translate-x-1.5 translate-y-1.5 z-0 rounded" />
  <h2 className="relative z-10 px-6 py-3 text-3xl font-bold text-white bg-[var(--rosado-color)] skew-x-[-6deg] rounded">
    Proyectos
  </h2>
</div> */}

      {/* Mini-navbar */}
      <div className="sticky top-16 bg-background z-10 flex justify-center gap-6 py-2">
        <a href="#blog" className={linkClass('blog')}>Blog</a>
        <a href="#contenidos" className={linkClass('contenidos')}>Contenidos</a>
        <a href="#redes" className={linkClass('redes')}>Redes</a>
      </div>

      {/* Contenidos */}
      <div className="max-w-4xl mx-auto mt-10 space-y-20">

        <section id="blog" className="scroll-mt-24">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">Blog</h3>
          <p>En mi blog comparto artículos sobre frontend, productividad y diseño web. ¡Pronto estará online!</p>
        </section>

        <section id="contenidos" className="scroll-mt-24">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">Contenidos</h3>
          <p>Estoy preparando recursos gratuitos: guías de React, cheatsheets de Tailwind, y más. 🚀</p>
        </section>

        <section id="redes" className="scroll-mt-24">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--primary-color)]">Redes</h3>
          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com" target="_blank" className="hover:text-primary">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" className="hover:text-primary">Instagram</a>
            <a href="https://github.com" target="_blank" className="hover:text-primary">GitHub</a>
          </div>
        </section>

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