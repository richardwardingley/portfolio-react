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
                projectDesc: "How each player’s contribution is needed",
                githubLink: ""
            },
            {
                id: 1,
                name: "Cyber Pet",
                photo: pianouke,
                techStack: "Javascript DOM",
                projectDesc: "How each player’s contribution is needed",
                githubLink: ""
                },
            {
                id: 2,
                name: "Chatbot",
                photo: pianouke,
                techStack: "React",
                projectDesc: "How each player’s contribution is needed",
                githubLink: ""
            },
            {
                id: 3,
                name: "Portfolio",
                photo: pianouke,
                techStack: "React",
                projectDesc: "This portfolio!",
                githubLink: ""
            },
            {
                id: 4,
                name: "Node API project",
                photo: pianouke,
                techStack: "Node",
                projectDesc: "Node project using API",
                githubLink: ""
            },
            {
                id: 5,
                name: "Todo List",
                photo: pianouke,
                techStack: "Javascript and MongoDB",
                projectDesc: "How each player’s contribution is needed",
                githubLink: ""
            },
            {
                id: 6,
                name: "Python",
                photo: pianouke,
                techStack: "Python",
                projectDesc: "Something made in Python",
                githubLink: ""
            },
            {
                id: 7,
                name: "Python and Django",
                photo: pianouke,
                techStack: "Python and Django",
                projectDesc: "Pthyon and Django project",
                githubLink: ""
            },
        ]
    }

    render(){
        const eachProject = this.state.projects.map((projects)=> {
        return (
        <div key = {projects.id} id="eachProjectDiv">
          <img className="projectImg" src={projects.photo} alt=""/>
          <div className="projectName">{projects.name}</div>
          <div className="projectSkill">{projects.techStack}</div>
          <div className="projectDesc">{projects.projectDesc}</div>
          <div className="githubIcon">{projects.githubLink}</div>
        </div>
        )
        })
               
        return (
            <div>
                <div id="projectsTitle">Project examples</div>
                <div id="projectsText">
                    General text here saying about projects
                </div>
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