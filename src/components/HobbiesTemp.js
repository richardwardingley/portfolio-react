import React from 'react';
import './HobbiesTemp.css';
import pianouke from '../img/pianouke.jpeg';

const HobbiesTemp = () => {
    return (
        <div className="eachHobbyBox">
            <img className="hobbyImg" src={pianouke} alt=""/>
            <div className="hobbyName">Piano and Ukulele</div>
            <div className="hobbySkill">Perseverance</div>
            <div className="hobbySkillText">It can sometimes take a while to get things right</div>
        </div>
    )
}

export default HobbiesTemp;