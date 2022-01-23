import { Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact">
      <h3>External quick links</h3>
      <Row>
        <Col>
          <Row>A</Row>
          <Row>A</Row>
          <Row>A</Row>
          <Row>A</Row>
        </Col>
        <Col sm={3}>
          <Row>A</Row>
          <Row>A</Row>
          <Row>A</Row>
          <Row>A</Row>
        </Col>
        <Col sm={3}>
          <Row>A</Row>
          <Row>A</Row>
          <Row>A</Row>
          <Row>A</Row>
        </Col>
        <Col sm={3}>
          <Row>A</Row>
          <Row>A</Row>
          <Row>A</Row>
          <Row>A</Row>
        </Col>
      </Row>
      <div className="contact-info">
        <p>
          <span className="data">E-mail: </span>
          <span className="info"> randomEmail@email.com</span>
        </p>
        <p>
          <span className="data">Phone: </span>
          <span className="info"> 0001112223344</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
