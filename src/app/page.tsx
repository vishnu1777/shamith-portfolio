import About from "../../components/About";
import Hero from "../../components/Hero";

import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import Skills from "../../components/Skills";

const skills = [
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
  {
    progress: "50%",
  },
];

export default async function Home() {
  // bg - [rgb(36, 36, 36)];
  return (
    <div className="bg-black   snap-y snap-mandatory mx-auto min-h-screen p-4">
      <Navbar />
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-center">
        <About />
      </section>
      <section className="snap-start">
        <Projects />
      </section>
      <section className="snap-start">
        <Skills skills={skills} />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
