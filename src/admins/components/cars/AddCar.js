import { useEffect, useState } from "react";
import CarContainer from "../../../clients/components/cars/CarContainer";

// Cars database manipulated just by admin, client will have to select car from
//list of cars given by site, if not on list can't assure it here or smth...

const AddCar = () => {
  const [car, setCar] = useState({});
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [kind, setKind] = useState("");

  useEffect(() => {
    setCar({
      name: name,
      brand: brand,
      kind: kind,
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
        name: name,
        brand: brand,
        kind: kind,
      }),
    };
    fetch("http://localhost:8080/cars/cars/", requestOptions)
      .then((response) => response.json())
      .then((data) => setCar(data));
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
          Name:
          <input
            type="text"
            name="name"
            placeholder={car.name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            placeholder={car.brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="kind"
            placeholder={car.kind}
            onChange={(e) => setKind(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddCar;
