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
    background-color: #D14C32;
  }
`;
function Mars() {
  const [mainImage, setMainImage] = useState(
    "../../assets/planet-mars.svg"
  );
  const [description, setDescription] = useState(
    "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet."
   );

  return (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../assets/planet-mars.svg");
              setDescription("Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet.")
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../assets/planet-mars-internal.svg");
              setDescription("Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.")
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../assets/mars-geology.png");
              setDescription("Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.")
            }}
          >
            SURFACE GEOLOGY
          </a>
        </div>
        <div className="left-col">
          <img src={mainImage} className="image animated-image" width="336px" height="336px" />
        </div>
        <div className="right-col animated-text">
          <h1>MARS</h1>
          <p id="description">
            {description}
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Mars_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <StyledButton
              onClick={() => {
                setMainImage("../../assets/planet-mars.svg");
                setDescription("Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet.")
              }}
            >
              01 OVERVIEW
            </StyledButton>
            <StyledButton
              onClick={() => {
                setMainImage("../../assets/planet-mars-internal.svg");
                setDescription("Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.")
              }}
            >
              02 INTERNAL STRUCTURE
            </StyledButton>
            <StyledButton
              onClick={() => {
                setMainImage("../../assets/mars-geology.png");
                setDescription("Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.")
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
          <h1>1.03 days	</h1>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <h1>1.88 years</h1>
        </div>
        <div>
          <p>RADIUS</p>
          <h1>3,389.5 km</h1>
        </div>
        <div  id="padding-bot">
          <p>AVERAGE TEMO</p>
          <h1>−28°c</h1>
        </div>
      </section>
    </>
  );
}

export default Mars;
