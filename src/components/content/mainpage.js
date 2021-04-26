import React from "react";
import "./mainpage.css";

export default function MainPage() {
return (
<div className="main">

    <div className="content">
        <header className="main-header">
            <h1 className="hello"><u>Hello!</u></h1>
            <h2 className="name">My name is <strong>Nabil Omi</strong>.</h2>
            <h2>I'm a Computer Science student at CCNY.</h2>
        </header>

        <ul className="contact-list">
            <li className="contact-me"><u>You can find me at:</u></li>
            <li className="contact"><a href="https://www.linkedin.com/in/nabil-omi/" target="_blank">&gt; LinkedIn</a>
            </li>
            <li className="contact"><a>&gt; Discord</a></li>
            <li className="contact"><a href="https://github.com/rquit" target="_blank">&gt; GitHub</a></li>
            <li className="contact">&gt; Direct Chat!</li>
        </ul>

        <p>
            Please note that you may have to log in to view some pages, such as the direct chat.<br />
            This is to ensure that all parts of the site are secure.
        </p>
    </div>

    <div className="monkey">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Emojione_BW_1F64A.svg/512px-Emojione_BW_1F64A.svg.png"></img>
    </div>

</div>
)}