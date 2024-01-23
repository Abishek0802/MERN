function FakeAPIdata(props) {
  return (
    <>
      <div className="APIdata">
        <img src={props.image} alt="" />
        <h1>{props.price}</h1>
      </div>
    </>
  );
}
export default FakeAPIdata;
