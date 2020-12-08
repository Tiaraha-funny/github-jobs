import React, { useContext, useState } from "react";
import { Contexts } from "./GlobalContexts";
import { CheckBoxStyle } from "./StylesComponents";

function LocationSearchForm() {
  const { handleFullTimeJob, handleLondonJobs, handleNewYorkJobs } = useContext(Contexts);
  const [checked, setChecked] = useState(true);
  const [ city, setCity ] = useState('');

  console.log(checked);

  return (
    <form>
      <div className="filters">
        <input
          type="checkbox"
          name="fullTime"
          checked={checked}
          onChange={handleFullTimeJob}
        />{" "}
        Full time
      </div>

      <div className="input-filters">
        <label>Location</label>
        <div className="form-group">
          <input
            type="text"
            value={city}
            name="location"
            onChange={(e) => setCity(e.target.value)}
            placeholder="City, city, zipe code or country"
          />
        </div>
      </div>

      <CheckBoxStyle>
        <div>
          <input type="checkbox" name="london"  onChange={handleLondonJobs} />
          <span>London</span>
        </div>
        <div>
          <input type="checkbox" name="amsterdam" />
          <span>Amsterdam </span>
        </div>
        <div>
          <input type="checkbox" name="new york" onChange={handleNewYorkJobs} />
          <span>New York </span>
        </div>
        <div>
          <input type="checkbox" name="berlin" />
          <span>Berlin</span>
        </div>
      </CheckBoxStyle>
    </form>
  );
}

export default LocationSearchForm;
