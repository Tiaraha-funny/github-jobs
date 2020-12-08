import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DisplayGithubJobs from "./DisplayGithubJobs";
import { Contexts } from "./GlobalContexts";
import LocationSearchForm from "./LocationSearchForm";
import SearchJobs from "./SearchJobs";
import { Header } from "./StylesComponents";

function MainGithubJobs() {

  const [search, setSearch] = useState([]);

  function handleFilterInput(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Header>
        <Link to="/">
          <h1 className="header">Github Jobs</h1>
        </Link>
      </Header>

      <SearchJobs search={search} handleFilterInput={handleFilterInput} />
      <LocationSearchForm />
      <DisplayGithubJobs />
    </div>
  );
}

export default MainGithubJobs;
