import React from 'react';
import './AboutMe.css';
import Hobbies from './Hobbies';

const AboutMe = () => {
    return (
        <div>
            <h1>About me</h1>
            <div>
                Manchester based
                What I enjoy doing in work and how I approach it
                Education – Undergrad, Masters, Say how they will help me in my job – systematic approach
            </div>
            <Hobbies/>
        </div>
    )
}

export default AboutMe;