//New mobile tootltip - flipcard component
import React, { useState } from 'react';
import { RefreshCcw } from 'lucide-react';

export default function ExperienceCard({ frontTitle, frontPlace, backDescription, isMobile }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const handleCardClick = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
      setShowTooltip(false);
    }
  };

  return (
    <div
      className="relative w-64 h-40 perspective"
      onClick={handleCardClick}
    >
      {/* Tooltip solo en mobile */}
      {isMobile && showTooltip && (
        <div className="absolute top-1 right-1 z-20 bg-[var(--fuchsia-color)] text-white text-xs px-2 py-1 rounded shadow flex items-center gap-1 animate-bounce">
          <RefreshCcw size={14} />
          Click me!
        </div>
      )}

      {/* Contenedor rotador: hover solo en desktop */}
      <div
        className={`
          relative w-full h-full transition-transform duration-700 transform-style-preserve-3d 
          ${isMobile ? (isFlipped ? 'rotate-y-180' : '') : 'hover:rotate-y-180'}
        `}
      >
        {/* Cara frontal */}
        <div className="absolute w-full h-full bg-black text-white rounded-xl shadow-lg flex flex-col items-center justify-center backface-hidden">
          <div className="custom-border-box p-2">
            <div className="right-corner" />
            <div className="left-corner" />
            <h3 className="text-lg font-bold">{frontTitle}</h3>
            <p className="text-sm text-[var(--light-gray)]">{frontPlace}</p>
          </div>
        </div>

        {/* Cara trasera */}
        <div className="absolute w-full h-full bg-black text-white rounded-xl shadow-lg flex items-center justify-center rotate-y-180 backface-hidden p-4 text-sm">
          <div className="custom-border-box">
            <div className="right-corner" />
            <div className="left-corner" />
            <p>{backDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
