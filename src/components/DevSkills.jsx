import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaDocker} from 'react-icons/fa'; // Ejemplo de íconos

export default function DevSkills() {
  const frontendSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS v4", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaHtml5 /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs /> },
  ];

  const otherSkills = [
    { name: "Git", icon: <FaGithub /> }, // Puedes usar iconos como FaGithub de react-icons
    { name: "Docker", icon: <FaDocker /> },
  ];

  return (
    <section id="devskills" className="py-12 bg-background text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Dev Skills</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Frontend Skills */}
        <div>
          <h3 className="text-xl text-center mb-4 text-white">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-6 ">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="p-4 rounded-full bg-white text-violet-600 text-4xl transition-all duration-300 ease-in-out hover:shadow-pink-400 hover:shadow-lg hover:scale-110 hover:animate-bounce-smooth">{skill.icon}</div>
                <h4 className="text-center mt-4 hover:animate-bounce">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-xl text-center mb-4 text-white">Backend</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {backendSkills.map((skill, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="text-4xl text-center">{skill.icon}</div>
                <h4 className="text-center mt-4 hover:animate-spin">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h3 className="text-xl text-center mb-4 text-white">Other Skills</h3>
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
    </section>
  );
}
