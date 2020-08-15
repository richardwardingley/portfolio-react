import React from 'react';
import './AboutMe.css';
import Hobbies from './Hobbies';

const AboutMe = () => {
    return (
        <div id="aboutMeDiv">
            <div id="aboutMeTitle">About me</div>
            <div id="aboutText">
                I am an entry level software developer looking for opportunities in or around the Manchester area.<br/>
                I enjoy varied work and I am adaptable when approaching tasks.<br/>
                I have a science educational background having completed BSc Biochemistry and MSc Bionanotechnology. These have given me a systematic and analytical approach to problem solving.<br/>
                I also have an interest in cyber security, especially penetration testing and digital forensics.
            </div>
            <div id="hobbiesContainer">
                <Hobbies/>
            </div>
        </div>
    )
}

export default AboutMe;