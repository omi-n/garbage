import React from 'react';
import "./styles.css";
import "firebase/firestore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Site Pages
import Nav from "./components/navbar/navbar.js";
import MainPage from "./components/content/mainpage.js";
import Projects from "./components/content/projects.js";
import Resume from "./components/content/resume.js";


export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}