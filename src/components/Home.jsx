import React from 'react'
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import SelfImage from '../assets/Justin_Park.png';
import "./Home.css"

const Home = () => {
  const [secondAnimationStart, setSecondAnimationStart] = useState(false);
  return (
    <home>
      <div className="title">
        <h1 className="text-2xl sm:text-4xl font-bold border-b-4 border-gray-500">Hi, my name is Justin!</h1>
      </div>


      <section className="container flex flex-col md:flex-row justify-center mx-auto h-screen">
        <div className="center one flex-1 mb-8 md:mb-0">
          <div className="animation-container">
            <TypeAnimation
              sequence={[
                'I\'m currently a 4th year CS major, with a minor in Applied Mathematics. I love to work on backend and database related technologies. I\'m currently working on learning some more fullstack technologies & frameworks. The languages I am most familiar with are Java, Python, and C++.',
                1000,
                () => setSecondAnimationStart(true),
              ]}
              speed={100}
              repeat={Infinity}
            />

            {secondAnimationStart && (
              <>
                <hr className="animation-separator my-4" />
                <TypeAnimation
                  sequence={[
                    '\nOutside of coursework, I like to involve myself with music at the University of Virginia. I\'m currently a member of the Charlottesville Symphony and UVA Chamber Ensembles, playing the viola. I act as a student representative in the Charlottesville Symphony, and also work as an Undergraduate Teaching Assistant for the CS & Applied Mathematics Departments, assisting with CS 2130: Computer Systems & Organization, and APMA 3120: Statistics.',
                    1000,
                  ]}
                  speed={100}
                  repeat={Infinity}
                />
              </>
            )}
          </div>
        </div>

        <div className="two center">
          <img
            src={SelfImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </section>

    </home>
  );
}
  
export default Home;  