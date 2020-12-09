import React, { useContext } from "react";
import { Contexts } from "../Main_components/GlobalContexts";
import { CheckBoxStyle } from "./StylesComponents";

function LocationSearchForm() {
  //Calling the states and the functions from context

  const {
    handleFullTimeJob,
    handleLondonJobs,
    handleNewYorkJobs,
    handleBerlinJobs,
    handleAmsterdamJobs,
    location,
    setLocation,
  } = useContext(Contexts);

  // Displaying the forms under the header

  return (
    <form>
      {/* handle the display of fulltime checkbox */}
      <div className="filters">
        <input type="checkbox" name="fullTime" onChange={handleFullTimeJob} />{" "}
        Full time
      </div>

      {/* handle the display of locations input */}

      <div className="input-filters">
        <label>Location</label>
        <div className="form-group">
          <input
            type="text"
            value={location}
            name="location"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, city, zipe code or country"
          />
        </div>
      </div>

      {/* handle the display of all of the cities checkbox */}

      <CheckBoxStyle>
        <div className="input__Checkbox">
          <input type="checkbox" name="london" onChange={handleLondonJobs} />
          <span>London</span>
        </div>
        <div className="input__Checkbox">
          <input
            type="checkbox"
            name="amsterdam"
            onChange={handleAmsterdamJobs}
          />
          <span>Amsterdam </span>
        </div>
        <div className="input__Checkbox">
          <input type="checkbox" name="new york" onChange={handleNewYorkJobs} />
          <span>New York </span>
        </div>
        <div className="input__Checkbox">
          <input type="checkbox" name="berlin" onChange={handleBerlinJobs} />
          <span>Berlin</span>
        </div>
      </CheckBoxStyle>
    </form>
  );
}

export default LocationSearchForm;
