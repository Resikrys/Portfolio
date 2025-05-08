import { useState } from "react";

export default function ProjectCard({
    title,
    description,
    image,
    link,
    isFuture,
    onClickFuture,
  }) {
    const [hovered, setHovered] = useState(false);
  
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group overflow-hidden rounded-lg shadow-xl min-h-[250px] cursor-pointer transition-all duration-300"
      >
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
            hovered ? "blur-none scale-110" : "blur-sm scale-100"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
  
        <div
          className={`absolute inset-0 flex items-center justify-center text-2xl font-bold text-[white] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {title}
        </div>
  
        <div
          className={`absolute inset-0 p-6 flex flex-col justify-between text-white transition-opacity duration-500 ${
            hovered ? "opacity-100 bg-black/70" : "opacity-0"
          }`}
        >
          <p className="text-sm text-gray-200">{description}</p>
          {isFuture ? (
            <button
              onClick={onClickFuture}
              className="text-sm font-bold text-[var(--primary-color)] hover:underline self-end"
            >
              Ver mockup →
            </button>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[var(--primary-color)] hover:underline self-end"
            >
              Ver proyecto →
            </a>
          )}
        </div>
      </div>
    );
  }