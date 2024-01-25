import { TheContext } from "../App";
import { useContext } from "react";

export default function ProductChild1() {
  let u = useContext(TheContext);
  return (
    <>
      <div style={{ backgroundColor: "red", color: "white" }}>
        <p>Hi this third {u} </p>
      </div>
    </>
  );
}
