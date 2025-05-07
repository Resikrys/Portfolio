//New mockup oculto by default
export default function EnConstruccion({ onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-[var(--background-color)] text-[var(--dark-gray)] p-8 rounded-xl shadow-lg max-w-md text-center">
          <h1 className="text-3xl font-bold mb-4">🚧 En construcción</h1>
          <p className="text-lg mb-6">
            Este proyecto está en desarrollo. Pronto podrás explorarlo desde aquí.
          </p>
          <button
            onClick={() => {
              onClose();
            }}
            className="mt-4 text-sm text-[var(--primary-color)] hover:underline"
          >
            ← Volver a proyectos
          </button>
        </div>
      </div>
    );
  }


//Mockup under construction Page
// export default function EnConstruccion() {
//     return (
// <section id="en-construccion">
//   <div className="h-screen flex items-center justify-center flex-col text-center bg-[var(--background-color)] text-[var(--dark-gray)] p-8">
//     <h1 className="text-4xl font-bold mb-4">🚧 En construcción</h1>
//     <p className="text-lg max-w-xl">Este proyecto está en desarrollo. Pronto podrás explorarlo desde aquí.</p>
//   </div>
// </section>
//     );
//   }