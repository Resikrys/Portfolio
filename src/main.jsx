import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //l'import està en app.css!! Aquest es podria esborrar?
import App from './App.jsx'
//Añadir react-router + rutas para crear landing page + secciones (pages)
//PAGES: Header (title + menú) / About me (round carrousell pics + descripciones modal o popover) / EXP (Future, Present, Past -> 3 filas con tarjetas con flip effect) /
// Dev Skills (Dashboard con gráficos de barras o quesitos + conocimiento tecnologías -> bento grid) /  PROJECTS (Finished /ongoing...) /
// Education (acordeon desplegable -> descripcion job) / Also interested in... () / Footer-Contacto (links a github i linkedin + info contacto; email, telf, xarxes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
