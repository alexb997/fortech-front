import "./CarContainer.css";
// Will change the look of it
const CarContainer = (props) => {
  let assured = "" + props.car.assured;
  return (
    <div className="car-container-admin">
      <h4>{props.car.plate}</h4>
      <p className="space-around">
        <span>{props.car.manufacturer}</span>
        <span>{assured}</span>
      </p>
    </div>
  );
};

export default CarContainer;
