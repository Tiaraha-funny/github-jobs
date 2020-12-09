import React, { createContext, useEffect, useReducer, useState } from "react";

// To create the context from react

const Contexts = createContext();

// These are the APIS that I am going to fetch every time I am checking or enter something in the input

const API_JOBS =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&markdown=true";

const FULL_TIME_API =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&full_time=true&location=sf";
const LONDON_API =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=london";
const AMSTERDAM_API =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=amsterdam";
const NEW_YORK_API =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york";
const BERLIN_API =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=berlin";

// A very big function to handle most of the actions

function GlobalContexts({ children }) {
  //States to handle the filters on location and name of jobs by title

  const [location, setLocation] = useState([]);
  const [searchJobs, setSearchJobs] = useState([]);

  //I use useReducer to simplify the code and having a few states spread everywhere. The action handles the change of the jobs in display

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        //This is the default display when you first load the github jobs

        case "JOBS": {
          return {
            ...state,
            jobs: action.dataFetch,
          };
        }

        // default jobs changes into searched jobs

        case "SEARCH_GITHUB_JOBS": {
          return {
            ...state,
            jobs: action.filterJobsByTitle,
          };
        }

        // default jobs changes into searched location jobs

        case "LOCATION": {
          return {
            ...state,
            jobs: action.filterLocationsJobs,
          };
        }

        // default jobs changes into searched fulltime jobs

        case "FULL_TIME": {
          return {
            ...state,
            jobs: action.getFullTimeJobs,
          };
        }

        // default jobs changes into searched jobs only in London

        case "LONDON": {
          return {
            ...state,
            jobs: action.getLondonJobs,
          };
        }

        // default jobs changes into searched jobs only in Amsterdam

        case "AMSTERDAM": {
          return {
            ...state,
            jobs: action.getAmsterdamJobs,
          };
        }

        // default jobs changes into searched jobs only in New York

        case "NEW_YORK": {
          return {
            ...state,
            jobs: action.getNewYorkJobs,
          };
        }

        // default jobs changes into searched jobs only in Berlin

        case "BERLIN": {
          return {
            ...state,
            jobs: action.getBerlinJobs,
          };
        }

        // if everything above is not defined, throw this error

        default: {
          console.error("No actions defined for", action.type);
          break;
        }
      }

      //handle the returning the state

      return state;
    },

    // These are my source states. When it is still loading, shows the loading state.

    {
      jobs: [],
      loading: "",
    }
  );

  // fetch the default data from api by using useEffect and run only once at a time "[]" at the end

  useEffect(() => {
    async function fetchDataFromApi() {
      const response = await fetch(API_JOBS);
      const dataFetch = await response.json();
      dispatch({ type: "JOBS", dataFetch });
    }
    fetchDataFromApi();
  }, []);

  // Search jobs with location where I want to work  by location name

  useEffect(() => {
    const filterLocationsJobs = jobs.filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
    dispatch({ type: "LOCATION", filterLocationsJobs });
  }, [location]);

  // fetch the full time jobs from api

  async function handleFullTimeJob(e) {
    const fullTimeForm = e.target;
    if (fullTimeForm.checked) {
      const response = await fetch(FULL_TIME_API);
      const getFullTimeJobs = await response.json();
      console.log(getFullTimeJobs);
      dispatch({ type: "FULL_TIME", getFullTimeJobs });
    }
  }

  // fetch github jobs in London from api

  async function handleLondonJobs(e) {
    console.log("checked");
    const LondonJobs = e.target;
    console.log(LondonJobs);
    if (LondonJobs.checked) {
      const response = await fetch(LONDON_API);
      const getLondonJobs = await response.json();
      console.log(getLondonJobs);
      dispatch({ type: "LONDON", getLondonJobs });
    }
  }

  // fetch github jobs in Amsterdam from api

  async function handleAmsterdamJobs(e) {
    const amsterdamJobs = e.target;
    console.log(amsterdamJobs);
    if (amsterdamJobs.checked) {
      const response = await fetch(AMSTERDAM_API);
      const getAmsterdamJobs = await response.json();
      console.log(getAmsterdamJobs);
      dispatch({ type: "AMSTERDAM", getAmsterdamJobs });
    }
  }

  // fetch github jobs in New York from api

  async function handleNewYorkJobs(e) {
    const newYorkJobs = e.target;
    if (newYorkJobs.checked) {
      const response = await fetch(NEW_YORK_API);
      const getNewYorkJobs = await response.json();
      console.log(getNewYorkJobs);
      dispatch({ type: "NEW_YORK", getNewYorkJobs });
    }
  }

  // fetch github jobs in Berlin from api

  async function handleBerlinJobs(e) {
    const berlinJobs = e.target;
    if (berlinJobs.checked) {
      const response = await fetch(BERLIN_API);
      const getBerlinJobs = await response.json();
      console.log(getBerlinJobs);
      dispatch({ type: "BERLIN", getBerlinJobs });
    }
  }

  //Access the jobs state frm the state

  const { jobs } = state;

  //return the provider from context which is created by context react

  return (
    <Contexts.Provider
      value={{
        state,
        dispatch,
        jobs,
        handleFullTimeJob,
        handleLondonJobs,
        handleNewYorkJobs,
        handleBerlinJobs,
        handleAmsterdamJobs,
        searchJobs,
        setSearchJobs,
        location,
        setLocation,
      }}
    >
      {children}
    </Contexts.Provider>
  );
}

export { GlobalContexts, Contexts };
