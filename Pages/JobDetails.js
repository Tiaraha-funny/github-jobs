import React, { useContext, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useHistory, useParams } from "react-router-dom";

function JobDetails({ jobs }) {

  const history = useHistory();

  function GoBackHome() {
    history.push("/");
  }

  let { Id } = useParams();
  const findDetailedJobById = jobs.find((detail) => detail?.id === Id);

  function ShowDetails() {
    if (findDetailedJobById) {
        console.log(findDetailedJobById?.description);
      return <p>{findDetailedJobById?.description}</p>;
    } else {
      return null;
    }
  }

  return (
  <div>
    <BiArrowBack onClick={GoBackHome} className="backHome" ></BiArrowBack>
    {ShowDetails()}
  </div>);
}

export default JobDetails;
