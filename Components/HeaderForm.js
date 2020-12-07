import React, { useState } from "react";
import SearchJobs from "./SearchJobs";
import { Header } from "./StylesComponents";

function HeaderForm() {

  return (
    <Header>
        <div>
        <h1 className="header">Github Jobs</h1>
        </div>
    </Header>
  );
}

export default HeaderForm;
