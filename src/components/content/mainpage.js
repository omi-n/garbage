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
                <li className="contact"><a href="https://discord.gg/ftQp3sd4kw" target="_blank">&gt; Discord</a></li>
                <li className="contact"><a href="https://github.com/rquit" target="_blank">&gt; GitHub</a></li>
                <li className="contact"><a href="/chat">&gt; Direct Chat</a></li>
            </ul>

            <p>
                Please note that you may have to log in to view some pages, such as the direct chat.
                <br />
                This is to ensure that all parts of the site are secure.
                <br /><br />
                I check all direct chat messages more often than the e-mail on the resume, so if you can
                please just leave a message there! These messages are completely private and can only be viewed
                by the sender and myself.
                <br /><br />
            </p>

            <h3 id="cat">Not much on this page, enjoy the cat!</h3>

        </div>

        <div className="blobcat">
            <img className="blobcatnod" id="blobcat" src="https://cdn.discordapp.com/emojis/778880071950794783.gif?v=1" />
        </div>

    </div>
    )
}