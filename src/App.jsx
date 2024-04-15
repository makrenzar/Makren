import "./App.css";
import HeroSection from "./components/Pages/HeroSerction";
import Navbar from "./components/Pages/Navbar";
import Projects from "./components/Pages/Projects";

function App() {
  return (
    <>
      <div className="main-h-screen  overflow-hidden">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar></Navbar>
          <HeroSection></HeroSection>
          <Projects></Projects>
        </div>
      </div>
    </>
  );
}

export default App;
