import "./Profile.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function Profile() {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [client, setClient] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/clients/client/" + username)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setClient(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const confirmAssured = (name) => {
    client.ownedCars.map();
  };

  return (
    <Container>
      <Col>
        <Row>
          <Icon.PersonFill size={50} />
        </Row>
        <Row>
          <h4>{client.username}</h4>
        </Row>
        <Row>
          <div className="client-container-data">
            <p className="info-column">
              <p>Address: {client.address}</p>
              <p>Phone: {client.phone}</p>
              <p>
                Number of cars:{" "}
                {client.ownedCars ? client.ownedCars.lengtth() : 0}
              </p>
            </p>
            {client.ownedCars ? <p>Owned cars</p> : <p>No owned cars</p>}
          </div>
        </Row>
        <Row></Row>
      </Col>
    </Container>
  );
}

export default Profile;
