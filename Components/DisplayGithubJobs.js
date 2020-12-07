import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Contexts } from "./GlobalContexts";
import { DisplayJobs } from "./StylesComponents";

function DisplayGithubJobs({ search }) {
  const { state } = useContext(Contexts);
  const { jobs } = state;
  console.log(jobs);

  return (
    <div>
      {jobs.length === 0 ? <h3>Loading...</h3> : ``}
      {jobs
        .filter((job) => job.title.toLowerCase().includes(search))
        .map((job) => {
          return (
            <DisplayJobs key={job.id}>
              <Link to={`/jobDetails/${job.id}`}>
                <div>
                  <div>
                    <img src={job.company_url} />
                  </div>
                  <div>
                    <p>{job.location}</p>
                    <p>{job.title}</p>
                    <button>{job.type}</button>
                  </div>
                </div>
              </Link>
            </DisplayJobs>
          );
        })}
    </div>
  );
}

export default DisplayGithubJobs;
