import './CarContainer.css'

const CarContainer = (props) => {
    return (
      <div className="car-container">
          <h4>{props.car.plate}</h4>
          <p className="space-around">
              <span >{props.car.manufacturer}</span>
              <span >{props.car.assured.toString()}</span>
          </p>
      </div>
    );
};
  
export default CarContainer;