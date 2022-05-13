import About from './about';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';

const Sections = () => {
  return (
    <div className="h-screen w-screen">
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Sections;
