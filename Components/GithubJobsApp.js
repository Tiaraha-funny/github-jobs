import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import JobDetails from "../Pages/JobDetails";
import { MainStyle } from "./StylesComponents";
import { Contexts } from "./GlobalContexts";
import MainGithubJobs from "./MainGithubJobs";

function GithubJobsApp() {
  const { state } = useContext(Contexts);
  const { jobs } = state;
  console.log(jobs);

  return (
    <MainStyle>
      <Switch>
        <Route exact path="/">
          <MainGithubJobs/>
        </Route>
        <Route path="/:Id">
          <JobDetails jobs={jobs} />
        </Route>
      </Switch>
    </MainStyle>
  );
}

export default GithubJobsApp;
