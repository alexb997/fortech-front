import { useEffect, useState } from "react";
import CarContainer from "./CarContainer";

const AddCar = () => {
  const [car, setCar] = useState({});
  const [plate, setPlate] = useState("");
  const [manufacturer, setManufacturer] = useState("");

  useEffect(() => {
    setCar({
      plate: plate,
      manufacturer: manufacturer,
      assured: false,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plate: plate,
        manufacturer: manufacturer,
      }),
    };
    fetch("http://localhost:8080/api/cars/", requestOptions)
      .then((response) => response.json())
      .then((data) => setCar(data));
  };
  const manufacturerChange = (e) => {
    setManufacturer(e);
    setCar({
      plate: plate,
      manufacturer: manufacturer,
      assured: false,
    });
  };
  const plateChange = (e) => {
    setPlate(e);
    setCar({
      plate: plate,
      manufacturer: manufacturer,
      assured: false,
    });
  };

  return (
    <div>
      <h3>Input form</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Plate:
          <input
            type="text"
            name="plate"
            placeholder={car.plate}
            onChange={(e) => plateChange(e.target.value)}
          />
        </label>
        <label>
          Manufacturer:
          <input
            type="text"
            name="manufacturer"
            placeholder={car.manufacturer}
            onChange={(e) => manufacturerChange(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <hr />
      <h3>Car to be added</h3>
      <CarContainer car={car} />
    </div>
  );
};

export default AddCar;
