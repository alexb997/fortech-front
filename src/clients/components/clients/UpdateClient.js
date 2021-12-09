import { useEffect, useState } from "react";
import { useParams } from "react-router";

function UpdateClient() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [client, setClient] = useState({});
  const [plate, setPlate] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/clients/clients/" + id)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setClient(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: client.id,
        username: username,
        password: password,
        ownedCars: [
          {
            plate: plate,
            manufacturer: manufacturer,
          },
          {
            plate: manufacturer,
            manufacturer: plate,
          },
        ],
      }),
    };
    fetch("http://localhost:8080/clients/clients/" + id, requestOptions)
      .then((response) => response.json())
      .then((data) => setClient(data));
  };

  return (
    <div>
      <h3>Updating client:</h3>
      {isLoading && <p>Loading...</p>}
      <span>Username: {client.username}</span>
      <hr />
      <h3>Input form</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder={client.username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder={client.password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Car Plate:
          <input
            type="text"
            name="plate"
            onChange={(e) => setPlate(e.target.value)}
          />
        </label>
        <label>
          Car Manufacturer:
          <input
            type="text"
            name="manufacturer"
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default UpdateClient;
