//Dino chatBot component
export default function ChatBotBox({ onSkip }) {
  return (
    <div className="fixed bottom-24 right-6 bg-[var(--sunDark)] text-[var(--darkSun)] p-4 rounded-xl shadow-lg w-72 z-40">
      <p className="text-sm mb-2">
        👋 Para descargar el currículum, puedes rellenar el formulario o hacer clic en "Omitir" para acceder al botón de descarga de la sección Contacto.
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
