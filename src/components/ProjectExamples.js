import React, { Component } from 'react';
import './ProjectExamples.css';
import pianouke from '../img/pianouke.jpeg';

// const ProjectExamples = () => {
//     return (
//         <div>
//             <div id="projectsTitle">Project examples</div>
//             <div>
//                 <ul id="projectsBullets">
//                     <li>dice game</li>
//                     <li>cyberpet</li>
//                     <li>chatbot</li>
//                     <li>Fitness app</li>
//                 </ul>
//             </div>
//             <div id="footer">
//                 Richard Wardingley ©2020
//             </div> 
//         </div>
//     )
// }

class ProjectExamples extends Component {

    state = {
      projects:[
        {
          id: 0,
          name: "Blackjack",
          photo: pianouke,
          techStack: "Javascript DOM",
          projectText: "How each player’s contribution is needed",
          githubLink: ""
        },
        {
            id: 1,
            name: "Cyber Pet",
            photo: pianouke,
            techStack: "Javascript DOM",
            projectText: "How each player’s contribution is needed",
            githubLink: ""
            },
        {
            id: 2,
            name: "Chatbot",
            photo: pianouke,
            techStack: "React",
            projectText: "How each player’s contribution is needed",
            githubLink: ""
        },
        {
            id: 3,
            name: "Node API project",
            photo: pianouke,
            techStack: "Node",
            projectText: "Node project using API",
            githubLink: ""
        },
        {
            id: 4,
            name: "Todo List",
            photo: pianouke,
            techStack: "Javascript and MongoDB",
            projectText: "How each player’s contribution is needed",
            githubLink: ""
        },
        {
            id: 5,
            name: "Portfolio",
            photo: pianouke,
            techStack: "React",
            projectText: "This portfolio!",
            githubLink: ""
        },
      ]
    }

    render(){
        const eachProject = this.state.projects.map((projects)=> {
        return (
        <div key = {projects.id} >
          <img className="projectImg" src={projects.photo} alt=""/>
          <div className="projectName">{projects.name}</div>
          <div className="projectSkill">{projects.techStack}</div>
          <div className="projectText">{projects.projectText}</div>
          <div className="githubIcon">{projects.githubLink}</div>
        </div>
        )
        })
               
        return (
            <div>
                <div id="projectsTitle">Project examples</div>
                <div id="allProjectsDiv">
                    {eachProject}
                </div>
                <div id="footer">
                    Richard Wardingley ©2020
                </div>
            </div>
        )
    }
}

export default ProjectExamples;

// // how to have a self-changing footer date:

// const currentDate = new Date();
// const year = currentDate.getFullYear();

// // getting the date, then calling the getFullYear method on that date

// const Footer = ()=>{
// return(
// <div>
// <p> Copyright { year } </p>
// </div>
// )