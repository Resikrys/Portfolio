import { useState } from "react";
import { CircleChevronDown } from "lucide-react";
import { CircleChevronUp } from "lucide-react";
import dinoIcon from '../images/dino_icon.png';

const certificates = [
  {
    title: "Backend Java & Spring",
    subtitle: "IT Academy - Finalizado en 2025",
    description: "Fundamentos de programación, POO y lógica de programación del lado del servidor en terminal con Java. Framework Spring de Java para desarrollo backend.",
  },
  {
    title: "Fullstack Web Development",
    subtitle: "Deusto Formación - Finalizado en 2023",
    description: "MERN/MEAN stack: React, Angular, Node.js, Express, MongoDB, moongose.",
  },
  {
    title: "UX/UI Design Fundamentals",
    subtitle: "Udemy - Finalizado en 2023",
    description: "Principios de usabilidad, media queries, wireframing, prototipado con Figma.",
  },
  {
    title: "Frontend Developer & Javascript essentials",
    subtitle: "Udemy - Finalizado en 2022",
    description: "HTML, CSS, Javascript, diseño responsive, accesibilidad, testing de frontend, algoritmos de JavaScript.",
  },
];

export default function Education() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-12 bg-[var(--background-color)] text-[var(--darkSun)]">
      <h2 className="text-3xl font-bold text-center mb-10 text-[var(--primary-color)]">Education</h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 bg-[var(--rosado-color)] text-dark-gray font-semibold text-left"
            >
              {certificate.title}
              <span className="ml-4 text-xl hover:animate-bounce">{openIndex === index ? <CircleChevronUp size={20} /> : <CircleChevronDown size={20} />}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96 p-4" : "max-h-0"
              } bg-[var(--sunDark)] text-dark-gray`}
            >
              <p className="font-bold">{certificate.subtitle}</p>
              <p className="mt-2">{certificate.description}</p>
            </div>
          </div>
        ))}
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
