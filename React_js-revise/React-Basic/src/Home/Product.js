function Product(props) {
  return (
    <>
      <div className="Product">
        <img src={props.img} />
        <h1>{props.name}</h1>
        <h2> {props.native}</h2>
      </div>
    </>
  );
}
export default Product;
