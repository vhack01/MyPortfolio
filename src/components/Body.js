import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Footer from "./Footer";
import Header from "./Header";
import Project from "./Project";
import Skill from "./Skill";

const Body = () => {
  return (
    <div>
      <Header />
      <About />
      <Skill />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Body;
