import { Row, Col, Container } from "react-bootstrap";
import logo from "./navigation/car-logo.png";
import info from "./info.png";
import links from "./links.png";
import * as Icon from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className="space-between">
          <Col md={3}>
            <img
              src={logo}
              width="90"
              height="50"
              className="d-inline-block align-top"
            />
            <Icon.Facebook size={30} />
            <Icon.Twitter size={30} />
          </Col>
          <Col md={{ span: 3, offset: 6 }}>
            <img src={info} className="d-inline-block align-top" />
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <img src={links} className="d-inline-block align-top" />
      </Container>
    </div>
  );
}

export default Footer;
