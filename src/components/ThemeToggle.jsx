//TOGGLE LIGHT-DARK THEME
import { useEffect, useState } from 'react';
import { Sun, Moon } from "lucide-react";
import { theme } from '../themes/theme.js'; // importar el objeto de temas

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') === 'dark' || false
  );

  useEffect(() => {
    const html = document.documentElement;
    const currentTheme = isDark ? theme.dark : theme.light;

    // Aplica las variables como propiedades CSS en el <html> o <body>
    for (const key in currentTheme) {
      html.style.setProperty(key, currentTheme[key]);
    }

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
<button
  onClick={() => setIsDark(prev => !prev)}
  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[var(--primary-color)] text-[var(--white)] 
             hover:bg-[var(--background-secondary)] hover:text-[var(--dark-gray)] 
             hover:shadow-[0_0_10px_var(--primary-color)] transition duration-300 ease-in-out"
>
  {isDark ? <Sun size={20} /> : <Moon size={20} />}
</button>
  );
};

export default ThemeToggle;