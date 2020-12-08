import React, { createContext, useEffect, useReducer, useState } from "react";

const Contexts = createContext();
const API_JOBS =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?";

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

function GlobalContexts({ children }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "JOBS": {
          return {
            ...state,
            jobs: action.dataFetch,
          };
        }

        case "FULL_TIME": {
          return {
            ...state,
            jobs: action.getFullTimeJobs,
          };
        }

        case "LONDON": {
          return {
            ...state,
            jobs: action.getLondonJobs
          }
        }

        case "NEW_YORK": {
          return {
            ...state,
            jobs: action.getNewYorkJobs
          }
        }
        default: {
          console.error("No actions defined for", action.type);
          break;
        }
      }
      return state;
    },
    {
      jobs: [],
      loading: "",
    }
  );

  useEffect(() => {
    async function fetchDataFromApi() {
      const response = await fetch(API_JOBS);
      const dataFetch = await response.json();
      dispatch({ type: "JOBS", dataFetch });
    }
    fetchDataFromApi();
  }, []);

  async function handleFullTimeJob(e) {
    const fullTimeForm = e.target;
    if (fullTimeForm.checked) {
      const response = await fetch(FULL_TIME_API);
      const getFullTimeJobs = await response.json();
      console.log(getFullTimeJobs);
      dispatch({ type: "FULL_TIME", getFullTimeJobs });
    }
  }

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

  async function handleNewYorkJobs(e) {
    const newYorkJobs = e.target;
    if (newYorkJobs.checked) {
        const response = await fetch(NEW_YORK_API);
        const getNewYorkJobs = await response.json()
        console.log(getNewYorkJobs);
        dispatch({ type: "NEW_YORK", getNewYorkJobs });
    }
}

  const { jobs } = state;

  return (
    <Contexts.Provider
      value={{
        state,
        dispatch,
        jobs,
        handleFullTimeJob,
        handleLondonJobs,
        handleNewYorkJobs
      }}
    >
      {children}
    </Contexts.Provider>
  );
}

export { GlobalContexts, Contexts };
