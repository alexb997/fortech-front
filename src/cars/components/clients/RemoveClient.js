import { useEffect, useState } from "react";
import { useParams } from "react-router";

function RemoveClient() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [client, setClient] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/clients/clients" + id)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setClient(data);
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
    fetch("http://localhost:8080/clients/clients" + id, requestOptions).then(
      (response) => {
        console.log(response);
      }
    );
  };

  return (
    <div>
      <h3>Are you sure? </h3>
      {isLoading && <p>Loading...</p>}
      <span>Username: {client.username}</span>
      <input type="button" onClick={confirmRemoval} value="YES" />
    </div>
  );
}

export default RemoveClient;
