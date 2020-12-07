import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GithubJobsApp from "./Components/GithubJobsApp";
import { GlobalContexts } from "./Components/GlobalContexts";
import "./style.css";

ReactDOM.render(
  <GlobalContexts>
    <Router>
      <GithubJobsApp />
    </Router>
  </GlobalContexts>,
  document.getElementById("root")
);
