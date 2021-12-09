import React from "react";
import AppRouter from "./clients/routes/Router";
import NavBar from "./clients/components/navigation/navBar";
import "./App.css";

const Header = () => {
  return (
    <div className="App">
      <header>
        <h1>Car Insurance Management App</h1>
        <hr />
        <NavBar />
      </header>
      <AppRouter />
    </div>
  );
};

export default Header;
