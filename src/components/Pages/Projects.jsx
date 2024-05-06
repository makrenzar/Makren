function Projects() {
  const projects = [
    {
      title: "Social Hub Agency",
      description:
        "Landing page for Social Hub Agency, igniting brands' online presence with creativity and precision.",
      link: "https://socialhubagency.vercel.app/",
      technologies: ["react", "tailwind", "css"],
    },

    
  ];
  return (
    <>
      <section className="container mt-[6rem]  py-10 md:py-20" id="projects">
        <div>
          <p
            className="  text-4xl font-extrabold tracking-tight   lg:text-5xl py-6 md:py-8 wow animate__animated animate__fadeIn"
            data-wow-duration="3s"
          >
            Projects
          </p>
          <div className="grid gap-4 md:gap-8 ">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-500 bg-[#31363A] shadow-lg items-center justify-center wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <div className="flex flex-col space-y-1.5 p-6 pb-0">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm  font-light  py-2">
                    {project.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <span className="text-sm font-extralight">Link:</span>
                  <a
                    className="inline-flex items-center justify-center rounded-md text-sm font-extralight  hover:scale-105 ease-in duration-300 h-10 p-0"
                    href={project.link}
                    target="_blank"
                  >
                    &nbsp;
                    {project.link}
                  </a>
                  <div className="bg-gray-500 h-[1px] w-full mt-2"></div>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <div className="flex h-5 flex-row">
                      <p>Technologies Used -</p>
                    </div>
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex h-5 flex-row gap-4">
                        <img
                          src={`https://skillicons.dev/icons?i=${tech}`}
                          alt={tech}
                          className="hover:scale-125 ease-in duration-300 cursor-pointer"
                        />
                        {techIndex < project.technologies.length - 1 && (
                          <div className="bg-gray-500 h-full w-[1px] "></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;


<input data-hs-theme-switch="" class="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-gray-700 focus:ring-gray-700 focus:outline-none appearance-none

before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200

after:absolute after:end-1.5 after:top-[calc(50%-0.40625rem)] after:w-[.8125rem] after:h-[.8125rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:start-1.5 checked:after:end-auto" type="checkbox" id="darkSwitch"></input>