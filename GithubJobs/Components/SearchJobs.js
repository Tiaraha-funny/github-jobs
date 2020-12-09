import React from "react";

// I distructure the variable and the functions to display them below

function SearchJobs({ searchJobs, setSearchJobs, handleFilterSearchJobsName }) {
  // dispaly the search input in the header

  return (
    <div className="searchForm">
      <div className="search__section--form">
        <form className="search-form" onSubmit={handleFilterSearchJobsName}>
          <input
            type="text"
            name="description"
            value={searchJobs}
            placeholder="Enter search term"
            onChange={(e) => setSearchJobs(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
export default SearchJobs;
