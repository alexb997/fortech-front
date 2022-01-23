import { Card } from "react-bootstrap";

const InsuranceContainer = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src="https://www.dsm.com/corporate/about/corporate-governance/position-papers.thumb.800.480.png"
        alt="Card image cap"
      />
      <div className="card-body">
        <p className="card-title">Insurance B</p>
        <p class="card-text">Short description of the insurance plan</p>
        <Card.Link href="#">Link to insurance description</Card.Link>
      </div>
    </Card>
  );
};

export default InsuranceContainer;
