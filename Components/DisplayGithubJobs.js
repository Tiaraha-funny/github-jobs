import React, { useContext } from "react";
import { Contexts } from "./GlobalContexts";
import { DisplayJobs } from "./StylesComponents";

function DisplayGithubJobs() {
  const { state } = useContext(Contexts);
  const { jobs } = state;
  console.log(jobs);

  return (
    <div>

      {jobs.map((job) => {
        return (
          <DisplayJobs key={job.id}>
            <div>
              <img src={job?.url} />
            </div>
            <div>
              <p>{job.location}</p>
              <p>{job.title}</p>
              <button>{job.type}</button>
            </div>
          </DisplayJobs>
        );
      })}
    </div>
  );
}

export default DisplayGithubJobs;
