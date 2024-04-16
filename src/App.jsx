import "./App.css";
import Navbar from "./components/Pages/Navbar";
import HeroSection from "./components/Pages/HeroSerction";
import Projects from "./components/Pages/Projects";
import Experience from "./components/Pages/Experience";
import Footer from "./components/Pages/Footer";

function App() {
  return (
    <>
      <div className="main-h-screen  overflow-hidden ">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar></Navbar>
          <HeroSection></HeroSection>
          <Projects></Projects>
          <Experience></Experience>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
