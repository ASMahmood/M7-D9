import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <>
      <NavBar />
      <Route path="/" exact render={(props) => <HomePage {...props} />} />
      <Route path="/song/:id" render={(props) => <DetailPage {...props} />} />
    </>
  );
}

export default App;
