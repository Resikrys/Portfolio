import { FaReact, FaHtml5, FaJs, FaBootstrap, FaGit, FaGithub, FaJava, FaNodeJs } from 'react-icons/fa'; // FE icons
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCss3, SiMongodb, SiMysql, SiEclipseide, SiPostman } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import dinoIcon from '../images/dino_icon.png';
import SkewedTitle from '../components/SkewedTitle';

export default function DevSkills() {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <SiCss3  /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
  ];

  const backendSkills = [
    { name: "Java/Spring", icon: <FaJava /> },
    { name: "Node.js/Express", icon: <FaNodeJs /> },
  ];

  const ddbb = [
    { name: "mySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  const otherSkills = [
    { name: "VSC", icon: <BiLogoVisualStudio /> },
    { name: "Eclipse", icon: <SiEclipseide  /> },
    { name: "Git", icon: <FaGit /> },
    { name: "Github", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman  /> },
  ];

  return (
<section id="devskills" className="py-16 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background-color)] text-gray-800">
  <div className="text-center my-12">
    <SkewedTitle>Dev Skills</SkewedTitle>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:items-start">
    
    {/* Columna izquierda: Frontend grande + Backend pequeño */}
    <div className="flex flex-col gap-8 md:translate-y-[-20px]">
      {/* Frontend */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--fuchsia-color)] to-[var(--rose-color)] shadow-lg">
        <h3 className="text-xl text-center mb-4 text-white font-medium underline underline-offset-4 decoration-amber-300 decoration-double -skew-2">Frontend</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {frontendSkills.map((skill, index) => (
            <div key={index} className="p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:scale-105 transition-transform duration-300 text-black social-icon">
              <div className="text-4xl text-center">{skill.icon}</div>
              <h4 className="text-center mt-2 text-sm">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--fuchsia-color)] to-[var(--rose-color)] shadow-lg">
        <h3 className="text-xl text-center mb-4 text-black font-medium underline underline-offset-4 decoration-amber-300 decoration-double -skew-2">Backend</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {backendSkills.map((skill, index) => (
            <div key={index} className="p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:scale-105 transition-transform duration-300 text-white social-icon">
              <div className="text-4xl text-center">{skill.icon}</div>
              <h4 className="text-center mt-2 text-sm">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Columna derecha: DDBB pequeño + Other Skills grande */}
    <div className="flex flex-col gap-8 md:translate-y-[20px]">
      {/* DDBB */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--fuchsia-color)] to-[var(--rose-color)] shadow-lg">
        <h3 className="text-xl text-center mb-4 text-black font-medium underline underline-offset-4 decoration-amber-300 decoration-double -skew-2">DDBB</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {ddbb.map((skill, index) => (
            <div key={index} className="p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:scale-105 transition-transform duration-300 text-white social-icon">
              <div className="text-4xl text-center">{skill.icon}</div>
              <h4 className="text-center mt-2 text-sm">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Other Skills */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--fuchsia-color)] to-[var(--rose-color)] shadow-lg">
        <h3 className="text-xl text-center mb-4 text-white font-medium underline underline-offset-4 decoration-amber-300 decoration-double -skew-2">Other Skills</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {otherSkills.map((skill, index) => (
            <div key={index} className="p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:scale-105 transition-transform duration-300 text-black social-icon">
              <div className="text-4xl text-center">{skill.icon}</div>
              <h4 className="text-center mt-2 text-sm">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo con dino */}
  <div className="flex items-center justify-center my-12">
    <div className="h-[4px] w-1/4 bg-gradient-to-r from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />
    <img
      src={dinoIcon}
      alt="Separador dino"
      className="mx-4 w-10 h-10 object-contain"
    />
    <div className="h-[4px] w-1/4 bg-gradient-to-l from-[var(--fuchsia-color)] to-[var(--rose-color)] rounded-full" />
  </div>
</section>

  );
}
