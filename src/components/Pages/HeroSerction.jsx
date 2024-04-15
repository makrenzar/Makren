function HeroSection() {
    const SkillIcons = [
        {
            id: 'html',
            src: 'https://skillicons.dev/icons?i=html',
            className: 'hover:scale-125 ease-in duration-200 cursor-pointer',
        },
        {
            id: 'css',
            src: 'https://skillicons.dev/icons?i=css',
            className: 'hover:scale-125 ease-in duration-200 cursor-pointer',
        },
        {
            id: 'js',
            src: 'https://skillicons.dev/icons?i=js',
            className: 'hover:scale-125 ease-in duration-200 cursor-pointer',
        },
        {
            id: 'react',
            src: 'https://skillicons.dev/icons?i=react',
            className: 'hover:scale-125 ease-in duration-200 cursor-pointer',
        },
        {
            id: 'tailwind',
            src: 'https://skillicons.dev/icons?i=tailwind',
            className: 'hover:scale-125 ease-in duration-200 cursor-pointer',
        },
        {
            id: 'bootstrap',
            src: 'https://skillicons.dev/icons?i=bootstrap',
            className: 'hover:scale-125 ease-in duration-200 cursor-pointer',
        },
        {
            id: 'figma',
            src: 'https://skillicons.dev/icons?i=figma',
            className: 'hover:scale-125 ease-in duration-200 cursor-pointer',
        },
    ];

    return (
        <>
            <div className="mt-20 md:mt-60 grid grid-flow-cols justify-center items-center  gap-y-4 ">
                <p className="text-1xl md:text-4xl font-black">Mark Lawrence <span className="bg-white text-black px-2 rounded-md">Zaragoza</span> </p>
                <p className="text-md md:text-4xl font-normal">Frontend Developer</p>
                <p className="text-sm md:text-2xl font-thin"> Specializing in frontend development</p>
            </div>

        
       
            <div className="flex gap-10 items-center justify-center mt-36 md:flex-row">
                <div className=" grid grid-cols-4 md:flex gap-4">
                <span className="text-[11] md:text-sm bg-white text-black font-semibold h-5 w-16 text-center rounded-sm  cursor-pointer">Skills</span>
                    {SkillIcons.map((icon) => (
                        <span key={icon.id}>
                            <img src={icon.src} className={icon.className} />
                        </span>
                    ))}
                </div>
            </div>
            <a href="#"><div className="scroll-down"></div></a>
        </>
    );
}

export default HeroSection;