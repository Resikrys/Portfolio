//New mockup oculto by default
export default function EnConstruccion({ onClose }) {
    return (
      <section id="en-construccion" className="h-screen flex items-center justify-center flex-col text-center bg-[var(--background-color)] text-[var(--darkSun)] p-8">
        <h1 className="text-4xl font-bold mb-4">🚧 En construcción</h1>
        <p className="text-lg max-w-xl mb-8">
          Este proyecto está en desarrollo. Pronto podrás explorarlo desde aquí.
        </p>
  
        <button
          onClick={() => {
            onClose();
            document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-4 text-sm text-[var(--primary-color)] hover:underline"
        >
          ← Volver a proyectos
        </button>
      </section>
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