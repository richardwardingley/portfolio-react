import React from 'react';
import './Skills.css';
import Tools from './Tools';

const Skills = () => {
    return (
        <div>
            <div>
                <div id="skillsTitle">Skills</div>
                <div id="skillsText">
                    I have completed a 12-week Master Coding course at Code Nation, Manchester, following on from their 3-week Develop Coding course. I learnt through test-driven development, and project and challenge-based learning. Many coding skills were used, as well as professional and soft skills.
                </div>
            </div>
            <div>
                <div className="skillsToolsSubTitles">Languages and developer tools used</div>
       
                    <Tools/>

            </div>
            <div>
                <div className="skillsToolsSubTitles">Professional skills used</div>
                <ul id="skillsBullets">
                    <li>Problem solving for digital projects</li>
                    <li>Understanding project lifecycles</li>
                    <li>Working in a team - mob and pair programming</li>
                    <li>Agile working</li>
                    <li>Trello - Kanban method</li>
                    <li>Toggl - ticket working and time management </li>
                    <li>Stand-ups, retros, and lightning talks</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;