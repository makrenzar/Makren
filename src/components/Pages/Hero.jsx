import { ClassNames } from "@emotion/react";

function Hero() {
  const SkillsIcon = [
    {
      id: "html",
      src: "https://skillicons.dev/icons?i=html",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 lg:w-12 lg:h-12 wow animate__animated animate__fadeInUp",
      "data-wow-duration": "1s",
    },
    {
      id: "css",
      src: "https://skillicons.dev/icons?i=css",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 lg:w-12 lg:h-12 wow animate__animated animate__fadeInUp",
      "data-wow-duration": "1.5s",
    },
    {
      id: "js",
      src: "https://skillicons.dev/icons?i=js",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 lg:w-12 lg:h-12 wow animate__animated animate__fadeInUp",
      "data-wow-duration": "2s",
    },
    {
      id: "react",
      src: "https://skillicons.dev/icons?i=react",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 lg:w-12 lg:h-12 wow animate__animated animate__fadeInUp",
      "data-wow-duration": "2.5s",
    },
    {
      id: "tailwind",
      src: "https://skillicons.dev/icons?i=tailwind",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 lg:w-12 lg:h-12 wow animate__animated animate__fadeInUp",
      "data-wow-duration": "3s",
    },
    {
      id: "bootstrap",
      src: "https://skillicons.dev/icons?i=bootstrap",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 lg:w-12 lg:h-12 wow animate__animated animate__fadeInUp",
      "data-wow-duration": "3.5s",
    },
    {
      id: "figma",
      src: "https://skillicons.dev/icons?i=figma",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 lg:w-12 lg:h-12 wow animate__animated animate__fadeInUp",
      "data-wow-duration": "4s",
    },
  ];

  return (
    <>
      <div
        className="mt-20 lg:mt-60 grid grid-flow-cols justify-center items-center gap-y-4 wow animate__animated animate__fadeIn"
        data-wow-duration="3s"
      >
        <p className="text-foreground scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl py-6">
          Mark Lawrence Zaragoza
        </p>
        <p className="text-foreground scroll-m-20 text-2xl font-normal tracking-tight bg-white text-black w-64 cursor-pointer hover:rotate-0 hover:scale-105 ease-in duration-200 rotate-[-3deg] underline underline-offset-4">
          Frontend Developer
        </p>
        <p className="text-foreground font-thin mt-6">
          Specializing in frontend development and eager to apply my skills in
          startups to create engaging websites
        </p>
      </div>
      <div className=" items-center justify-center mt-52 grid grid-cols-4  lg:flex gap-8 lg:gap-24">
        <span className="text-sm lg:text-sm  font-semibold   cursor-pointer hover:rotate-0 hover:scale-125 ease-in duration-200 rotate-[-3deg] underline-offset-4 bg-white text-black w-[3.5rem] wow animate__animated animate__fadeIn"
            data-wow-delay="3s">
          Skills
        </span>
        {SkillsIcon.map((icon) => (
          <span key={icon.id}>
            <img
              src={icon.src}
              className={icon.className}
              data-wow-duration={icon["data-wow-duration"]}
            />
          </span>
        ))}
      </div>
      <a href="#projects">
        <div className="scroll-down lg:block sm:hidden"></div>
      </a>
    </>
  );
}

export default Hero;
