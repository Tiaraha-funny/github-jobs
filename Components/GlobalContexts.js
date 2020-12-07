import React, { createContext, useEffect, useReducer, useState } from "react";

const Contexts = createContext();
const API_JOBS = 
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?";

function GlobalContexts({ children }) {
    
  // const [search, setSearch] = useState({
  //   description: "",
  //   location: "",
  //   full_time: false,
  // });
// 
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "full_time") {
  //     setSearch((prevState) => ({ ...search, [name]: !prevState.full_time }));
  //   } else {
  //     setSearch({ ...search, [name]: value });
  //   }
  // };
// 
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value)
  //   console.log(search);
  // };

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "JOBS": {
          return {
            ...state,
            jobs: action.dataFetch,
          };
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

  const { jobs } = state;

  useEffect(() => {
    async function fetchDataFromApi() {
      const response = await fetch(API_JOBS);
      const dataFetch = await response.json();
      dispatch({ type: "JOBS", dataFetch });
    }
    fetchDataFromApi();
  }, []);

  return (
    <Contexts.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Contexts.Provider>
  );
}

export { GlobalContexts, Contexts };
