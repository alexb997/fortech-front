import './CarContainer.css'

const CarContainer = (car) => {
    return (
      <div className="car-container">
          <h4>"Car Plate"</h4>
          <p className="space-around">
              <span >"Car Manufacturer"</span>
              <span >"Car Assured"</span>
          </p>
      </div>
    );
};
  
export default CarContainer;