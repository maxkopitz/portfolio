import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import NavBar from "../components/NavBar";
export default function Home() {
  return (
    <>
      <header>
        <title>maxwell.dev | about</title>
      </header>
      <NavBar />
      <Header />
      <About />
      <Projects />
    </>
  );
}
