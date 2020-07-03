import React from 'react';
import Navbar from './Navbar';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <div>
            <div id="contactTitle">Contact me</div>
            <div id="contactText">
                For any queries please contact me via email: <a href="mailto:richardwardingley@hotmail.com" target= "_blank" >richardwardingley@hotmail.com</a><br/>
                or via mobile on 07743 02 02 05
            </div>
            <div id="footer">
                    Richard Wardingley ©2020
            </div>
        </div>

    )
}

export default ContactMe;