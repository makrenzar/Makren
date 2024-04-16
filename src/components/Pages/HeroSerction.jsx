function HeroSection() {
  const SkillsIcon = [
    {
      id: "html",
      src: "https://skillicons.dev/icons?i=html",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 lg:w-12 lg:h-12 animate-fade-up animate-ease-in",
    },
    {
      id: "css",
      src: "https://skillicons.dev/icons?i=css",
    },
    {
      id: "js",
      src: "https://skillicons.dev/icons?i=js",
    },
    {
      id: "react",
      src: "https://skillicons.dev/icons?i=react",
    },
    {
      id: "tailwind",
      src: "https://skillicons.dev/icons?i=tailwind",
    },
    {
      id: "bootstrap",
      src: "https://skillicons.dev/icons?i=bootstrap",
    },
    {
      id: "figma",
      src: "https://skillicons.dev/icons?i=figma",
    },
  ];

  return (
    <>
      <div className="mt-20 lg:mt-60 grid grid-flow-cols justify-center items-center gap-y-4">
        <p className="text-foreground scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl py-6">
          Mark Lawrence Zaragoza
        </p>
        <p className="text-foreground scroll-m-20 text-2xl font-normal tracking-tight bg-white text-black w-64 rotate-[-2deg] underline underline-offset-4">
          Frontend Developer
        </p>
        <p className="text-foreground font-thin mt-6">
          Specializing in frontend development and eager to apply my skills in
          startups to create engaging websites
        </p>
      </div>
      <div className=" items-center justify-center mt-52 grid grid-cols-4  lg:flex gap-8 lg:gap-24">
        <span className="text-sm lg:text-sm  font-semibold  rounded-sm cursor-pointer hover:rotate-0 hover:scale-125 ease-in duration-200 rotate-[-3deg] underline-offset-4 bg-white text-black w-[3.5rem] animate-fade animate-delay-[2200ms] animate-ease-in">
          Skills
        </span>
        {SkillsIcon.map((icon) => (
          <span key={icon.id}>
            <img
              src={icon.src}
              className="hover:scale-125 ease-in duration-200  cursor-pointer w-10 h-10 lg:w-12 lg:h-12 animate-fade-up animate-ease-in"
            />
          </span>
        ))}
      </div>
      <a href="#projects">
        <div className="scroll-down"></div>
      </a>
    </>
  );
}

export default HeroSection;
