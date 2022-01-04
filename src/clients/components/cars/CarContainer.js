import "./Cars.css";

const CarContainer = (props) => {
  return (
    <div className="car-container">
      <div className="car-container-data">
        <h4>{props.car.name}</h4>
        <p className="info-column">
          <span>{props.car.kind}</span>
          <span>{props.car.brand}</span>
        </p>
      </div>
    </div>
  );
};

export default CarContainer;
