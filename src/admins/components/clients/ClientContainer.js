import "./Clients.css";

const ClientContainer = (props) => {
  return (
    <div className="client-container">
      <div className="client-container-data">
        <h4>{props.client.username}</h4>
        <p className="info-column">
          <p>Password: {props.client.password}</p>
          <p>Address: {props.client.address}</p>
          <p>Phone: {props.client.phone}</p>
        </p>
      </div>
    </div>
  );
};

export default ClientContainer;
