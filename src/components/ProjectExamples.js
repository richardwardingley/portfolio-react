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
import {FaHtml5} from 'react-icons/fa';
import {FaCss3Alt} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {FaReact} from 'react-icons/fa';
import {AiFillApi} from 'react-icons/ai';
import {FaNodeJs} from 'react-icons/fa';
import {DiMongodb} from 'react-icons/di';
import {FaPython} from 'react-icons/fa';
import {DiDjango} from 'react-icons/di';
import {FaGithub} from 'react-icons/fa';
import {GrHeroku} from 'react-icons/gr';

//dice game?
//Fitness app?


class ProjectExamples extends Component {

    state = {
        projects:[
            {
                id: 0,
                name: "Blackjack",
                photo: blackjack,
                techStack: [<FaHtml5/>, 'HTML, ', <FaCss3Alt/>, 'CSS, ', <IoLogoJavascript/>, 'Javascript DOM, ', <FaGithub/>, 'Github'],
                projectDesc: "A playable version of blackjack, against the dealer.",
                githubLink: <a href="" target="_blank" className= "pGithubLink" ><FaGithub/> Hosted on Github pages</a>
            },
            {
                id: 1,
                name: "Cyber Pet",
                photo: cyberpet,
                techStack: [<FaHtml5/>, 'HTML, ', <FaCss3Alt/>, 'CSS, ', <IoLogoJavascript/>, 'Javascript DOM, ', <FaGithub/>, 'Github'],
                projectDesc: "A choice of 3 pets to feed and keep happy.",
                githubLink: <a href="" target="_blank" className= "pGithubLink" ><FaGithub/> Hosted on Github pages</a>
                },
            {
                id: 2,
                name: "Chatbot",
                photo: chatbot,
                techStack: [<FaHtml5/>, 'HTML, ', <FaCss3Alt/>, 'CSS, ', <IoLogoJavascript/>, 'Javascript, ', <FaReact/>, 'React, ', <AiFillApi/>, 'API, ', <FaGithub/>, 'Github'],
                projectDesc: "Have a quick chat to a chatbot!",
                githubLink: <a href="https://richardwardingley.github.io/chatbot-project/" target="_blank" className= "pGithubLink" ><FaGithub/> Hosted on Github pages</a>
            },
            {
                id: 3,
                name: "Portfolio",
                photo: portfolio,
                techStack: [<FaHtml5/>, 'HTML, ', <FaCss3Alt/>, 'CSS, ', <IoLogoJavascript/>, 'Javascript, ', <FaReact/>, 'React, ', <FaGithub/>, 'Github'],
                projectDesc: "This portfolio page!",
                githubLink: <a href="" target="_blank" className= "pGithubLink" ><FaGithub/> Hosted on Github pages</a>
            },
            {
                id: 4,
                name: "Node API project",
                photo: nodelogo,
                techStack: [<FaHtml5/>, 'HTML, ', <FaCss3Alt/>, 'CSS, ', <IoLogoJavascript/>, 'Javascript, ', <FaNodeJs/>, 'Node, ', <AiFillApi/>, 'API, ', <FaGithub/>, 'Github'],
                projectDesc: "Node project using API",
                githubLink: <a href="" target="_blank" className= "pGithubLink" ><FaGithub/> Hosted on Github pages</a>
            },
            {
                id: 5,
                name: "Todo List",
                photo: mongologo,
                techStack: [<FaHtml5/>, 'HTML, ', <FaCss3Alt/>, 'CSS, ', <IoLogoJavascript/>, 'Javascript, ', <DiMongodb/>, 'MongoDB, ', <FaGithub/>, 'Github'],
                projectDesc: "A simple todo list.",
                githubLink: <a href="" target="_blank" className= "pGithubLink" ><FaGithub/> Hosted on Github pages</a>
            },
            {
                id: 6,
                name: "Pathfinder",
                photo: pythondjango,
                techStack: [<FaHtml5/>, 'HTML, ', <FaCss3Alt/>, 'CSS, ', <FaPython/>, 'Python, ', <DiDjango/>, 'Django, ', <FaGithub/>, 'Github, ', <GrHeroku/>, 'Heroku'],
                projectDesc: "Unexplained mysteries with a 90s look",
                githubLink: <a href="https://frozen-oasis-03328.herokuapp.com/phenomena/dates/" target="_blank" className= "pGithubLink" ><GrHeroku/> Hosted on Heroku</a> 
            },
            {
                id: 7,
                name: "Vol-Connect",
                photo: fullstack,
                techStack: [<FaHtml5/>, 'HTML, ', <FaCss3Alt/>, 'CSS, ', <IoLogoJavascript/>, 'Javascript, ', <DiMongodb/>, 'MongoDB, ', <b>ex</b>, ' Express, ', <FaReact/>, 'React, ', <FaNodeJs/>, 'Node, ', <FaGithub/>, 'Github'],
                projectDesc: "A fullstack MERN group project creating an app to connect people that need help with volunteers- currently in progress!",
                githubLink: <a href="" target="_blank" className= "pGithubLink" ><GrHeroku/> Hosted on Heroku</a> 
            },
        ]
    }

    render(){
        const eachProject = this.state.projects.map((projects)=> {
        return (
        <div key = {projects.id} id="eachProjectDiv">
            <div id="ePImgNameDiv">
                <img className="projectImg" src={projects.photo} alt=""/>
                <div className="projectName">{projects.name}</div>
            </div>
            <div id="ePTopLayerDiv">
                <div id="pNameInDesc">{projects.name}</div>
                <div className="projectTechStack">Tech stack: <br/> {projects.techStack}</div>
                <div className="projectDesc">{projects.projectDesc}</div>
                <div className="pGithubLink">{projects.githubLink}</div>
            </div>
        </div>
        )
        })
               
        return (
            <div>
                <div id="projectsTitle">Project examples</div>
                <div id="projectsText">
                    Below are examples of projects and the tech stack used.
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