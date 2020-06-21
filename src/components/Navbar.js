import React from 'react';
import './Navbar.css';
import {FaLinkedin} from 'react-icons/fa';
import {BsEnvelopeFill} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';



const Navbar = () => {
    return (
        <nav>
            <a href="#home">Home</a>
            <a href="#aboutMe">About me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <div id="navIconsDiv">
            <BsEnvelopeFill className="navIcons"/>
            <FaLinkedin className="navIcons"/>
            <FaGithub className="navIcons"/>
            </div>
        </nav>
    )
}

export default Navbar;