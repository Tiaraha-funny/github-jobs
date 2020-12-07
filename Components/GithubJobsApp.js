import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import DisplayGithubJobs from "./DisplayGithubJobs";
import FilteringJobs from "./FilteringJobs";
import HeaderForm from "./HeaderForm";
import JobDetails from "./JobDetails";
import { MainStyle } from "./StylesComponents";

function GithubJobsApp() {
  return (
    <MainStyle>
      <HeaderForm />
      <FilteringJobs />
      <Switch>
        <Route path="/jobDetails/:Id">
          <JobDetails />
        </Route>
      </Switch>
    </MainStyle>
  );
}

export default GithubJobsApp;
