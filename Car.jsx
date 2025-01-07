import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    name: "Ferrari",
    model: "Latext",
    year: 8282,
  });

  function handleNameChange(e) {
    setCar((prevCar) => ({
      ...prevCar,
      name: e.target.value,
    }));
  }

  function handleYearChange(e) {
    setCar((prevCar) => ({
      ...prevCar,
      year: e.target.value,
    }));
  }

  function handleModelChange(e) {
    setCar((prevCar) => ({
      ...prevCar,
      model: e.target.value,
    }));
  }

  return (
    <div className="box">
      <div className="car-details">
        <h3>Car Details</h3>
        <p>
          <span>Year:</span> {car.year}
        </p>
        <p>
          <span>Name:</span> {car.name}
        </p>
        <p>
          <span>Model:</span> {car.model}
        </p>
      </div>

      <p className="name">Enter the name of the car:</p>
      <input
        className="nameBox"
        type="text"
        placeholder="Car name"
        onChange={handleNameChange}
      />
      <hr />

      <p className="number">Enter the year the car was manufactured:</p>
      <input
        className="numBox"
        type="number"
        placeholder="Year"
        onChange={handleYearChange}
      />
      <hr />

      <p className="model">Enter the model of the car:</p>
      <input
        className="modBox"
        type="text"
        placeholder="Model"
        onChange={handleModelChange}
      />
    </div>
  );
}

export default Car;
