// import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import "./Header.css";
import Venus from "../pages/venus/Venus";
import Mercury from "../mainPage/Page";

function Header() {
  return (
    <>
      <nav>
        <h1>THE PLANETS</h1>
        <img
          src="../../public/assets/icon-hamburger.svg"
          width="30px"
          height="30px"
          className="menu"
          onClick={() => {
            
          }}
        />
        <ul>
          <Link to="mercury">
            <li>MERCURY</li>
          </Link>
          <Link to="venus">
            <li>VENUS</li>
          </Link>
          <Link to="earth">
            <li>EARTH</li>
          </Link>
          <li>MARS</li>
          <li>JUPITER</li>
          <li>SATURN</li>
          <li>URANUS</li>
          <li>NEPTUNE</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
