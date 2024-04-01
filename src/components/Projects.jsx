import React from 'react';
import games from "../assets/Games.png";
import website from "../assets/website.png"

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: games,
            codeLink: 'https://github.com/jpark0504/Games',
            demoLink: ''
        },
        {
            id: 2,
            src: website,
            codeLink: 'https://github.com/jpark0504/jpark0504.github.io ',
            demoLink: ''
        }
        // Add more project objects with their respective image source, code link, and demo link
    ];

    return (
        <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Check out my past projects right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {projects.map(({ id, src, codeLink, demoLink }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                {codeLink && (
                                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                    </a>
                                )}
                                {demoLink && (
                                    <a href={demoLink} target="_blank" rel="noopener noreferrer">
                                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
