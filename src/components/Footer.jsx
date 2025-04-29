import dino from "../images/dino.jpeg";

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-light-gray py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo + Nombre */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          {/* <div className="text-4xl animate-bounce">🦖</div> Icono Dinosaurio */}
          <div className="text-4xl animate-bounce"><img
                     src={dino}
                    alt="Chatbot Dino"
                    className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform">
                    </img>
          </div> {/* Icono Dinosaurio */}
          <div className="text-lg font-semibold mt-2">ResikrysDev</div>
        </div>

        {/* Redes Sociales */}
        <div className="flex gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin fa-lg"></i> {/* LinkedIn */}
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <i className="fab fa-github fa-lg"></i> {/* GitHub */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <i className="fab fa-instagram fa-lg"></i> {/* Instagram */}
          </a>
        </div>

      </div>
    </footer>
  );
}


//First atempt
{/* <footer className="bg-grayDark text-white py-4 flex justify-center gap-4">
  <a href="https://github.com/tuUsuario" target="_blank" rel="noopener noreferrer">
    <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6 hover:scale-110" />
  </a>
  <a href="https://linkedin.com/in/tuUsuario" target="_blank" rel="noopener noreferrer">
    <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:scale-110" />
  </a>
</footer> */}