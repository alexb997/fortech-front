import "./Cars.css";

const CarContainer = (props) => {
  return (
    <div>
      <img
        className="car-img-top"
        src="https://media-service.carmax.com/img/vehicles/21715785/1_cleaned.jpg"
        alt="Card image cap"
      />
      <div className="card-bloc">
        <h4>{props.car.name}</h4>
        <p className="info-column">
                    <span>{props.car.kind}</span>
                    <span>{props.car.brand}</span>
                    <span>{props.car.assured}</span>
        </p>
      </div>
    </div>
  );
};

export default CarContainer;
