import { useState } from "react";

export default function ChatBotBox({ onSkip }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => setIsVisible(false);

  return (
    isVisible && (
      <div className="fixed bottom-10 right-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
        <p>Para descargar el currículum, rellena el formulario o pulsa "Omitir".</p>
        <div className="flex space-x-2 mt-2">
          <button
            onClick={onSkip}
            className="bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded"
          >
            Omitir
          </button>
          <button
            onClick={handleClose}
            className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded"
          >
            ✖️
          </button>
        </div>
      </div>
    )
  );
}
