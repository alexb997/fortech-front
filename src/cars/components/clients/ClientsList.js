import { useEffect, useState } from "react";
import CarContainer from "../cars/CarContainer";

function ClientsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [clientsList, setClientsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/clients/clients")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setClientsList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>Api call to backend</h3>
      {isLoading && <p>Loading...</p>}
      {clientsList.map((c, index) => (
        <div key={index}>
          <p>Username: {c.username}</p>
          <p>CarID: {c.carID}</p>
          {c.ownedCars.forEach((element) => {
            <CarContainer car={element} />;
          })}
        </div>
      ))}
    </div>
  );
}

export default ClientsList;
