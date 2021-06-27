import React from "react";
import "./mainpage.css";
import gif from "./blobcat.gif";

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
                <li className="contact"><a href="https://www.linkedin.com/in/nabil-omi/" target="_blank"> LinkedIn</a>
                </li>
                <li className="contact"><a href="https://discord.gg/sMfcvhZjCp" target="_blank"> Discord</a></li>
                <li className="contact"><a href="https://github.com/rquit" target="_blank"> GitHub</a></li>
                {/* <li className="contact"><a href="/chat"> Direct Chat</a></li> */}
            </ul>

            <p>
                I check all Discord messages more often than the e-mail on the resume, so if you can
                please just leave a message there!
                <br /><br />
            </p>

            <h3 id="cat">Not much on this page, enjoy the cat!</h3>

        </div>

        <div className="blobcat">
            <img className="blobcatnod" id="blobcat" src={gif} />
        </div>

    </div>
    )
}