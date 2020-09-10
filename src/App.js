import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Navigation from "./Components/Navigation/Navigation";
import Login from "./Components/Login/login";
function App() {
  return (
    <div className="background">
      <Navigation />
      <Login />
    </div>
  );
}

export default App;
