import { useState } from "react";
import styled from "styled-components"

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
    background-color: #EDA249;
  }
`;
function MainPage() {
  const [mainImage, setMainImage] = useState(
    "../../assets/planet-venus.svg"
  );
  const [description, setDescription] = useState(
    "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."
  );

  return (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../assets/planet-venus.svg");
              setDescription("Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.")
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../assets/planet-venus-internal.svg");
              setDescription("The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.")
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../assets/venus-geology.png");
              setDescription("Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.")
            }}
          >
            SURFACE GEOLOGY
          </a>
        </div>
        <div className="left-col">
          <img src={mainImage} className="image animated-image" width="400px" height="400px"/>
        </div>
        <div className="right-col animated-text">
          <h1>VENUS</h1>
          <p id="description">
          {description}
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Venus_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <StyledButton
              onClick={() => {
                setMainImage("../../assets/planet-venus.svg");
                setDescription("Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.")
              }}
            >
              01 OVERVIEW
            </StyledButton>
            <StyledButton
              onClick={() => {
                setMainImage("../../assets/planet-venus-internal.svg");
                setDescription("The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.")
              }}
            >
              02 INTERNAL STRUCTURE
            </StyledButton>
            <StyledButton
              onClick={() => {
                setMainImage("../../assets/venus-geology.png");
                setDescription("Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.")
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
          <h1>243 days</h1>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <h1>224.7 days</h1>
        </div>
        <div>
          <p>RADIUS</p>
          <h1>6,051.8 km</h1>
        </div>
        <div>
          <p>AVERAGE TEMO</p>
          <h1>471°c</h1>
        </div>
      </section>
    </>
  );
}

export default MainPage;
