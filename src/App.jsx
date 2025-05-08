import './App.css'
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import DevSkills from "./components/DevSkills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from './components/Contact';
import 'swiper/css'

function App() {
  return (
    <>
    <div id="inicio" className="h-0"></div>
      <Header />
      <main className="scroll-smooth">
        <section id="about"><AboutMe /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><DevSkills /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
        <section id="projects"><Projects /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
