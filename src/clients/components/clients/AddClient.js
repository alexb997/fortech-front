import { useEffect, useState } from "react";
import AddCar from "../cars/AddCar";
import CarContainer from "../cars/CarContainer";

const AddClient = () => {
  const [client, setClient] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(0);

  useEffect(() => {
    setClient({
      username: username,
      password: password,
      address: address,
      phone: phone,
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
        password: password,
        address: address,
        phone: phone,
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
  const passwordChange = (e) => {
    setPassword(e);
    setClient({
      password: password,
    });
  };
  const addressChange = (e) => {
    setAddress(e);
    setClient({
      address: address,
    });
  };
  const phoneChange = (e) => {
    setPhone(e);
    setClient({
      phone: phone,
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
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder={client.password}
            onKeyUp={(e) => passwordChange(e.target.value)}
            onKeyDown={(e) => passwordChange(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            placeholder={client.address}
            onKeyUp={(e) => addressChange(e.target.value)}
            onKeyDown={(e) => addressChange(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="number"
            name="phone"
            placeholder={client.phone}
            onKeyUp={(e) => phoneChange(e.target.value)}
            onKeyDown={(e) => phoneChange(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <hr />
      <h3>Client to be added</h3>
      <p>Username: {username}</p>
      <span>
        Address: {address} , phone: {phone}
      </span>
      <h2>Add new owned cars</h2>
    </div>
  );
};

export default AddClient;
