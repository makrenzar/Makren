function HeroSection() {
    const SkillIcons = [
        {
            id: 'html',
            src: 'https://skillicons.dev/icons?i=html',
            className: 'hover:scale-125 ease-in duration-300 cursor-pointer',
        },
        {
            id: 'css',
            src: 'https://skillicons.dev/icons?i=css',
            className: 'hover:scale-125 ease-in duration-300 cursor-pointer',
        },
        {
            id: 'js',
            src: 'https://skillicons.dev/icons?i=js',
            className: 'hover:scale-125 ease-in duration-300 cursor-pointer',
        },
        {
            id: 'react',
            src: 'https://skillicons.dev/icons?i=react',
            className: 'hover:scale-125 ease-in duration-300 cursor-pointer',
        },
        {
            id: 'tailwind',
            src: 'https://skillicons.dev/icons?i=tailwind',
            className: 'hover:scale-125 ease-in duration-300 cursor-pointer',
        },
        {
            id: 'bootstrap',
            src: 'https://skillicons.dev/icons?i=bootstrap',
            className: 'hover:scale-125 ease-in duration-300 cursor-pointer',
        },
        {
            id: 'figma',
            src: 'https://skillicons.dev/icons?i=figma',
            className: 'hover:scale-125 ease-in duration-300 cursor-pointer',
        },
    ];

    return (
        <>
            <div className="mt-40 md:mt-80 flex items-center font-bold">
                <p className="text-5xl line typewriter py-2">Mark Lawrence Zaragoza</p>
            </div>
            <div className="flex gap-10 items-center justify-center space-y-48 md:space-y-11 md:flex-row">
                <span className="text-sm md:text-sm">Skills</span>
                <div className=" grid grid-cols-3 md:flex gap-4 justify-center">
                    {SkillIcons.map((icon) => (
                        <span key={icon.id}>
                            <img src={icon.src} className={icon.className} />
                        </span>
                    ))}
                </div>
            </div>
            <div className="scroll-down"></div>
        </>
    );
}

export default HeroSection;