import React, { useContext, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useHistory, useParams } from "react-router-dom";

function JobDetails({ jobs }) {
  // I used useHistory link from react to link back my page to home page

  const history = useHistory();

  // To push the history back to home page

  function GoBackHome() {
    history.push("/");
  }

  // To find the id in the useParams and compare it with the existing in the Api link

  let { Id } = useParams();
  const findDetailedJobById = jobs.find((detail) => detail?.id === Id);

  // Handle the display of the description details

  function ShowDetails() {
    // This is the main details of the description

    if (findDetailedJobById) {
      return (
        <div>
          <div className="howto">
            <p>
              Email your resume and cover letter to
              <a href={findDetailedJobById?.company_url}>
                {" "}
                {findDetailedJobById?.company_url}{" "}
              </a>
              Looking forward to hearing from your
            </p>
          </div>
          <div className="details-content">
            <h1> {findDetailedJobById?.title}</h1>
            <button className="custom-label">
              {" "}
              {findDetailedJobById?.type}{" "}
            </button>
            <div className="job-date">{findDetailedJobById?.created_at}</div>
            <div className="company-details">
              {findDetailedJobById?.company_logo}
              <div className="meta">
                {findDetailedJobById?.company}
                <div className="job-location">
                  {findDetailedJobById?.location}
                </div>
              </div>
            </div>
            <div className="job-description">
              <p>Who we are </p>
              {findDetailedJobById?.description}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  // This is the headings of the detail

  return (
    <div className="details">
      <header className="header">
        <h1>
          Github
          <span>Jobs</span>
        </h1>
      </header>
      <div className="details-container">
        <div className="details-sidebar">
          <a
            onClick={GoBackHome}
            className=" backHome details-sidebare__back-link"
          >
            <BiArrowBack className="backHome"></BiArrowBack>
            Go back to search
          </a>
          <h3>How to apply</h3>
          <div className="howto">
            <p>
              <a href="https://www.exact.com/nl/werken-bij/vacatures/a0t4I00000nSFX7QAO-senior-software-engineer-net/apply?vq_campaign=f68f09cf-943b-56ae-9ba0-d2980d30489c&vq_source=819"></a>
            </p>
          </div>
        </div>
        <div>{ShowDetails()}</div>
      </div>
    </div>
  );
}

export default JobDetails;
