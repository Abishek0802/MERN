// Component1.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Component.css";

const Component1 = ({ onDataFetch }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        onDataFetch(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [onDataFetch]);

  return (
    <div className="Component1">
      <h2>Component 1 - Data Fetch</h2>
    </div>
  );
};

export default Component1;
