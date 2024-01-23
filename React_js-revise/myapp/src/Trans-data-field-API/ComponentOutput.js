// App.js

import React, { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

const ComponentOutput = () => {
  const [data, setData] = useState([]);

  const handleDataFetch = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h1>Fetch and Display Data</h1>
      <Component1 onDataFetch={handleDataFetch} />
      <Component2 data={data} />
    </div>
  );
};

export default ComponentOutput;
