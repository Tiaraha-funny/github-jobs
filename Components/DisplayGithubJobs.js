import React, { useContext, useState } from "react";
import GithubJobsContent from "./GithubJobsContent";
import { Contexts } from "./GlobalContexts";

function DisplayGithubJobs(children) {
  const { state } = useContext(Contexts);
  const { jobs } = state;

  console.log(jobs);

  return (
    <div>
      {jobs.length === 0 ? <h3>Loading...</h3> : ``}
      {jobs.map((job) => {
        return (
          <GithubJobsContent job={job} key={job.id}>
            {children}
          </GithubJobsContent>
        );
      })}
    </div>
  );
}

export default DisplayGithubJobs;
