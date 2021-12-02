import { useEffect, useState } from "react";
import { useParams } from "react-router";

function UpdateClient() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [client, setClient] = useState({});
  const [carID, setCarID] = useState();
  const [username, setUsername] = useState();

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
        carID: carID,
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
          CarID:
          <input
            type="text"
            name="carID"
            placeholder={client.carID}
            onChange={(e) => setCarID(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default UpdateClient;
