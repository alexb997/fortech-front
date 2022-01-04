import "./Cars.css";

const CarContainer = (props) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://www.321rentacar.ro/assets/themes/321rent5/img/321rentacar-inchirieri-auto.png"
        alt="Card image cap"
      />
      <div className="car-container-data">
        <h4 className="card-title">{props.car.name}</h4>
        <p className="info-column">
          <span>{props.car.kind}</span>
          <span>{props.car.brand}</span>
        </p>
      </div>
    </div>
  );
};

export default CarContainer;
