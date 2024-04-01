import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import SelfImage from '../assets/Justin_Park.png';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-2xl sm:text-4xl font-bold text-white'>
                <TypeAnimation
                sequence={[
                    'Hi, my name is Justin!',
                    1000,
                ]}
                speed={40}
                repeat={Infinity}
                />
                </h2>
                <p className='text-gray-500 pr-5 py-5 max-w-md'>
                    This is my personal website, feel free to scroll through to 
                    see my background!
                </p>

                <div>
                    <Link to="experience" smooth duration={500} offset={-20} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Experience 
                        <span className='group-hover:rotate-90 duration-100'>
                            <FaCircleArrowRight size={18} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={SelfImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'></img>
            </div>
        </div>
    </div>
  )
}

export default Home