import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <Link to="/" className="title">
                Justin Park
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/technologies">Tech Stack</NavLink>
                </li>
                <li>
                    <NavLink to="/experience">Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;
