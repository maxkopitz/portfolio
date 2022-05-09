import Header from "../components/header";
import About from "../components/about";
import Projects from "../components/projects";
import NavBar from "../components/navbar";
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
