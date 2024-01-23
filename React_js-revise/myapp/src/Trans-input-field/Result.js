// App.js
import React, { useState } from "react";
import InputForm from "./InputForm";
import DisplayInfo from "./DisplayInfo";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  const handleInputSubmit = (Data) => {
    console.log(Data);
    setUserInfo(Data);
  };

  return (
    <div className="DisplayInfo">
      <InputForm onInputSubmit={handleInputSubmit} />
      {userInfo && <DisplayInfo userInfo={userInfo} />}
    </div>
  );
}

export default App;
