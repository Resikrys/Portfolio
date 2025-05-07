// src/components/SkewedTitle.jsx

export default function SkewedTitle({ children }) {
    return (
      <div className="relative inline-block mx-auto skewed-title">
        {/* Fondo desplazado (efecto 3D) */}
        <span className="block absolute inset-0 bg-none border-2 border-[var(--primary-color)] skew-x-[-6deg] translate-x-2 translate-y-2 z-0 rounded" />
        
        {/* Título principal */}
        <h2 className="relative z-10 px-6 py-3 text-3xl font-bold text-[var(--primary-color)] bg-[var(--rosado-color)] border-r-4 border-b-4 border-[var(--rose-color)] skew-x-[-6deg] rounded text-center">
  {children}
</h2>
      </div>
    );
  }
  