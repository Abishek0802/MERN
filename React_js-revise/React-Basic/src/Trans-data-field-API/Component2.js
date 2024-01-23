// Component2.js

import React from "react";

const Component2 = ({ data }) => {
  return (
    <div
      className="Displaydata"
      style={{
        backgroundColor: "lightgreen",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Component 2 - Data Display</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Component2;
