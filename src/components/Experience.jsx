import React, { useState, useRef } from 'react';
import cacilogo from '../assets/caci.png';
import uvalogo from '../assets/uvaengineering.png';
import metalogo from '../assets/meta.png';
import './Experience.css';

const experiences = [
    {
        id: 1,
        company: 'Meta',
        position: 'Incoming Software Engineer',
        startDate: '',
        endDate: '',
        description: [
            'Incoming New Grad SWE 2025'
        ],
        logo: metalogo,
        style: 'shadow-white',
    },
    {
        id: 2,
        company: 'UVA Engineering',
        position: 'Undergraduate Teaching Assistant',
        startDate: 'Aug 2023',
        endDate: 'Present',
        description: [
            'Current TA for CS 2130: Computer Systems & Organization and APMA 3120: Statistics',
            'Hosted office hours and answered questions on Piazza regarding fundamentals of computer architecture and probability for around 10 hours per week',
            'Graded student work and exams, providing feedback for areas in need of improvement for over 500 students'
        ],
        logo: uvalogo,
        style: 'shadow-orange-500',
    },
    {
        id: 3,
        company: 'CACI',
        position: 'Software Engineer Intern',
        startDate: 'Dec 2024',
        endDate: 'Present',
        description: [
            'Working on an internal tool to help new developers with unfamiliar terminology',
        ],
        logo: cacilogo,
        style: 'shadow-white',
    },
    {
        id: 4,
        company: 'CACI',
        position: 'Software Engineer Intern',
        startDate: 'May 2024',
        endDate: 'Aug 2024',
        description: [
            'Automated onboarding process via batch scripting, centralizing software used and enhancing developer experience by reducing onboarding time from 1 week to under 20 minutes',
            'Revamped data analytics using Perl scripts to extract user and exception data, formatting over 10,000 lines of csv data at a time through regex into a postgres database',
            'Researched GenAI capabilities and development process within a closed environment, standardizing tools necessary for the development of an internal tool for developers',
        ],
        logo: cacilogo,
        style: 'shadow-white',
    },
    {
        id: 5,
        company: 'CACI',
        position: 'Software Development Intern',
        startDate: 'May 2023',
        endDate: 'Aug 2023',
        description: [
            'Utilized Agile methodology to develop projects in five, two week sprints, with daily stand-ups to discuss progress and current tasks',
            'Created PowerBI dashboard that displays up-to-date data and analytics on projects within the Agile Solution Factory',
            'Aided the creation of a CI/CD pipeline for a community of practice utilizing SAP',
            'Researched potential vendors to facilitate data migration to the cloud for clients.'
        ],
        logo: cacilogo,
        style: 'shadow-white',
    },
];

const Experience = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const contentRefs = useRef([]);

    const toggleAccordion = (id) => {
        setActiveAccordion((prev) => (prev === id ? null : id));
    };

    const getHeight = (id) => {
        const ref = contentRefs.current[id];
        return ref ? `${ref.scrollHeight}px` : '0px';
    };

    return (
        <experience>
            <div className="title">
                <h1 className="text-2xl sm:text-4xl font-bold border-b-4 border-gray-500">Experience</h1>
            </div>

            <div className="content flex flex-col w-full h-screen">
                {experiences.map(({ id, company, position, startDate, endDate, description, logo, style }) => (
                    <div key={id} className={`card ${style} mt-4 mb-4 p-4 rounded shadow-lg`}>
                        <div className="header flex items-center justify-between">
                            <div className="info flex items-center">
                                <img src={logo} alt={`${company} logo`} className="w-20 h-22 mr-4" />
                                <div>
                                    <h2 className="text-xl font-bold">{company}</h2>
                                    <p className="text-sm">{position}</p>
                                    <p className="text-sm">{`${startDate} - ${endDate}`}</p>
                                </div>
                            </div>
                            <button
                                className="toggle-btn text-white px-4 py-2 rounded hover:scale-110 transition-all"
                                onClick={() => toggleAccordion(id)}
                            >
                                {activeAccordion === id ? 'Hide Details' : 'Show Details'}
                            </button>
                        </div>

                        <div
                            className={`accordion-content transition-all overflow-hidden`}
                            style={{
                                height: activeAccordion === id ? getHeight(id) : '0px',
                            }}
                            ref={(el) => (contentRefs.current[id] = el)}
                        >
                            <ul className="list-disc mt-6 pl-6">
                                {description.map((point, index) => (
                                    <li key={index} className="text-lg text-gray-300">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </experience>
    );
};

export default Experience;
