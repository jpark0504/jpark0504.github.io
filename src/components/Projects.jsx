import React from 'react';
import games from "../assets/Games.png";
import website from "../assets/website.png"
import aiproject from "../assets/aiproject.png";
import mlproject from "../assets/mlproject.png";
import honorsite from "../assets/HonorWebsite.png";
import hoossick from "../assets/hoossick.png";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: aiproject,
            codeLink: 'https://github.com/jpark0504/AI-Final-Project',
            demoLink: ''
        },
        {
            id: 2,
            src: mlproject,
            codeLink: 'https://github.com/jpark0504/ML4VA',
            demoLink: ''
        },
        {
            id: 3,
            src: honorsite,
            codeLink: 'https://github.com/jpark0504/HonorWebsite',
            demoLink: ''
        },
        {
            id: 4,
            src: games,
            codeLink: 'https://github.com/jpark0504/Games',
            demoLink: ''
        },
        {
            id: 5,
            src: website,
            codeLink: 'https://github.com/jpark0504/jpark0504.github.io ',
            demoLink: ''
        },
        {
            id: 6,
            src: hoossick,
            codeLink: 'https://github.com/MatthewELucio/ContactTracingAppHooHacks',

        }
        // Add more project objects with their respective image source, code link, and demo link
    ];

    return (
        <projects>
            <div className="title">
                <h1 className="text-2xl sm:text-4xl font-bold border-b-4 border-gray-500">Projects</h1>
            </div>


            <div className='content max-w-screen-lg p-4 mt-8 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='mb-8'>
                    <p className='py-6 text-center'>Here are some of my past projects</p>
                </div>
                 <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                     {projects.map(({ id, src, codeLink, demoLink }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 w-full h-60 object-cover'/>
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

        </projects>
    );
};

export default Projects;
