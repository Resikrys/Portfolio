//New light-dark trial -> desde app.jsx(theme)
import { useEffect, useState } from 'react';
import { Sun, Moon } from "lucide-react";
import { theme } from '../App'; // importar el objeto de temas

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


//First trial light-dark -> not working pero logica esta be
/*
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') === 'dark' || false
  );

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="px-4 py-2 rounded-xl border border-[theme(--primary-color)] text-[theme(--white)] hover:bg-[theme(--primary-color)] hover:text-[theme(--gray-dark)] transition"
    >
      {isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  );
};

export default ThemeToggle;
*/