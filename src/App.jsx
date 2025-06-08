import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.svg";
import Hero from "./Hero";
import AboutLink from "./PageLink/AboutLink";
import Popular from "./PageLink/PopularLink";
import FeatureLink from "./PageLink/FeatureLink";

export default function App() {
  function menu() {
    let x = document.getElementById("x");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
    <Router>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
            <p>Elecar</p>
          </div>
          <span
            id="menu"
            onClick={() => {
              menu();
            }}
          >
            &#9776;
          </span>
          <ul id="x">
            <li>
              <NavLink
                className={(e) => {
                  return e.isActive ? "blue" : "";
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(e) => {
                  return e.isActive ? "blue" : "";
                }}
                to="AboutLink"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(e) => {
                  return e.isActive ? "blue" : "";
                }}
                to="Popular"
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(e) => {
                  return e.isActive ? "blue" : "";
                }}
                to="Feature"
              >
                Featured
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="AboutLink" element={<AboutLink />}></Route>
          <Route path="Popular" element={<Popular />}></Route>
          <Route path="feature" element={<FeatureLink />}></Route>
        </Routes>
      </header>
    </Router>
  );
}
