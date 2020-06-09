import React from 'react';
import './Hobbies.css';

const Hobbies = (props) => {
    return (
        <div>
            <img className="hobbyImg" src={props.photo} alt=""/>
            <div className="hobbyName">{props.name}</div>
            <div className="hobbySkill">{props.skill}</div>
            <div className="hobbySkillText">{props.skillText}</div>
        </div>
    )
}