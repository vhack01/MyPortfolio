import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Particles from "./Particles";
import Project from "./Project";
import Skill from "./Skill";

const Body = () => {
  return (
    <div className="relative bg-dark-900 min-h-screen">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      {/* Floating particles */}
      <Particles />
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <About />
        <Experience />
        <Skill />
        <Education />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Body;
