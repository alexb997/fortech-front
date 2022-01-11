import "./Profile.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function Profile() {
  return (
    <Container>
      <Col>
        <Row>
          <Icon.PersonFill size={50} />
        </Row>
        <Row>
          <h1>User Profile</h1>
        </Row>
        <Row>
          <div className="client-container-data">
            <h4>Static Username</h4>
            <p className="info-column">
              {/* <p>Password: Static-Pass</p> */}
              <p>Address: Static-address</p>
              <p>Phone: Static-phone</p>
              <p>Number of cars: 0</p>
            </p>
          </div>
        </Row>
        <Row>
          <span classname="actions">
            <Button variant="info">Cars List</Button>
          </span>
        </Row>
      </Col>
    </Container>
  );
}

export default Profile;
