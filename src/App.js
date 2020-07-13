import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ProjectExamples from './components/ProjectExamples';
import ContactMe from './components/ContactMe';


function App() {
  return (
    <div className="App">
      <a id="home"><Navbar/></a>
      <Landing/>
      <a id="aboutMe"><AboutMe/></a>
      <a id="skills"><Skills/></a>
      <a id="projects"><ProjectExamples/></a>
      <a id="contactMe"><ContactMe/></a>
    </div>
  );
}

export default App;