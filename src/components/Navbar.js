import React from 'react';
import './Navbar.css';
import {FaLinkedin} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';
import {BsEnvelopeFill} from 'react-icons/bs';
import {BsEnvelope} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {FaGithubSquare} from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav>
            <a href="#home">Home</a>
            <a href="#aboutMe">About me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <div id="navIcons">
            <FaRegEnvelope/>
            <BsEnvelope/>
            <BsEnvelopeFill/>
            <FaLinkedin/>
            <AiOutlineLinkedin/>
            <FaGithub/>
            <FaGithubSquare/>
            </div>
        </nav>
    )
}

export default Navbar;