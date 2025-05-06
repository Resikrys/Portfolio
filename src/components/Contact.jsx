import { useState } from "react";
//import { FaDownload } from "react-icons/fa";
import { FileDown } from "lucide-react";
import Confetti from "react-confetti";
//import ChatBotBox from "./ChatBotBox";
import ChatBotBox from "./Chatbox";
import MyPDF from '../images/cv_resicrisDev_25.pdf';
import useWindowSize from "../hooks/useWindowSize";
import dino from "../images/dino.jpeg";
import dinoIcon from '../images/dino_icon.png';

export default function Contact() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [showChatBot, setShowChatBot] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDownloadButton(true);
  };

  const handleSkip = () => {
    setShowDownloadButton(true);
  };

  const handleDownloadClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Confetti durará 5 segundos
  };

  return (
    <section id="contact" className="py-12 bg-[var(--background-color)] font-bold text-[var(--rosado-color)] relative">
      <h2 className="text-3xl font-bold text-center text-[var(--primary-color)] mb-10">Contacto</h2>

      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg">
              Nombre / Empresa
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 bg-gray-700 text-white rounded placeholder:text-gray-500 placeholder:italic"
              placeholder="Jane Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 bg-gray-700 text-white rounded placeholder:text-gray-500 placeholder:italic"
              placeholder="janeDoe@example.com"
              required
            />
          </div>

          <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-300 p-3 text-black rounded">
            Enviar
          </button>
        </form>

        {showDownloadButton && (
          <a href={MyPDF} target="_blank" rel="noopener noreferrer" download>
            <button
              onClick={handleDownloadClick}
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded flex items-center justify-center"
            >
              <FileDown className="mr-2" />
              Descargar CV
            </button>
          </a>
        )}
      </div>

{/* Botón de dino para abrir chatbot con tooltip personalizado */}
<div className="fixed bottom-6 right-6 z-50 group">
  {/* Tooltip personalizado */}
  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
    <span className="bg-[var(--fuchsia-color)] text-white text-xs px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
      click me!
    </span>
    <div className="w-2 h-2 bg-[var(--fuchsia-color)] rotate-45 mt-[-4px]" />
  </div>

  {/* Botón con imagen de dino */}
  <button onClick={() => setShowChatBot(!showChatBot)}>
    <img
      src={dino}
      alt="Chatbot Dino"
      className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform"
    />
  </button>
</div>


      {/* Chatbot visible solo si showChatBot está activo */}
      {showChatBot && <ChatBotBox onSkip={handleSkip} />}

      {/* Confetti: para funcionar necesita width i height de la ventana */}
      {showConfetti && <Confetti width={width} height={height} />}
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