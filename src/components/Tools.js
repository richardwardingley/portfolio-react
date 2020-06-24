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
import djangologo from '../img/djangologo.png';

const Tools = () => {
    return (
        <div id="scrollingToolsDiv">
            <img class="eachToolLogoImg" src={githublogo} alt=""/>
            <img class="eachToolLogoImg" src={htmllogo} alt=""/>
            <img class="eachToolLogoImg" src={csslogo} alt=""/>
            <img class="eachToolLogoImg" src={jslogo} alt=""/>
            <img class="eachToolLogoImg" src={reactlogo} alt=""/>
            <img class="eachToolLogoImg" src={nodelogo} alt=""/>
            <img class="eachToolLogoImg" src={mongologo} alt=""/>
            <img class="eachToolLogoImg" src={pythonlogo} alt=""/>
            <img class="eachToolLogoImg" src={djangologo} alt=""/>
        </div>
    )
}

export default Tools;