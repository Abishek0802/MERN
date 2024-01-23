// DisplayInfo.js
import React from "react";

const DisplayInfo = ({ userInfo }) => {
  return (
    <div>
      <h2>Displaying Information:</h2>
      <p>Name: {userInfo.name}</p>
      <p>Age: {userInfo.age}</p>
    </div>
  );
};

export default DisplayInfo;
