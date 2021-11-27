import './CarContainer.css'

const CarContainer = (props) => {
    let assured = "" + props.car.assured;
    return (
      <div className="car-container">
          <h4>{props.car.plate}</h4>
          <p className="space-around">
              <span >{props.car.manufacturer}</span>
              <span >{assured}</span>
          </p>
      </div>
    );
};
  
export default CarContainer;