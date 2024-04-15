import React, { useState } from 'react';

function Navbar() {
    const Tabs = [
        { id: "home", name: "#home" },
        { id: "projects", name: "#projects" },
        { id: "experience", name: "#experience" },
        { id: "contact", name: "#contact" },
    ];

    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const openResume = () => {
        window.open('src/assets/resume.pdf', '_blank');
    };

    return (
        <>
            <nav className="container flex items-center justify-between py-4">
                <a href="#"><img src="src/assets/icon.png" alt="logo" className="h-20  md:h-16" /></a>


                <div className="md:hidden ">
                    <button onClick={toggleNavbar} className="text-black focus:outline-none">
                        <box-icon name={showNavbar ? 'x' : 'menu-alt-right'} color='#ffffff'></box-icon>
                    </button>
                </div>


                <div className="hidden md:flex items-center gap-10">
                    {Tabs.map((tab) => (
                        <a key={tab.id} href={`#${tab.id}`} className="text-sm hover:scale-125 ease-in duration-200">
                            {tab.name}
                        </a>
                    ))}
                </div>


                <button
                    onClick={openResume}
                    className="hidden md:block text-sm border border-white hover:bg-white hover:text-black rounded-md w-24 h-9 hover:scale-105 ease-in duration-200"
                >
                    #resume
                </button>
            </nav>


            <div
                className={`md:hidden absolute top-20 left-0 w-full   rounded-md z-10  ${showNavbar ? 'block' : 'hidden'
                    }`}
            >
                <div className="flex flex-col items-center py-4 gap-4 bg-black top-0">
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