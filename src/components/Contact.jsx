import { useState } from "react";
//import { FaDownload } from "react-icons/fa";
import { FileDown } from "lucide-react";
import Confetti from "react-confetti";
//import ChatBotBox from "./ChatBotBox";
import ChatBotBox from "./Chatbox";

export default function Contact() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDownloadButton(true);
  };

  const handleSkip = () => {
    setShowDownloadButton(true);
  };

  const handleDownloadClick = () => {
    setShowConfetti(true);
    // Aquí podría ir la lógica para descargar el CV, como redirigir a la URL del PDF
    setTimeout(() => setShowConfetti(false), 5000); // Confetti durará 5 segundos
  };

  return (
    <section id="contact" className="py-12 bg-background text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Contacto</h2>

      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg">Nombre o Empresa</label>
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
            <label htmlFor="email" className="block text-lg">Email</label>
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
          <button
            onClick={handleDownloadClick}
            className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded flex items-center justify-center"
          >
            <FileDown className="mr-2" />
            Descargar CV
          </button>
        )}
      </div>

      <ChatBotBox onSkip={handleSkip} />

      {showConfetti && <Confetti />}
    </section>
  );
}
