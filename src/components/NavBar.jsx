import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/experience">EXPERIENCE</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">PROJECTS</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;
