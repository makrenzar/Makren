function HeroSection() {
  const SkillIcons = [
    {
      id: "html",
      src: "https://skillicons.dev/icons?i=html",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
    },
    {
      id: "css",
      src: "https://skillicons.dev/icons?i=css",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
    },
    {
      id: "js",
      src: "https://skillicons.dev/icons?i=js",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
    },
    {
      id: "react",
      src: "https://skillicons.dev/icons?i=react",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
    },
    {
      id: "tailwind",
      src: "https://skillicons.dev/icons?i=tailwind",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
    },
    {
      id: "bootstrap",
      src: "https://skillicons.dev/icons?i=bootstrap",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
    },
    {
      id: "figma",
      src: "https://skillicons.dev/icons?i=figma",
      className:
        "hover:scale-125 ease-in duration-200 cursor-pointer w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
    },
  ];

  return (
    <>
      <div className="mt-20 md:mt-60 grid grid-flow-cols justify-center items-center gap-y-4">
        <p className="text-foreground scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl py-6">
          Mark Lawrence Zaragoza
        </p>
        <p className="text-foreground scroll-m-20 text-2xl font-normal tracking-tight">
          Frontend Developer
        </p>
        <p className="text-foreground font-thin mt-6">
          Specializing in frontend development and eager to apply my skills in
          startups to create engaging websites
        </p>
      </div>
      <div className=" items-center justify-center mt-52 grid grid-cols-4  md:flex gap-8 md:gap-24">
        <span className="text-sm md:text-sm  font-semibold  rounded-sm cursor-pointer">
          Skills
        </span>
        {SkillIcons.map((icon) => (
          <span key={icon.id}>
            <img src={icon.src} className={icon.className} />
          </span>
        ))}
      </div>
      <a href="#">
        <div className="scroll-down"></div>
      </a>
    </>
  );
}

export default HeroSection;
