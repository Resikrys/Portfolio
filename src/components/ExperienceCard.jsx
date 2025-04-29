//Light-darK
import React from 'react';

export default function ExperienceCard({ frontTitle, frontPlace, backDescription }) {
  return (
    <div className="w-64 h-40 perspective">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
        {/* Frente */}
        <div className="absolute w-full h-full bg-[theme(--white)] text-[theme(--dark-gray)] rounded-xl shadow-lg flex flex-col items-center justify-center backface-hidden">
          <h3 className="text-lg font-bold">{frontTitle}</h3>
          <p className="text-sm">{frontPlace}</p>
        </div>

        {/* Reverso */}
        <div className="absolute w-full h-full bg-[theme(--violet)] text-[theme(--white)] rounded-xl shadow-lg flex items-center justify-center rotate-y-180 backface-hidden p-4 text-sm">
          <p>{backDescription}</p>
        </div>
      </div>
    </div>
  );
}


// src/components/ExperienceCard.jsx
// import React from 'react';

// export default function ExperienceCard({ frontTitle, frontPlace, backDescription }) {
//   return (
//     <div className="w-64 h-40 perspective">
//       <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
//         {/* Frente */}
//         <div className="absolute w-full h-full bg-white text-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center backface-hidden">
//           <h3 className="text-lg font-bold">{frontTitle}</h3>
//           <p className="text-sm">{frontPlace}</p>
//         </div>

//         {/* Reverso */}
//         <div className="absolute w-full h-full bg-violet-700 text-white rounded-xl shadow-lg flex items-center justify-center rotate-y-180 backface-hidden p-4 text-sm">
//           <p>{backDescription}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
