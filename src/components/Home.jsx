import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import SelfImage from '../assets/Justin_Park.png'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Hi, I'm Justin!
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Currently, I love to work on backend and 
                    database related technologies. The languages I am
                    most familiar with are Java, Python, and C/C++.
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Projects 
                        <span className='group-hover:rotate-90 duration-100'>
                            <FaCircleArrowRight size={18} className='ml-1'/>
                        </span>
                    </button>
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