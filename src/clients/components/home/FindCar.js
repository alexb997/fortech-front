import { Row, Col, Container } from "react-bootstrap";

function FindCar() {
  return (
    <section className="budget-search">
      <Container className="search-zone shadow p-3 mb-5 bg-white rounded">
        <h1 className="d-flex justify-content-center ">
          Find cars any budget will love
        </h1>
        <Container>
          <p>
            <small>What kinds of cars do you want? </small>
          </p>
        </Container>
      </Container>
    </section>
  );
}

export default FindCar;
