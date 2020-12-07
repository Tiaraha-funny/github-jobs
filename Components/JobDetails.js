import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Contexts } from './GlobalContexts';

function JobDetails() {
    const {state} = useContext(Contexts);
    const {jobs} = state;
    const {Id} = useParams();
    console.log(Id);
    const findDetailedJobById = jobs.find(detail => detail.id === Id);

    return (
        <div>
            <p>{findDetailedJobById?.description}</p>
        </div>
    )
}

export default JobDetails
