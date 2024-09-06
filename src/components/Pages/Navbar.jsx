import React, { useState, useEffect } from "react";
import icon from "../../assets/icon.png";
import resume from "../../assets/MARK_LAWRENCE_ZARAGOZA_RESUME.pdf";
import "boxicons";

function Navbar() {
  const [showArrow, setShowArrow] = useState(false);

  const Tabs = [
    { id: "projects", icon: "cog", name: "#projects" },
    { id: "experience", icon: "briefcase", name: "#experience" },
    { id: "reach", icon: "envelope", name: "#reach me out" },
  ];

  const openResume = () => {
    window.open(resume);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show or hide arrow up button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/">
          <img
            src={icon}
            alt="logo"
            className="h-20 md:h-22 wow animate__animated animate__fadeInLeft"
          />
        </a>

        {/* NAVIGATION FOR LARGE SCREEN */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-10 wow animate__animated animate__fadeInUp">
          {Tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="text-md font-bold hover:scale-110 ease-in duration-300"
            >
              {tab.name}
            </a>
          ))}
        </div>

        {/* Resume Button for Large Screens */}
        <button
          onClick={openResume}
          className="text-sm font-bold border border-black hidden md:inline hover:bg-[#434343] hover:text-white rounded-md px-4 py-1 hover:scale-105 ease-in duration-200 wow animate__animated animate__fadeInRight"
        >
          Resume
        </button>
      </nav>

      {/* Navigation Icons for Mobile Screen at the Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#DFDFDF] border-t shadow-top">
        <div className="flex justify-around py-2">
          {/* Home Icon */}
          <a
            href="/"
            className="flex flex-col items-center text-center hover:scale-125 ease-in duration-200"
            aria-label="Home"
          >
            <box-icon name="home-alt" size="sm" color="#434343"></box-icon>
            <span className="text-xs text-[#3E3E3E]">.home</span>
          </a>

          {Tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="flex flex-col items-center text-center hover:scale-125 ease-in duration-200"
            >
              {/* ICONS */}
              <box-icon name={tab.icon} size="sm" color="#434343"></box-icon>
              <span className="text-xs text-[#434343]">{tab.name.replace('#', '.')}</span>
            </a>
          ))}

          {/* Resume Icon for Mobile Screen */}
          <a
            onClick={openResume}
            className="flex flex-col items-center text-center hover:scale-125 ease-in duration-200"
            aria-label="Resume"
          >
            <box-icon name="file" size="sm" color="#434343"></box-icon>
            <span className="text-xs text-[#3E3E3E]">.resume</span>
          </a>
        </div>
      </div>

      {/* Arrow Up Button */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="scroll-up hidden md:block fixed bottom-5 right-20"
          aria-label="Scroll to top"
        >
          <box-icon name="chevron-up" size="lg" color="#434343"></box-icon>
        </button>
      )}
    </>
  );
}

export default Navbar;
