import Header from "./Components/Header";
import Hero from "./Section/Hero";
import About from "./Section/About";
import Skills from "./Section/Skills";
import Projects from "./Section/Projects";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <section id="home" className="pt-15"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </>
  );
}
