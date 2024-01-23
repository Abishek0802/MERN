function Maping() {
  let countries = [
    {
      id: 1,
      name: "India",
      capital: "Delhi",
    },
    {
      id: 2,
      name: "Paksitan",
      capital: "Islamabadi",
    },
    {
      id: 3,
      name: " Australia",
      capital: "Canberra",
    },
  ];
  return (
    <>
      <div className="countries-container">
        {countries.map((country) => {
          return (
            <div className="country" key={country.id}>
              <h1>{country.name}</h1>
              <p>{country.capital}</p>
            </div>

            //
          );
        })}
      </div>
    </>
  );
}
export default Maping;
