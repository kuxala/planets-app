import { useState } from "react";
import styled from "styled-components";


const StyledButton = styled.button`
  color: #FFF;
  font-family: Spartan;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 208.333% */
  letter-spacing: 2.571px;
  text-transform: uppercase;
  text-align: left;
  padding-left: 28px;
  max-width: 350px;
  height: 48px;
  background-color: transparent;
  border: 1px solid rgba(246, 246, 246, 0.3);
  
  &:focus{
    background-color: #1EC1A2;
  }
`;
function Uranus() {
  const [mainImage, setMainImage] = useState(
    "../../public/assets/planet-uranus.svg"
  );
  const [description, setDescription] = useState(
    "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
   );

  return (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-uranus.svg");
              setDescription("The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.")
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-uranus-internal.svg");
              setDescription("The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.")
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/uranus-geology.png");
              setDescription("Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.")
            }}
          >
            SURFACE GEOLOGY
          </a>
        </div>
        <div className="left-col">
          <img src={mainImage} className="image animated-image" width="450px" height="450px" />
        </div>
        <div className="right-col animated-text">
          <h1>URANUS</h1>
          <p id="description">
          {description}
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Uranus_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <StyledButton
              onClick={() => {
                setMainImage("../../public/assets/planet-uranus.svg");
                setDescription("The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.")
              }}
            >
              01 OVERVIEW
            </StyledButton>
            <StyledButton
              onClick={() => {
                setMainImage("../../public/assets/planet-uranus-internal.svg");
                setDescription("The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.")
              }}
            >
              02 INTERNAL STRUCTURE
            </StyledButton>
            <StyledButton
              onClick={() => {
                setMainImage("../../public/assets/uranus-geology.png");
                setDescription("Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.")
              }}
            >
              03 SURFACE GEOLOGY
            </StyledButton>
          </div>
        </div>
      </main>
      <section className="animated-text-bottom">
        <div>
          <p>ROTATION TIME</p>
          <h1>17.2 hours</h1>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <h1>84 years</h1>
        </div>
        <div>
          <p>RADIUS</p>
          <h1>25,362 km</h1>
        </div>
        <div  id="padding-bot">
          <p>AVERAGE TEMO</p>
          <h1>-195°c</h1>
        </div>
      </section>
    </>
  );
}

export default Uranus;
