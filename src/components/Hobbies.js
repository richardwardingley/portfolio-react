import React, { Component } from 'react';
import './Hobbies.css';
import gym from '../img/gym.png';
import pianouke from '../img/pianouke.jpeg';
import choir from '../img/choir.jpg';
import iceskating from '../img/iceskating.jpg';
import rollerderby from '../img/rollerderby.jpg';


class Hobbies extends Component {

    state = {
      hobbies:[
        {
          id: 0,
          name: "Roller derby",
          photo: rollerderby,
          skill: "Team strategy -",
          skillText: "How each player’s contribution is needed",
        },
        {
          id: 1,
          name: "Piano and ukulele",
          photo: pianouke,
          skill: "Perseverance -",
          skillText: "It can sometimes take a while to get things right",
        },
        {
          id: 2,
          name: "Gymnastics and trampolining",
          photo: gym,
          skill: "Teaching -",
          skillText: "Explaining complicated things in different and simple ways",
        },
        {
          id: 3,
          name: "Choir",
          photo: choir,
          skill: "Community -",
          skillText: "The importance of working as a whole",
        },
        {
          id: 4,
          name: "Ice skating",
          photo: iceskating,
          skill: "Showmanship -",
          skillText: "Sometimes it's good to prove individual ability",
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
        <div key = {hobbies.id} id="eachHobbyDiv">
          <div id="eHTopLayerDiv">
            <img className="hobbyImg" src={hobbies.photo} alt=""/>
            <div className="hobbyName">{hobbies.name}</div>
          </div>
          <div id="eHBttmLayerDiv">
            <div className="hobbySkill">{hobbies.skill}</div>
            <div className="hobbySkillText">{hobbies.skillText}</div>
          </div>
        </div>
        )
        })
               
        return (
          <div>
            <div id="hobbiesTitle">
              Hobbies
            </div>
            <div id="hobbiesText">
              I have many hobbies and interests. Some are shown below, along with skills they have given me that will be beneficial in the workplace.
            </div>
            <div id="allHobbiesDiv">
                {eachHobby}
            </div>
        </div>
        )
    }
}

export default Hobbies;