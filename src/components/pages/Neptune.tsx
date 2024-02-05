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
    background-color: #2D68F0;
  }
`;
function Neptune() {
  const [mainImage, setMainImage] = useState(
    "../../public/assets/planet-neptune.svg"
  );
  const [description, setDescription] = useState(
    "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
   );

  return (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-neptune.svg");
              setDescription("Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.")
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-uranus-neptune.svg");
              setDescription("Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.")
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/neptune-geology.png");
              setDescription("Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.")
            }}
          >
            SURFACE GEOLOGY
          </a>
        </div>
        <div className="left-col">
          <img src={mainImage} className="image animated-image" width="440px" height="440px" />
        </div>
        <div className="right-col animated-text">
          <h1>NEPTUNE</h1>
          <p id="description">
          {description}
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Neptune_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <StyledButton
              onClick={() => {
                setMainImage("../../public/assets/planet-neptune.svg");
                setDescription("Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.")
              }}
            >
              01 OVERVIEW
            </StyledButton>
            <StyledButton
              onClick={() => {
                setMainImage("../../public/assets/planet-neptune-internal.svg");
                setDescription("Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.")
              }}
            >
              02 INTERNAL STRUCTURE
            </StyledButton>
            <StyledButton
              onClick={() => {
                setMainImage("../../public/assets/neptune-geology.png");
                setDescription("Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.")
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
          <h1>16.08 hours</h1>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <h1>164.79 years</h1>
        </div>
        <div>
          <p>RADIUS</p>
          <h1>24,622 km</h1>
        </div>
        <div  id="padding-bot">
          <p>AVERAGE TEMO</p>
          <h1>-201°c</h1>
        </div>
      </section>
    </>
  );
}

export default Neptune;
