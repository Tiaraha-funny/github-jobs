import React, { useState } from 'react'
import DisplayGithubJobs from './DisplayGithubJobs';
import LocationSearchForm from "./LocationSearchForm";
import SearchJobs from './SearchJobs';

function FilteringJobs() {
    const [ search, setSearch ] = useState([]);

    function handleFilterInput(e) {
        setSearch(e.target.value);
    }

    return (
        <div>
            <SearchJobs search={search} handleFilterInput={handleFilterInput} />
            <LocationSearchForm />
            <DisplayGithubJobs search={search} handleFilterInput={handleFilterInput} />
        </div>
    )
}

export default FilteringJobs
