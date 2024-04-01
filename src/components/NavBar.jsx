import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            name: 'Home',
            link: 'home',
            offset: 0
        },
        {
            id: 2,
            name: 'About',
            link: 'about',
            offset: -80
        },
        {
            id: 3,
            name: 'Tech Stack',
            link: 'langtech',
            offset: -150
        },
        {
            id: 4,
            name: 'Experience',
            link: 'experience',
            offset: -20
        },
        {
            id: 5,
            name: 'Projects',
            link: 'projects',
            offset: 0
        },
    ]

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className='text-4xl font-signature ml-2'>Justin Park</h1>
            </div>

            {/* web browser selection view */}
            <ul className='hidden md:flex'>
                {links.map(({id, name, link, offset}) => (
                    <li 
                    key={id} 
                    className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-100'>
                    <Link to={link} smooth duration={500} offset={offset}>{name}</Link>
                    </li>
                ))}
            </ul>

            {/* mobile dropdown view */}
            <div 
            onClick={() => setNav(!nav)} 
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                {links.map(({ id, name }) => (
                    <li 
                        key={id} 
                        className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        {name}
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
};

export default NavBar;
