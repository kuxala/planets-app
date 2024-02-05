// import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import "./Header.css";

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
          onClick={() => {}}
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
          <Link to="mars">
            <li>MARS</li>
          </Link>
          <Link to="jupiter">
            <li>JUPITER</li>
          </Link>
          <Link to="saturn">
            <li>SATURN</li>
          </Link>
          <Link to="uranus">
            <li>URANUS</li>
          </Link>
          <Link to="neptune">
            <li>NEPTUNE</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Header;
