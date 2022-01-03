import "./CarContainer.css";

const CarContainer = (props) => {
  return (
    <div className="car-container" key={props.key}>
      {props.car.brand}
      <h4>{props.VIN}</h4>
      <p className="space-around">
        <span>{props.car.kind}</span>
        <span>{props.car.brand}</span>
      </p>
    </div>
  );
};

export default CarContainer;
