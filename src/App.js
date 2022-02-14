import React, { useState } from "react";
import AppRouter from "./clients/routes/Router";
import { doLogin, doLogout } from "./actions/auth";
import "./App.css";
import { connect } from "react-redux";

import Footer from "./Footer";

const App = () => (
  <div className="App">
    <AppRouter />
    <Footer />
  </div>
);

export default App;
