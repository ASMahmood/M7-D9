import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Route path="/" exact render={(props) => <HomePage {...props} />} />
    </>
  );
}

export default App;
