import React from "react";
import ReactDOM from "react-dom";
import GithubJobsApp from "./Components/GithubJobsApp";
import { GlobalContexts } from "./Components/GlobalContexts";
import "./style.css";

ReactDOM.render(
  <GlobalContexts>
    <GithubJobsApp />
  </GlobalContexts>,
  document.getElementById("root")
);
