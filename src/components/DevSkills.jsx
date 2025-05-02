import { FaReact, FaHtml5, FaJs, FaBootstrap, FaGit, FaGithub, FaJava, FaNodeJs } from 'react-icons/fa'; // FE icons
import { RiTailwindCssFill } from "react-icons/ri";
// import {  } from 'react-icons/fa'; // BE icons
// import { faDatabase, FaDocker} from 'react-icons/fa'; // DDBB icons
import { SiCss3, SiMongodb, SiMysql, SiEclipseide, SiPostman } from "react-icons/si";
// import {  } from 'react-icons/fa'; // Other icons
import { BiLogoVisualStudio } from "react-icons/bi";
//Iconos: html, css, javascript, react, tailwind, bootstrap - java, nodejs, express - mysql, mongodb, comppass - vsc, eclipse, git, github, postman, mysql workbench
//Wanna learn: spring (java), c# and .NET
import dinoIcon from '../images/dino_icon.png';

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
    { name: "mySQL", icon: <SiMysql /> }, // Puedes usar iconos como FaGithub de react-icons
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  const otherSkills = [
    { name: "VSC", icon: <BiLogoVisualStudio /> }, // Puedes usar iconos como FaGithub de react-icons
    { name: "Eclipse", icon: <SiEclipseide  /> },
    { name: "Git", icon: <FaGit /> },
    { name: "Github", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman  /> },
  ];

  return (
<section id="devskills" className="py-12 bg-[var(--background-color)] text-gray-800">
  <h2 className="text-3xl font-bold text-center mb-10 text-[var(--primary-color)]">Dev Skills</h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Frontend Skills */}
    <div>
      <h3 className="text-xl text-center mb-4 text-[var(--rosado-color)]">Frontend</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {frontendSkills.map((skill, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="p-4 rounded-full bg-white text-violet-600 text-4xl transition-all duration-300 ease-in-out hover:shadow-pink-400 hover:shadow-lg hover:scale-110 hover:animate-bounce-smooth">{skill.icon}</div>
            <h4 className="text-center mt-4 hover:animate-bounce">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>

    {/* Backend + DDBB */}
    <div className="flex flex-col gap-8">
      {/* Backend */}
      <div>
        <h3 className="text-xl text-center mb-4 text-[var(--rosado-color)]">Backend</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {backendSkills.map((skill, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-4xl text-center">{skill.icon}</div>
              <h4 className="text-center mt-4 hover:animate-spin">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* DDBB */}
      <div>
        <h3 className="text-xl text-center mb-4 text-[var(--rosado-color)]">DDBB</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {ddbb.map((skill, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-4xl text-center">{skill.icon}</div>
              <h4 className="text-center mt-4 hover:animate-spin">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Other Skills */}
    <div>
      <h3 className="text-xl text-center mb-4 text-[var(--rosado-color)]">Other Skills</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {otherSkills.map((skill, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="text-4xl text-center">{skill.icon}</div>
            <h4 className="text-center mt-4 hover:animate-ping">{skill.name}</h4>
          </div>
        ))}
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
