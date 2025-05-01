//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import DevSkills from "./components/DevSkills";
import Education from "./components/Education";
import AlsoInterested from "./components/AlsoInterested";
import Footer from "./components/Footer";
import Contact from './components/Contact';
//import ChatBotBox from './components/Chatbox';
//import ThemeToggle from './components/ThemeToggle';
import 'swiper/css'

export const theme = {
  light: {
    // '--background-color': '#f8f8f8',
    // '--primary-color': '#FFFF29',
    // '--fuchsia-color': '#FF00FF',
    // '--rose-color': '#FFC0CB',
    // '--gray-dark': '#4A4A4A',
    // '--light-gray': '#BABABA',
    // '--white': '#000000',
    '--background-color': '#813398', //lila fondo
    '--background-secondary': '#FF00FF', //fuchsia -> L/D
    '--primary-color': '#FFFF29', //amarillo limón -> L/D
    '--violet-color': '#ac00e6', //amarillo limón -> L/D
    '--rosado-color': '#e600ac', //amarillo limón -> L/D
    '--fuchsia-color': '#FF00FF', //fuchsia -> L/D -> f6339a (pink-500)
    '--rose-color': '#FFC0CB', //pink -> L/D
    '--gray-dark': '#4A4A4A', // gray-dark -> text-secondary
    '--light-gray': '#BABABA', // light-gray -> text-terciary 
    '--white': '#000000', //white -> text-primary
    '--sunDark': '#FFFFFF', //white -> text-primary
    '--darkSun': '#000000', //black -> text-primary
  },
  dark: {
    // '--background-color': '#6A0DAD',
    // '--primary-color': '#FFFF29',
    // '--fuchsia-color': '#FF00FF',
    // '--rose-color': '#FFC0CB',
    // '--gray-dark': '#4A4A4A',
    // '--light-gray': '#BABABA',
    // '--white': '#FFFFFF',
    '--background-color': '#4A4A4A', //grey-dark fondo
    '--background-secondary': '#BABABA', //bg-gris-mid
    '--primary-color': '#FFFF29',
    '--violet-color': '#ac00e6', //amarillo limón -> L/D
    '--rosado-color': '#e600ac', //amarillo limón -> L/D
    '--fuchsia-color': '#FF00FF',
    '--rose-color': '#FFC0CB',
    '--gray-dark': '#4A4A4A',
    '--light-gray': '#BABABA',
    '--white': '#FFFFFF',
    '--sunDark': '#000000', //black -> text-primary
    '--darkSun': '#ffffff', //white -> text-primary
  },
};

function App() {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <section id="about"><AboutMe /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><DevSkills /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
        <section id="interests"><AlsoInterested /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;

/*
function App() {

  return (
    <>
    <div className ="bg-purple-600" >
    <h1 className="text-3xl font-bold underline text-mint-500">
    Hello world!
    </h1>
  </div>
  </>
  )
}
  */

// import React from 'react';
// import {Routes, Route} from "react-router-dom";
// import Home from './components/Home';
// import PatientTable from './components/PatientTable';
// import CreatePatient from './components/CreatePatient';
// import ModifyPatient from './components/ModifyPatient';
// import Menu from './components/Menu';
// import Footer from './components/Footer';
// import './index.css';

// const App = () => {
//   return (
//       <div className='box-container'>
//         <Menu />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/tabla" element={<PatientTable />} />
//           <Route path="/crear" element={<CreatePatient />} />
//           <Route path="/modify/:dni" element={<ModifyPatient />} />
//         </Routes>
//         <Footer />
//       </div>
//   );
// };

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
  */

//export default App
