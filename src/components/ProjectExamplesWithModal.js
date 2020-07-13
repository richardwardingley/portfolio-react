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
import ProjectModal from './ProjectModal';

//dice game?
//Fitness app?


class ProjectExamplesWithModal extends Component {

    state = {
        projects:[
            {
                id: 0,
                name: "Blackjack",
                photo: blackjack,
                techStack: "Tech stack: Javascript DOM",
                projectDesc: "A playable version of blackjack against the dealer.",
                githubLink: "GITHUB LINK"
            },
            {
                id: 1,
                name: "Cyber Pet",
                photo: cyberpet,
                techStack: "Tech stack: Javascript DOM",
                projectDesc: "A choice of 3 pet to feed and keep happy.",
                githubLink: "GITHUB LINK"
                },
            {
                id: 2,
                name: "Chatbot",
                photo: chatbot,
                techStack: "Tech stack: React and API",
                projectDesc: "Have a quick chat to a chatbot!",
                githubLink: "GITHUB LINK"
            },
            {
                id: 3,
                name: "Portfolio",
                photo: portfolio,
                techStack: "Tech stack: React",
                projectDesc: "This portfolio!",
                githubLink: "GITHUB LINK"
            },
            {
                id: 4,
                name: "Node API project",
                photo: nodelogo,
                techStack: "Tech stack: Node",
                projectDesc: "Node project using API",
                githubLink: "GITHUB LINK"
            },
            {
                id: 5,
                name: "Todo List",
                photo: mongologo,
                techStack: "Tech stack: Javascript and MongoDB",
                projectDesc: "A simple todo list.",
                githubLink: "GITHUB LINK"
            },
            {
                id: 6,
                name: "PathFinder",
                photo: pythondjango,
                techStack: "Tech stack: Python and Django",
                projectDesc: "Unexplained mysteries",
                githubLink: "GITHUB LINK"
            },
            {
                id: 7,
                name: "Vol-Connect",
                photo: fullstack,
                techStack: "Tech stack: MongoDB, Express, React, Node",
                projectDesc: "A fullstack MERN group project creating an app to connect people that need help with volunteers- currently in progress!",
                githubLink: "GITHUB LINK"
            },
        ]
    }

    render(){
        const projectNameImg = this.state.projects.map((projects)=> {
        return (
        <div key = {projects.id} id="eachProjectDiv">
          <img className="projectImg" src={projects.photo} alt=""/>
          <div className="projectName">{projects.name}</div>
          <div><ProjectModal name={projects.name} techStack={projects.techStack} projectDesc={projects.projectDesc} githubLink={projects.githubLink}/></div>
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
                    {projectNameImg}                    
                </div>
            </div>
        )
    }
}

export default ProjectExamplesWithModal;

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