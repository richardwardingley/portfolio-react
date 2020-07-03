import React, { Component } from 'react';
import './ProjectExamples.css';
import blackjack from '../img/blackjack.jpg';
import cyberpet from '../img/cyberpet.png';
import chatbot from '../img/chatbot.jpg';
import portfolio from '../img/portfolio.JPG';
import nodelogo from '../img/nodelogo.png';
import mongologo from '../img/mongologo.png';
import pythondjango from '../img/pythondjango.jpg';
import fullstack from '../img/fullstack.jpg';

//dice game?
//Fitness app?


class ProjectExamples extends Component {

    state = {
        projects:[
            {
                id: 0,
                name: "Blackjack",
                photo: blackjack,
                techStack: "Tech stack: Javascript DOM",
                projectDesc: "How each player’s contribution is needed",
                githubLink: ""
            },
            {
                id: 1,
                name: "Cyber Pet",
                photo: cyberpet,
                techStack: "Tech stack: Javascript DOM",
                projectDesc: "How each player’s contribution is needed",
                githubLink: ""
                },
            {
                id: 2,
                name: "Chatbot",
                photo: chatbot,
                techStack: "Tech stack: React",
                projectDesc: "How each player’s contribution is needed",
                githubLink: ""
            },
            {
                id: 3,
                name: "Portfolio",
                photo: portfolio,
                techStack: "Tech stack: React",
                projectDesc: "This portfolio!",
                githubLink: ""
            },
            {
                id: 4,
                name: "Node API project",
                photo: nodelogo,
                techStack: "Tech stack: Node",
                projectDesc: "Node project using API",
                githubLink: ""
            },
            {
                id: 5,
                name: "Todo List",
                photo: mongologo,
                techStack: "Tech stack: Javascript and MongoDB",
                projectDesc: "How each player’s contribution is needed",
                githubLink: ""
            },
            {
                id: 6,
                name: "Python and Django",
                photo: pythondjango,
                techStack: "Tech stack: Python and Django",
                projectDesc: "Pthyon and Django project",
                githubLink: ""
            },
            {
                id: 7,
                name: "Fullstack MERN",
                photo: fullstack,
                techStack: "Tech stack: MongoDB, Express, React, Node",
                projectDesc: "A fullstack group project - currently in progress!",
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
          <div className="projectTechStack">{projects.techStack}</div>
          <div className="projectDesc">{projects.projectDesc}</div>
          <div className="githubIcon">{projects.githubLink}</div>
        </div>
        )
        })
               
        return (
            <div>
                <div id="projectsTitle">Project examples</div>
                <div id="projectsText">
                    Below are examples of completed projects. Each project included some form of HTML and CSS.
                </div>
                <div id="allProjectsDiv">
                    {eachProject}
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