import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DisplayGithubJobs from "./DisplayGithubJobs";
import { Contexts } from "./GlobalContexts";
import LocationSearchForm from "../Components/LocationSearchForm";
import SearchJobs from "../Components/SearchJobs";
import { Header } from "../Components/StylesComponents";
import ProgressBar from "../Components/ProgressBar";

function MainGithubJobs() {
  // Call the variable and the functions from the context component

  const { state, dispatch, searchJobs, setSearchJobs } = useContext(Contexts);

  // Call the jobs state from state which is from the context component

  const { jobs } = state;

  // Filter jobs by the name which is written on the title job

  function handleFilterSearchJobsName(e) {
    e.preventDefault();
    const filterJobsByTitle = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchJobs.toLowerCase())
    );
    dispatch({ type: "SEARCH_GITHUB_JOBS", filterJobsByTitle });
  }

  // handle the display of githubjobs' components

  return (
    <div>
      <Header>
        <Link to="/">
          <h1 className="header">Github Jobs</h1>
        </Link>
      </Header>

      <SearchJobs
        searchJobs={searchJobs}
        setSearchJobs={setSearchJobs}
        handleFilterSearchJobsName={handleFilterSearchJobsName}
      />

      <div className="jobs__container">
        <div className="Location__form">
          <LocationSearchForm />
        </div>
        <div className="jobs__container--display">
          <DisplayGithubJobs />
        </div>
        <div className="jobs__progress--bar">
        <ProgressBar />
        </div>
      </div>
    </div>
  );
}

export default MainGithubJobs;
