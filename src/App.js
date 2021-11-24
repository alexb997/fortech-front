import React from 'react';
import AppRouter from './cars/routes/Router'

const Header = () => {
  return (
    <div className="App">
      <header>
        <h1>Car Assurance Management App</h1>
        <hr />
      </header>
      <AppRouter/>
    </div>
  );
};

export default Header;
