import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col justify-center items-center'>
      <div className='max-w-screen-lg p-4 mx-auto'>
        <div className='mb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About Me
          </p>
        </div>

        <p className='text-xl'>
          I'm currently a 3rd year Computer Science major, with a minor in Applied Mathematics.
          I love to work on backend and database related technologies. 
          I'm currently working on learning some more frontend based languages & frameworks.
          The languages I am most familiar with are Java, Python, and C/C++.
        </p>
        <br />

        <p className='text-xl'>
          Outside of coursework, I like to involve myself with music at the University of Virginia.
          I'm currently a member of the <a href='https://cvillesymphony.org/' className='inline border-b-2 hover:scale-105 duration-100'>Charlottesville Symphony</a> and UVA Chamber Ensembles, playing the viola.
          I act as a student representative in the Charlottesville Symphony, and I also work as an Undergraduate 
          Teaching Assistant for the CS Department and Applied Mathematics Department, assisting with CS 2130: Computer 
          Systems and Organization, and APMA 3100: Probability.
        </p>
      </div>
    </div>
  );
}

export default About;
