import { useState } from "react";
//import { FaDownload } from "react-icons/fa";
import { FileDown } from "lucide-react";
import Confetti from "react-confetti";
//import ChatBotBox from "./ChatBotBox";
import ChatBotBox from "./Chatbox";
import MyPDF from '../images/cv_resicrisDev_25.pdf';
import useWindowSize from "../hooks/useWindowSize";
import dino from "../images/dino.jpeg";

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
    <section id="contact" className="py-12 bg-background text-white relative">
      <h2 className="text-3xl font-bold text-center mb-10">Contacto</h2>

      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg">
              Nombre o Empresa
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 bg-gray-700 text-white rounded"
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
              className="w-full p-2 bg-gray-700 text-white rounded"
              required
            />
          </div>

          <button type="submit" className="w-full bg-yellow-400 p-3 text-black rounded">
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

      {/* Botón de dino para abrir chatbot */}
      <button
        onClick={() => setShowChatBot(!showChatBot)}
        className="fixed bottom-6 right-6 z-50"
        title="click me!"
      >
        <img
          src={dino}
          alt="Chatbot Dino"
          className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform"
        />
      </button>

      {/* Chatbot visible solo si showChatBot está activo */}
      {showChatBot && <ChatBotBox onSkip={handleSkip} />}

      {/* Confetti: para funcionar necesita width i height de la ventana */}
      {showConfetti && <Confetti width={width} height={height} />}
    </section>
  );
}