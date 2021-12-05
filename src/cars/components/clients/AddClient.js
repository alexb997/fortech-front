import { useEffect, useState } from "react";
import AddCar from "../cars/AddCar";

const AddClient = () => {
  const [client, setClient] = useState({});
  const [username, setUsername] = useState("");

  useEffect(() => {
    setClient({
      username: username,
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
        username: username,
      }),
    };
    fetch("http://localhost:8080/clients/clients", requestOptions)
      .then((response) => response.json())
      .then((data) => setClient(data));
  };
  const usernameChange = (e) => {
    setUsername(e);
    setClient({
      username: username,
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
          Username:
          <input
            type="text"
            name="username"
            placeholder={client.username}
            onKeyUp={(e) => usernameChange(e.target.value)}
            onKeyDown={(e) => usernameChange(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <hr />
      <h3>Client to be added</h3>
      <p>Username: {username}</p>
      <h3> Insert car(s) </h3>
      <h5> Pick number of cars </h5>
      <AddCar />
    </div>
  );
};

export default AddClient;
