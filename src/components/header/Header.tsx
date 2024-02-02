// import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import "./Header.css"

function Header() {
    return (
        <>
          <nav>
            <h1>THE PLANETS</h1>
            <ul>
              <Link to="mercury"><li>MERCURY</li></Link>
              <li>VENUS</li>
              <li>EARTH</li>
              <li>MARS</li>
              <li>JUPITER</li>
              <li>SATURN</li>
              <li>URANUS</li>
              <li>NEPTUNE</li>
            </ul>
          </nav>
        </>
    )
}

export default Header;