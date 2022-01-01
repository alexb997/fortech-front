import React, { useState } from "react";
import AppRouter from "./clients/routes/Router";
import { doLogin, doLogout } from "./actions/auth";
import NavBar from "./navigation/navBar";
import "./App.css";
import { connect } from "react-redux";

const App = ({ auth, doLogin, doLogout }) => (
  <div className="App">
    <header>
      <h1>Car Insurance Management App</h1>
      <hr />
      <NavBar doLogin={doLogin} doLogout={doLogout} auth={auth} />
    </header>
    <AppRouter />
  </div>
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { doLogin, doLogout })(App);
