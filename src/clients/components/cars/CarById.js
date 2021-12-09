import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CarContainer from "./CarContainer";

function CarById() {
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

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <CarContainer car={car} />
    </div>
  );
}

export default CarById;
