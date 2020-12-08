import React, { useContext, useState } from "react";
import DisplayGithubJobs from "./DisplayGithubJobs";
import { Contexts } from "./GlobalContexts";
import LocationSearchForm from "./LocationSearchForm";
import SearchJobs from "./SearchJobs";

function FilteringJobs() {
  const [search, setSearch] = useState([]);
  const [checked, setChecked] = useState(false);

  const { state, dispatch } = useContext(Contexts);
  const { jobs } = state;

  function handleFilterInput(e) {
    e.preventDefault();
    const filtering = jobs
      .filter((job) => job?.title.toLowerCase().includes(search))
      .map((job) => <DisplayGithubJobs job={job} />);

    dispatch({ type: "JOBS", filtering });
  }

  function handleChange() {
    setSearch(e.target.value);
  }

  function handleCheckedFulltimeJobs(id) {
    setChecked(true);
    if (!checked) {
      const filterFulltimeJobs = jobs.filter((fulltime) => fulltime.id === id);
      dispatch({ type: "JOBS", filterFulltimeJobs });
    }
  }

  console.log(checked);

  function handleCheckedLocations(id) {
    setChecked(true);
    const mapThroughtFiltering = jobs.map((job) => {
      if (job.location === "New York") {
        const filtering = jobs.filter((job) => job.location === id);
        dispatch({ type: "JOBS", filtering });
      } else if (job.location === "United States") {
        const filtering = jobs.filter((job) => job.location === id);
        dispatch({ type: "JOBS", filtering });
      } else if (job.location === "Berlin") {
        const filtering = jobs.filter((job) => job.location === id);
        dispatch({ type: "JOBS", filtering });
      } else if (job.location === "Amsterdam") {
        const filtering = jobs.filter((job) => job.location === id);
        dispatch({ type: "JOBS", filtering });
      }
    });
  }

  return (
    <div>
      <SearchJobs
        search={search}
        setSearch={handleChange}
        handleFilterInput={handleFilterInput}
      />
      <LocationSearchForm
        handleCheckedFulltimeJobs={handleCheckedFulltimeJobs}
        checked={checked}
        handleCheckedLocations={handleCheckedLocations}
      />
      <DisplayGithubJobs
        search={search}
        handleFilterInput={handleFilterInput}
      />
    </div>
  );
}

export default FilteringJobs;
