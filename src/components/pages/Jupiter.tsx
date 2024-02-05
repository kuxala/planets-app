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
    background-color: #D83A34;
  }
`;
function Jupiter() {
  const [mainImage, setMainImage] = useState(
    "../../public/assets/planet-jupiter.svg"
  );
  const [description, setDescription] = useState(
    "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun."
   );
   
  return (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-jupiter.svg");
              setDescription("Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.")
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-jupiter-internal.svg");
              setDescription("When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.")
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/jupiter-geology.png");
              setDescription("The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.")
            }}
          >
            SURFACE GEOLOGY
          </a>
        </div>
        <div className="left-col">
          <img src={mainImage} className="image animated-image" width="550px" height="550px" />
        </div>
        <div className="right-col animated-text">
          <h1>JUPITER</h1>
          <p id="description">
          {description}
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Jupiter_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <StyledButton
              onClick={() => {
                setMainImage("../../public/assets/planet-jupiter.svg");
                setDescription("Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.")
              }}
            >
              01 OVERVIEW
            </StyledButton>
            <StyledButton
              onClick={() => {
                setMainImage("../../public/assets/planet-jupiter-internal.svg");
                setDescription("When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.")
              }}
            >
              02 INTERNAL STRUCTURE
            </StyledButton>
            <StyledButton
              onClick={() => {
                setMainImage("../../public/assets/jupiter-geology.png");
                setDescription("The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.")
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
          <h1>9.93 hours</h1>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <h1>11.86 years</h1>
        </div>
        <div>
          <p>RADIUS</p>
          <h1>69,911 km</h1>
        </div>
        <div  id="padding-bot">
          <p>AVERAGE TEMO</p>
          <h1>-108°c</h1>
        </div>
      </section>
    </>
  );
}

export default Jupiter;
