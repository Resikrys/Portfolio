//Second try
export default function ChatBotBox({ onSkip }) {
  return (
    <div className="fixed bottom-24 right-6 bg-white text-black p-4 rounded-xl shadow-lg w-72 z-40">
      <p className="text-sm mb-2">
        👋 Para descargar el currículum, puedes rellenar el formulario o hacer clic en "Omitir".
      </p>
      <button
        onClick={onSkip}
        className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
      >
        Omitir
      </button>
    </div>
  );
}


//First try
// import { useState } from "react";

// export default function ChatBotBox({ onSkip }) {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleClose = () => setIsVisible(false);

//   return (
//     isVisible && (
//       <div className="fixed bottom-10 right-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
//         <p>Para descargar el currículum, rellena el formulario o pulsa "Omitir".</p>
//         <div className="flex space-x-2 mt-2">
//           <button
//             onClick={onSkip}
//             className="bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded"
//           >
//             Omitir
//           </button>
//           <button
//             onClick={handleClose}
//             className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded"
//           >
//             ✖️
//           </button>
//         </div>
//       </div>
//     )
//   );
// }
