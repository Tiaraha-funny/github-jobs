import React, { useContext } from "react";
import DisplayGithubJobs from "./DisplayGithubJobs";
import HeaderForm from "./HeaderForm";
import LocationSearchForm from "./LocationSearchForm";
import { MainStyle } from "./StylesComponents";

function GithubJobsApp() {

  return (
    <MainStyle>
      <HeaderForm />
      <LocationSearchForm />
      <DisplayGithubJobs />
    </MainStyle>
  );
}

export default GithubJobsApp;
