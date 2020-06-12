import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ProjectExamples from './components/ProjectExamples';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Landing/>
      <AboutMe/>
      <Skills/>
      <ProjectExamples/>
    </div>
  );
}

export default App;