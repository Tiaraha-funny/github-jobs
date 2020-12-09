import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { MainStyle } from "../Components/StylesComponents";
import JobDetails from "../Pages/JobDetails";
import { Contexts } from "./GlobalContexts";
import MainGithubJobs from "./MainGithubJobs";

function GithubJobsApp() {
  // Call the variable and the functions from the context component

  const { state } = useContext(Contexts);
  const { jobs } = state;

  // I use switch from react to switch the path link and display them through these components
  return (
    <MainStyle>
      <Switch>
        <Route exact path="/">
          <MainGithubJobs />
        </Route>
        <Route path="/:Id">
          <JobDetails jobs={jobs} />
        </Route>
      </Switch>
    </MainStyle>
  );
}

export default GithubJobsApp;
