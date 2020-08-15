import React from 'react';
import './Landing.css';
import {AiOutlineWarning} from 'react-icons/ai';

const Landing = () => {
    return (
        <div id="landingDiv">
            <div id="landingName">Richard<br></br>Wardingley</div>
            <div id="landingText">An entry level coder, actively looking for an apprenticeship or other opportunities in software development.</div>
            {/* <div id="fullConstructDiv">
                <div><AiOutlineWarning className= "constructIcons"/></div>
                <div id="constructionText"> *** This page is currently under construction. Please check back later for a more updated and finished product.<br/>
                For any enquiries please email richardwardingley@hotmail.com ***</div>
                <div><AiOutlineWarning className= "constructIcons"/></div>
            </div> */}
        </div>
    )
}

export default Landing;