import React from 'react'
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import SelfImage from '../assets/wave.gif';
import "./Home.css"

const Home = () => {
  const [secondAnimationStart, setSecondAnimationStart] = useState(false);
  return (
    <home>
      <div className="title">
        <h1 className="text-2xl sm:text-4xl font-bold border-b-4 border-gray-500">Hi, my name is Justin!</h1>
      </div>


      <section className="container flex flex-col md:flex-row justify-center mx-auto h-screen">
        <div className="two center">
          <img
            src={SelfImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="center one flex-1 mb-8 md:mb-0">
          <div className="animation-container">
            <TypeAnimation
              sequence={[
                'I\'m currently a software engineer at Meta, working on the Facebook In-Feed Recommendations team. Most of my work centers around optimizing CPU usage and improving overall efficiency.',
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
                    '\nOutside of work, I enjoy hiking, playing basketball, performing/composing music, and exploring new technologies. I\'m always eager to take on new challenges and expand my skill set!',
                    1000,
                  ]}
                  speed={100}
                  repeat={Infinity}
                />
              </>
            )}
          </div>
        </div>

        
      </section>

    </home>
  );
}
  
export default Home;  