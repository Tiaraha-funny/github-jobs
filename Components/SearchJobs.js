import React, { useContext, useState } from "react";
import { Contexts } from "./GlobalContexts";

function SearchJobs() {

  const { search, handleSearch, handleInputChange } = useContext(Contexts);

  return (
    <div className="searchForm">
      <div className="search__section--form">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            name="description"
            value={search.description || ""}
            placeholder="Enter search term"
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
export default SearchJobs;
