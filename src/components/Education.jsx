import { useState } from "react";
import { CircleChevronDown } from "lucide-react";
import { CircleChevronUp } from "lucide-react";

const certificates = [
  {
    title: "Fullstack Web Development",
    subtitle: "Coderhouse - Finalizado en 2024",
    description: "HTML, CSS, JavaScript, React, Node.js, Express, MongoDB.",
  },
  {
    title: "Frontend Developer",
    subtitle: "FreeCodeCamp - Finalizado en 2023",
    description: "Diseño responsive, accesibilidad, testing de frontend, algoritmos de JavaScript.",
  },
  {
    title: "UX/UI Design Fundamentals",
    subtitle: "Coursera - Finalizado en 2022",
    description: "Principios de usabilidad, wireframing, prototipado con Figma.",
  },
];

export default function Education() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-12 bg-background text-fuchsia-500">
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 bg-white text-dark-gray font-semibold text-left"
            >
              {cert.title}
              <span className="ml-4 text-xl hover:animate-bounce">{openIndex === index ? <CircleChevronUp size={20} /> : <CircleChevronDown size={20} />}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96 p-4" : "max-h-0"
              } bg-light-gray text-dark-gray`}
            >
              <p className="font-bold">{cert.subtitle}</p>
              <p className="mt-2">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
