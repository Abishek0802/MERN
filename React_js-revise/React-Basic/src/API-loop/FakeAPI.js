import { useEffect, useState } from "react";
import FakeAPIdata from "./FakeAPIdata";

function FakeAIP() {
  let [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <>
      <div className="productDis">
        <h1>
          Name:{"       "}
          {product.category}
        </h1>
        <h3>
          Price:{"     "}
          {product.price}
        </h3>
        <img src={product.image} alt="" />
        <FakeAPIdata image={product.image} price={product.price} />
      </div>
    </>
  );
}

export default FakeAIP;
