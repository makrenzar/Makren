import React from 'react';

function Navbar() {

    const Tabs = [

        {
            id: "skills",
            name: "skills",
        },
        {
            id: "works",
            name: "works",
        },

        {
            id: "experience",
            name: "experience",
        },
        {
            id: "contact",
            name: "contact",
        },
    ];

    const openResume = () => {
        window.open('src/assets/resume.pdf', '_blank');
    };

    return (
        <>
            <nav className="container flex items-center justify-between md:py-4">
                <a href="#"><img src="src/assets/icon.png" alt="logo" className="h-20" /></a>
                <ul className="flex space-x-4">
                    {Tabs.map(tab => (
                        <li key={tab.id}>
                            #<a href={`#${tab.id}`} className=" text-sm">{tab.name}</a>
                        </li>
                    ))}

                </ul>

                <button onClick={openResume} className="text-sm border border-white  rounded-md w-24 h-9">Resume</button>


            </nav >
        </>
    )
}

export default Navbar;
