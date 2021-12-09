import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CarContainer from "./CarContainer";

function RemoveCar() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [car, setCar] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/cars/cars/" + id)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setCar(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const confirmRemoval = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:8080/cars/cars/" + id, requestOptions).then(
      (response) => {
        console.log(response);
      }
    );
  };

  return (
    <div>
      <h3>Are you sure? </h3>
      {isLoading && <p>Loading...</p>}
      <CarContainer car={car} />
      <input type="button" onClick={confirmRemoval} value="YES" />
    </div>
  );
}

export default RemoveCar;
