// import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import styled from "styled-components";

const StyledMercury = styled.li`
  padding-top: 32px;
  color: #fff;
  font-family: Spartan;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 227.273% */
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 8vh;
  &:hover {
    border-top: 5px solid #419ebb;
  }
`;
const StyledVenus = styled.li`
  padding-top: 32px;
  color: #fff;
  font-family: Spartan;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 227.273% */
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 8vh;
  &:hover {
    border-top: 5px solid #eda249;
  }
`;
const StyledEarth = styled.li`
  padding-top: 32px;
  color: #fff;
  font-family: Spartan;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 227.273% */
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 8vh;
  &:hover {
    border-top: 5px solid #6d2ed5;
  }
`;
const StyledMars = styled.li`
  padding-top: 32px;
  color: #fff;
  font-family: Spartan;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 227.273% */
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 8vh;
  &:hover {
    border-top: 5px solid #d14c32;
  }
`;

const Styledjupiter = styled.li`
  padding-top: 32px;
  color: #fff;
  font-family: Spartan;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 227.273% */
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 8vh;
  &:hover {
    border-top: 5px solid #D83A34;
  }
`;
const StyledSaturn = styled.li`
  padding-top: 32px;
  color: #fff;
  font-family: Spartan;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 227.273% */
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 8vh;
  &:hover {
    border-top: 5px solid #CD5120;
  }
`;
const StyledUranus = styled.li`
  padding-top: 32px;
  color: #fff;
  font-family: Spartan;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 227.273% */
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 8vh;
  &:hover {
    border-top: 5px solid #1EC1A2;
  }
`;
const StyledNeptune = styled.li`
  padding-top: 32px;
  color: #fff;
  font-family: Spartan;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 227.273% */
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 8vh;
  &:hover {
    border-top: 5px solid #2D68F0;
  }
`;

function Header() {
  const [show, setShow] = useState<any>(false);
  console.log(show)
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
            setShow(!show);
          }}
        />

        <ul>
          <Link to="mercury">
            <StyledMercury>MERCURY</StyledMercury>
          </Link>
          <Link to="venus">
            <StyledVenus>VENUS</StyledVenus>
          </Link>
          <Link to="earth">
            <StyledEarth>EARTH</StyledEarth>
          </Link>
          <Link to="mars">
            <StyledMars>MARS</StyledMars>
          </Link>
          <Link to="jupiter">
            <Styledjupiter>JUPITER</Styledjupiter>
          </Link>
          <Link to="saturn">
            <StyledSaturn>SATURN</StyledSaturn>
          </Link>
          <Link to="uranus">
            <StyledUranus>URANUS</StyledUranus>
          </Link>
          <Link to="neptune">
            <StyledNeptune>NEPTUNE</StyledNeptune>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Header;
