import React, { useContext, useState } from "react";
import { Contexts } from "./GlobalContexts";

function SearchJobs({ search, handleFilterInput }) {

  return (
    <div className="searchForm">
      <div className="search__section--form">
        <form className="search-form">
          <input
            type="text"
            name="description"
            value={search}
            placeholder="Enter search term"
            onChange={handleFilterInput}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
export default SearchJobs;


  // const { search, handleInputChange } = useContext(Contexts);

  // function handleSearch(e) {
  //   e.preventDefault();
  //   const filterJobsTitle = jobs.filter((job) =>
  //     job.title.toLowerCase().includes(search)
  //   );
// 
  //   console.log(filterJobsTitle);
// 
  //   const mapThroughTheJobs = jobs.map((job) => {
  //     console.log(job);
  //     if (job.title === filterJobsTitle) {
  //       filterJobsTitle.map((job) => <DisplayGithubJobs job={job} />);
  //     } else {
  //       jobs.map((job) => <DisplayGithubJobs job={job} />);
  //     }
  //   });
  //   return mapThroughTheJobs;
  // }