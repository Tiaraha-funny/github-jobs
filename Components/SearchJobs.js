import React, { useContext, useState } from "react";

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