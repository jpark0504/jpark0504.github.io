import React, { useState } from 'react';
import cacilogo from '../assets/caci.png';
import uvalogo from '../assets/uvaengineering.png';

const experiences = [
    {
        id: 1,
        company: 'UVA Engineering',
        position: 'Undergraduate Teaching Assistant',
        startDate: 'Aug 2023',
        endDate: 'Present',
        description: ['Work as a UTA for both the Computer Science and Applied Mathematics Departments', 'Assist stu'],
        logo: uvalogo,
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        company: 'CACI',
        position: 'Software Development Intern',
        startDate: 'May 2023',
        endDate: 'Aug 2023',
        description: [
            'Utilized Agile methodology to develop projects in five, two week sprints',
            'Created a PowerBI dashboard that displays up-to-date data and analytics on projects within the Agile Solution Factory',
            'Aided in the creation of a CI/CD pipeline for a community of practice utilizing SAP',
            'Researched into potential vendors to facilitate data migration to the cloud for clients.',
        ],
        logo: cacilogo,
        style: 'shadow-white'
    }
];

const Experience = () => {
    const [descriptionVisibility, setDescriptionVisibility] = useState({});

    const toggleDescriptionVisibility = (id) => {
        setDescriptionVisibility(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div name='experience' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Experience
                    </p>
                </div>

                {experiences.map(({ id, company, position, startDate, endDate, description, logo, style }) => (
                    <div key={id} className="mb-8">
                        <div className={`card shadow-md ${style}`}>
                            <div className="card-header p-4">
                                <h2 className="text-2xl font-semibold">{company}</h2>
                            </div>
                            <div className="card-body text-white p-4">
                                <div className="flex items-center mb-4">
                                    <img src={logo} alt="" className="w-20 h-20 mr-4" />
                                    <div>
                                        <p className="text-lg">{position}</p>
                                        <p className="text-sm">{`${startDate} - ${endDate}`}</p>
                                    </div>
                                </div>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => toggleDescriptionVisibility(id)}
                                >
                                    {descriptionVisibility[id] ? 'Hide Description' : 'Show Description'}
                                </button>
                                <div className={`accordion mt-4 ${descriptionVisibility[id] ? 'show' : ''}`} style={{
                                    maxHeight: descriptionVisibility[id] ? '1000px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.75s ease-in-out 0s'
                                }}>
                                    <ul className="list-disc pl-5">
                                        {description.map((point, index) => (
                                            <li key={index} className="text-lg">{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className='text-2xl mb-10'></p>
        </div>
    );
};

export default Experience;
