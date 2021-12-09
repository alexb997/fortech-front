import { useEffect, useState, useHistory } from "react";

import "./Clients.css";

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

  const confirmRemoval = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:8080/clients/clients/" + id, requestOptions).then(
      (response) => {
        let updatedClients = clientsList.filter((i) => i.id !== id);
        setClientsList(updatedClients);
        console.log(response);
      }
    );
  };

  return (
    <div>
      <button>Delete All</button>
      {isLoading && <p>Loading...</p>}
      {clientsList.length != 0 ? (
        clientsList.map((c, index) => (
          <div className="client-container" key={index}>
            <p>Username: {c.username}</p>
            <p>Passowrd: {c.password}</p>
            <p>
              Owned cars documented:{" "}
              {c.ownedCars === null ? "0" : c.ownedCars.length}
            </p>
            <span classname="actions">
              <button>Cars List</button>
              <button></button>
              <button onClick={() => confirmRemoval(c.id)}>Delete</button>
            </span>
          </div>
        ))
      ) : (
        <h3>No clients documented</h3>
      )}
    </div>
  );
}

export default ClientsList;
