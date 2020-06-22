import React from 'react';
import './Skills.css';
import Tools from './Tools';

const Skills = () => {
    return (
        <div>
            <div>
                <div id="skillsTitle">Skills</div>
                <div id="skillsText">
                    Done 3 week develop course and 12 week master course at Code Nation
                    Learnt through test-driven development, and project and challenge-based learning
                    Learnt many coding skills as well as professional and soft skills
                </div>
            </div>
            <div>
                <div className="skillsToolsSubTitles">Languages and developer tools used</div>
                <div>
                    <Tools/>
                    *insert scrolling(?) picture icons of tools used here from tools.js component*
                </div>
            </div>
            <div>
                <div className="skillsToolsSubTitles">Professional skills used</div>
                <ul id="skillsBullets">
                    <li>Problem solving for digital projects</li>
                    <li>Understanding project lifecycles</li>
                    <li>Working in a team</li>
                    <li>Agile working</li>
                    <li>Trello - Kanban method</li>
                    <li>Toggl - ticket working and time management </li>
                    <li>Stand-ups and lightning talks</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;