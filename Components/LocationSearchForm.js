import React, { useContext } from "react";
import { Contexts } from "./GlobalContexts";
import { CheckBoxStyle } from "./StylesComponents";

function LocationSearchForm() {
  // const { search, handleInputChange } = useContext(Contexts);

  return (
    <form>
      <div className="filters">
        <input
          type="checkbox"
          name="full_time"
          className="full-time-checkbox"
          label="Full time only"
        />{" "}
        Full time
      </div>

      <label>Location</label>
      <p>
        <input
          type="text"
          name="location"
        />
      </p>

      <CheckBoxStyle>
        <div>
          <input type="checkbox" />
          <span>London</span>
        </div>
        <div>
          <input type="checkbox" />
          <span>Amsterdam </span>
        </div>
        <div>
          <input type="checkbox" />
          <span>New York </span>
        </div>
        <div>
          <input type="checkbox" />
          <span>Berlin</span>
        </div>
      </CheckBoxStyle>
    </form>
  );
}

export default LocationSearchForm;
