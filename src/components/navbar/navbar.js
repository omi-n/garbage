import "./navbar.css";
// import { Login, Logout, auth } from "../content/directchat.js";
// import { useAuthState } from "react-firebase-hooks/auth";
import png from "./rock.png";
import React from "react";

export default function Nav() {
    // const [ user ] = useAuthState(auth);
return (
<div>
    <nav className="navbar-container navbar navbar-dark navbar-expand-lg">
        <a className="navbar-brand" href="/">
            <img src={png}></img>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".collapse"
            aria-controls="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li id="nav-item" className="nav-item"><a className="nav-link" href="/portfolio-site/">Home</a></li>
                <li id="nav-item" className="nav-item"><a className="nav-link" href="https://github.com/rquit" target="_blank">GitHub</a></li>
                <li id="nav-item" className="nav-item"><a className="nav-link" href="/portfolio-site/projects">Projects</a></li>
                <li id="nav-item" className="nav-item"><a className="nav-link" href="/portfolio-site/resume">Resume</a></li>
                {/* <li className="nav-item"><a className="nav-link" href="/chat">Direct Chat</a></li> */}
                {/* <li className="nav-item-hide">{user ? <Logout /> : <Login />}</li> */}
            </ul>
        </div>

        {/* <div className="space-this-out">
                {user ? <Logout /> : <Login />}
        </div> */}
    </nav>
    <br />
</div>
)
}