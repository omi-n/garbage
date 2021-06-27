import React from 'react';
import "./styles.css";
// import "firebase/firestore";
// import "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Site Page
import Nav from "./components/navbar/navbar.js";
import MainPage from "./components/content/mainpage.js";
import Projects from "./components/content/projects.js";
import Resume from "./components/content/resume.js";
// import { Chat, LoginPlease, auth } from "./components/content/directchat.js";


export default function App() {
  // const [ user ] = useAuthState(auth);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          {/* <Route exact path="/chat" component={user ? Chat : LoginPlease} /> */}
        </Switch>
      </div>
    </Router>
  );
}