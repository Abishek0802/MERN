function Button() {
  function dosomething(data) {
    alert("You have clicked some " + data);
  }
  return (
    <>
      <div>
        <button
          className="Button"
          onClick={() => {
            dosomething("actress");
          }}
        >
          {" "}
          click here
        </button>
      </div>
    </>
  );
}
export default Button;
