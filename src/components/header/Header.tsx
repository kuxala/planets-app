// import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
    return (
        <>
          <nav>
            <h1>THE PLANETS</h1>
            <ul>
              <li>MERCURY</li>
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