import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hobbies from './components/Hobbies';
import ProjectExamples from './components/ProjectExamples';
import gym from './img/gym.png';
import pianouke from './img/pianouke.jpeg';

class App extends Component() {

  state = {
    hobbies:[
      {
        id: 0,
        name: "Roller derby",
        photo: rollerDerby,
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
        photo: choir,
        skill: "Ciommunity",
        skillText: "The importance of working as a whole",
      },
      {
        id: 4,
        name: "Ice skating",
        photo: iceSkating,
        skill: "Showmanship",
        skillText: "Sometimes it's important to show what you can do individually",
      }

    ]
  }

  state = {
    projectExamples: [
      {
        id: 4,
        name: "",
        photo: Pianouke,
        skill: "",
        skillText: "",
      }
    ]
  }
  return (
    <div className="App">
      <Navbar/>
      <Hobbies/>
      <ProjectExamples/>
    </div>
  );
}

export default App;
