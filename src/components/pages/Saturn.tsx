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
    background-color: #CD5120;
  }
`;
function Saturn() {
  const [mainImage, setMainImage] = useState(
    "../../public/assets/planet-saturn.svg"
  );
  const [description, setDescription] = useState(
    "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth."
   );
  return (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-saturn.svg");
              setDescription("Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.")
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-saturn-internal.svg");
              setDescription("Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.")
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/saturn-geology.png");4
              setDescription("The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ")
            }}
          >
            SURFACE GEOLOGY
          </a>
        </div>
        <div className="left-col ">
          <img src={mainImage} className="image animated-image" width="500px" height="500px" />
        </div>
        <div className="right-col animated-text">
          <h1>Saturn</h1>
          <p id="description">
            {description}
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Saturn_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <StyledButton
              onClick={() => {
                setMainImage("../../public/assets/planet-saturn.svg");
                setDescription("Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.")
              }}
            >
              01 OVERVIEW
            </StyledButton>
            <StyledButton
              onClick={() => {
                setMainImage("../../public/assets/planet-saturn-internal.svg");
                setDescription("Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.")
              }}
            >
              02 INTERNAL STRUCTURE
            </StyledButton>
            <StyledButton
              onClick={() => {
                setMainImage("../../public/assets/saturn-geology.png");
                setDescription("The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ")
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
          <h1>10.8 hours</h1>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <h1>29.46 years</h1>
        </div>
        <div>
          <p>RADIUS</p>
          <h1>58,232 km</h1>
        </div>
        <div  id="padding-bot">
          <p>AVERAGE TEMO</p>
          <h1>-138°c</h1>
        </div>
      </section>
    </>
  );
}

export default Saturn;
