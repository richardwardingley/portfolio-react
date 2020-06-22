import React from 'react';
import './Tools.css';
import htmllogo from '../img/htmllogo.png';
import csslogo from '../img/csslogo.png';
import jslogo from '../img/jslogo.png';
import reactlogo from '../img/reactlogo.png';
import nodelogo from '../img/nodelogo.png';
import mongologo from '../img/mongologo.png';
import githublogo from '../img/githublogo.png';
import pythonlogo from '../img/pythonlogo.png';

const Tools = () => {
    return (
        <div id="scrollingToolsDiv">
            <img src={htmllogo} alt=""/>
            
            <img classname="toolsLogos" src={csslogo} alt=""/>
            <img src={jslogo} alt=""/>
            <img src={reactlogo} alt=""/>
            <img src={nodelogo} alt=""/>
            <img src={mongologo} alt=""/>
            <img src={githublogo} alt=""/>
            <img src={pythonlogo} alt=""/>
        </div>
    )
}

export default Tools;