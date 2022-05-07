import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";

export default function Home() {
  return (
    <>
      <header>
        <title>maxwell.dev | about</title>
      </header>
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
