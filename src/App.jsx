import "./App.css";
import Navbar from "./components/Pages/Navbar";
import Hero from "./components/Pages/Hero";
import Projects from "./components/Pages/Projects";
import Experience from "./components/Pages/Experience";
import Footer from "./components/Pages/Footer";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <>
      <div className="main-h-screen  overflow-hidden ">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar></Navbar>
          <Hero></Hero>
          <Projects></Projects>
          <Experience></Experience>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
