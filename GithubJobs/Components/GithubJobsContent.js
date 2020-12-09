import React from "react";
import { Link } from "react-router-dom";
import { DisplayJobs } from "./StylesComponents";

//display the githubjobs content after mapping

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
          <div>
            <p className="companyIcon">
              {job.company} 
              (<span>{job.location}</span>)
            </p>
            <p className="clockIcon">{new Date().getTimezoneOffset(job.created_at)}</p>
          </div>
        </div>
      </Link>
    </DisplayJobs>
  );
}

export default GithubJobsContent;
