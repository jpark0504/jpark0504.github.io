import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact-container">
                <span className="contact-label"></span>
                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/justin-j-park4/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="mailto:justinpark04@gmail.com" className="contact-link">
                        <HiOutlineMail size={30} />
                    </a>
                    <a href="https://github.com/jpark0504" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaGithub size={30} />
                    </a>
                    <a href="/Justin_Park_Resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <BsFillPersonLinesFill size={30}/>
                    </a>
                </div>
            </div>
    </footer>
    );
};

export default Footer;