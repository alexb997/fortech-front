import { Col, Container, Row, Button, Card } from "react-bootstrap";
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
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2>
              <b>CarTalk customers get great benefits</b>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="border-0">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="border-0">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="border-0">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <img src={image} /> */}
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
      <Container>
        <Row className="align-items-center">
          <Col>
            <img src="https://www.carmax.com/home/images/service/upfront-fair-color-block.jpg"></img>
          </Col>
          <Col className="text-zone">
            <b>
              <p className="text-subtitle blue-text">Upfront and fair</p>
            </b>
            <p>Know what you'll pay before the work is done.</p>
          </Col>
        </Row>
        <div className="empty"></div>
        <Row className="align-items-center">
          <Col>
            <img src="https://www.carmax.com/home/images/service/upfront-fair-color-block.jpg"></img>
          </Col>
          <Col className="text-zone">
            <b>
              <p className="text-subtitle blue-text">Upfront and fair</p>
            </b>
            <p>Know what you'll pay before the work is done.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Services;
