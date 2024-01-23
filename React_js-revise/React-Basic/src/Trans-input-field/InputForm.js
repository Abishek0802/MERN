import { useState } from "react";

function InputForm({ onInputSubmit }) {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");

  function changeName(event) {
    setName(event.target.value);
  }
  function changeAge(event) {
    setAge(event.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onInputSubmit({ name, age });
  };
  return (
    <>
      <form className="UserInput" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the name"
          value={name}
          onChange={changeName}
        />
        <input
          type="number"
          placeholder="Enter the age"
          value={age}
          onChange={changeAge}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default InputForm;
