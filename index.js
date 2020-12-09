import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GithubJobsApp from "./GithubJobs/Main_components/GithubJobsApp";
import { GlobalContexts } from "./GithubJobs/Main_components/GlobalContexts";
import "./style.css";

ReactDOM.render(
  <GlobalContexts>
    <Router>
      <GithubJobsApp />
    </Router>
  </GlobalContexts>,
  document.getElementById("root")
);
