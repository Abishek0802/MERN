import { TheContext } from "../App";
import React from "react";

import { useContext } from "react";
import ProductChild1 from "./ProductChild1";
function Product() {
  let u = useContext(TheContext);
  return (
    <>
      <div style={{ backgroundColor: "transparent", color: "white" }}>
        <p>Hi this is second {u} </p>
      </div>
      <ProductChild1></ProductChild1>
    </>
  );
}

export default Product;
