import React, { Component } from 'react';
import './Hobbies.css';
import gym from '../img/gym.png';
import pianouke from '../img/pianouke.jpeg';

class Hobbies extends Component {

    state = {
      hobbies:[
        {
          id: 0,
          name: "Roller derby",
          photo: pianouke,
          skill: "Team strategy",
          skillText: "How each player’s contribution is needed",
        },
        {
          id: 1,
          name: "Piano and ukulele",
          photo: pianouke,
          skill: "Perseverance",
          skillText: "It can sometimes take a while to get things right",
        },
        {
          id: 2,
          name: "Gymnastics and trampolining",
          photo: gym,
          skill: "Teaching",
          skillText: "Explaining complicated things in different and simple ways",
        },
        {
          id: 3,
          name: "Choir",
          photo: pianouke,
          skill: "Ciommunity",
          skillText: "The importance of working as a whole",
        },
        {
          id: 4,
          name: "Ice skating",
          photo: pianouke,
          skill: "Showmanship",
          skillText: "Sometimes it's important to show what you can do individually",
        }
  
      ]
    }

    // render(){
    //   const eachHobby = this.state.hobbies.map((hobbies)=> {
    //     return <Hobbies
    //     key = {hobbies.id}
    //     photo ={hobbies.photo}
    //     name = {hobbies.name}
    //     skill = {hobbies.skill}
    //     skillText = {hobbies.skillText} />
    //   })
    //   return (
    //     <div>
    //         <img className="hobbyImg" src={hobbies.photo} alt=""/>
    //         <div className="hobbyName">{hobbies.name}</div>
    //         <div className="hobbySkill">{hobbies.skill}</div>
    //         <div className="hobbySkillText">{hobbies.skillText}</div>
    //     </div>
    // )
    // }
    render(){
        const eachHobby = this.state.hobbies.map((hobbies)=> {
        return (
        <div key = {hobbies.id} >
          <img className="hobbyImg" src={hobbies.photo} alt=""/>
          <div className="hobbyName">{hobbies.name}</div>
          <div className="hobbySkill">{hobbies.skill}</div>
          <div className="hobbySkillText">{hobbies.skillText}</div>
        </div>
        )
        })
               
        return (
        <div id="allHobbiesDiv">
             {eachHobby}
        </div>
        )
    }
}

export default Hobbies;