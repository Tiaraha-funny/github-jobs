import React, { useContext } from "react";
import GithubJobsContent from "../Components/GithubJobsContent";
import { Contexts } from "./GlobalContexts";

function DisplayGithubJobs(children) {
  // Call the variable and the functions from the context component

  const { state } = useContext(Contexts);
  const { jobs } = state;

  //Handle the mapping jobs and the loading jobs if there is not api loading yet. It take quite takes long time to load

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
