import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Car Assurance Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Cars List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Car
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
