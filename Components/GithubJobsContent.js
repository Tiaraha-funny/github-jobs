import React from "react";
import { Link } from "react-router-dom";
import { DisplayJobs } from "./StylesComponents";

function GithubJobsContent({ job }) {
  return (
    <DisplayJobs>
      <Link to={`/${job.id}`}>
        <div className="contentes">
          <div>
            <img className="logo-style" src={job.company_logo} />
          </div>
          <div className="information">
            <p>{job.location}</p>
            <p>{job.title}</p>

            <button>{job.type}</button>
          </div>
        </div>
      </Link>
    </DisplayJobs>
  );
}

export default GithubJobsContent;
