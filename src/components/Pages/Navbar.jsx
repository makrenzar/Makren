import React, { useState } from "react";
import icon from "../../assets/icon.png";
import resume from "../../assets/MARKLAWRENCEZARAGOZARESUME.pdf";

function Navbar() {
  const Tabs = [
    { id: "home", name: "#home" },
    { id: "projects", name: "#projects" },
    { id: "experience", name: "#experience" },
    { id: "reach", name: "#reach me out" },
  ];

  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const openResume = () => {
    window.open(resume);
  };

  return (
    <>
      <nav className="container flex items-center justify-between py-4 ">
        <a href="/">
          <img
            src={icon}
            alt="logo"
            className="h-20  md:h-16 wow animate__animated animate__fadeInLeft"
          />
        </a>

        <div className="md:hidden ">
          <button
            onClick={toggleNavbar}
            className=" focus:outline-none  wow animate__animated animate__fadeInRight"
          >
            <box-icon
              name={showNavbar ? "x" : "menu-alt-right"}
              color="#ffffff"
           
            ></box-icon>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-10 wow animate__animated animate__fadeInUp">
          {Tabs.map((tab) => (
           
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="text-sm hover:scale-125 ease-in duration-200"
              >
                {tab.name}
              </a>
       
          ))}
        </div>

        <button
          onClick={openResume}
          className="hidden md:block text-sm border border-white hover:bg-white hover:text-black rounded-md w-24 h-9 hover:scale-105 ease-in duration-200 animate-fade-left animate-ease-in"
        >
          #resume
        </button>

        
      </nav>

      <div
        className={`md:hidden absolute top-20 left-0 w-full   rounded-md z-10  ${
          showNavbar ? "block" : "hidden"
}`}
      >
        <div className="flex flex-col items-center py-4 gap-4 bg-[#272b2e] shadow-2xl rounded-lg top-0">
          {Tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="text-sm"
              onClick={toggleNavbar}
            >
              {tab.name}
            </a>
          ))}
          <button
            onClick={() => {
              openResume();
              toggleNavbar();
            }}
            className="text-sm w-24 h-9"
          >
            #resume
          </button>
          
        </div>
      </div>

      
    </>
  );
}

export default Navbar;
