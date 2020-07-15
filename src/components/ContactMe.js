import React from 'react';
import Navbar from './Navbar';
import './ContactMe.css';
import {FaLinkedin} from 'react-icons/fa';
import {BsEnvelopeFill} from 'react-icons/bs';
import {FaPhoneAlt} from 'react-icons/fa';

const ContactMe = () => {
    return (
        <div>
            <div id="contactTitle">Contact me</div>
            <div id="contactText">
                If there are any opportunities you would like to discuss, please feel free to contact me.<br/>
                <div className="contactIcons">
                <BsEnvelopeFill/> &nbsp; &nbsp;<a href="mailto:richardwardingley@hotmail.com" target= "_blank" className= "contactLinks" >richardwardingley@hotmail.com</a>
                </div>
                {/* <div className="contactIcons">
                <FaPhoneAlt/> &nbsp; &nbsp;07743 02 02 05
                </div> */}
                <div className="contactIcons">
                <FaLinkedin/> &nbsp; &nbsp;<a href="https://www.linkedin.com/in/richardwardingley/" target="_blank" className= "contactLinks" >LinkedIn</a>
                </div>
            </div>
            <div id="footer">
                    Richard Wardingley ©2020
            </div>
        </div>

    )
}

export default ContactMe;