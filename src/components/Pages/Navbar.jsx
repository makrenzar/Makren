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

        <a href="/">
          <img
            src={icon}
            alt="logo"
            className="h-20 md:h-22 wow animate__animated animate__fadeInLeft"
          />
        </a>

  
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
        
        <button onClick={openResume} className="bg-slate-800 no-underline hidden md:inline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white  ease-in duration-200 wow animate__animated animate__fadeInRight">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
      Resume
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
















      </nav>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#DFDFDF] border-t shadow-top">
        <div className="flex justify-around py-2">

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
        
              <box-icon name={tab.icon} size="sm" color="#434343"></box-icon>
              <span className="text-xs text-[#434343]">{tab.name.replace('#', '.')}</span>
            </a>
          ))}

 
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
