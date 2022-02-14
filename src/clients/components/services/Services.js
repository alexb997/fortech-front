import { Col, Container, Row, Button } from "react-bootstrap";
import VisitForRepairs from "./VisitForRepairs";
import YouHaveOptions from "./YouHaveOptions";
import { useState } from "react";
import NavBar from "../../../navigation/navBar";
import "./Services.css";
import image from "./info-zone.jpg";
import tep from "./tep.jpg";
import QuickScroll from "./QuickScroll";

function Services() {
  const [underWarranty, setUnderWarranty] = useState(true);
  return (
    <div className="services">
      <NavBar />
      <div className="empty"></div>

      <QuickScroll />

      <div className="empty"></div>
      <Container fluid>
        <img src={image} style={{ "margin-left": "5%" }} />
      </Container>

      <div className="empty"></div>
      <Container className="center">
        <Row>
          <h2>Is your car still under CarTalk's limited warranty?</h2>
        </Row>
        <Row className="justify-content-center">
          <Col sm={1} offset={6}>
            <Button onClick={() => setUnderWarranty(true)}>Yes</Button>
          </Col>
          <Col sm={1}>
            <Button onClick={() => setUnderWarranty(false)}>No</Button>
          </Col>
        </Row>
        {underWarranty ? <YouHaveOptions /> : <VisitForRepairs />}
      </Container>

      <div className="empty"></div>
      <Container fluid>
        <img src={tep} style={{ "margin-left": "10%" }} />
      </Container>
    </div>
  );
}
export default Services;
