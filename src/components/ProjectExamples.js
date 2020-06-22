import React from 'react';
import './ProjectExamples.css';

const ProjectExamples = () => {
    return (
        <div>
            <div id="projectsTitle">Project examples</div>
            <div>
                <ul id="projectsBullets">
                    <li>dice game</li>
                    <li>cyberpet</li>
                    <li>chatbot</li>
                    <li>Fitness app</li>
                </ul>
            </div>
            <div id="footer">
                Richard Wardingley ©2020
            </div> 
        </div>
    )
}

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



export default ProjectExamples;