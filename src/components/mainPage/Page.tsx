import "./Page.css";
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
    background-color: #419EBB;
  }
`;

function MainPage() {
  const [mainImage, setMainImage] = useState(
    "../../assets/planet-mercury.svg"
  );
  const [description, setDescription] = useState(
    " Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
  );


  const main = (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../assets/planet-mercury.svg");
              setDescription(
                "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
              );
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../assets/planet-mercury-internal.svg");
              setDescription(
                "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
              );
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../assets/mercury-geology.png");
              setDescription(
                "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
              );
            }}
          >
            SURFACE GEOLOGY
          </a>
        </div>
        <div className="left-col">
          <img
            src={mainImage}
            className="image animated-image"
            width="250px"
            height="250px"
          />
        </div>
        <div className="right-col animated-text">
          <h1>MERCURY</h1>
          <p id="description">{description}</p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Mercury_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <StyledButton
              onClick={() => {
                setMainImage("../../assets/planet-mercury.svg");
                setDescription(
                  "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
                );
              }}
            >
              01 OVERVIEW
            </StyledButton>

            <StyledButton
              onClick={() => {
                setMainImage("../../assets/planet-mercury-internal.svg");
                setDescription(
                  "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
                );
              }}
            >
              02 INTERNAL STRUCTURE
            </StyledButton>

            <StyledButton
              onClick={() => {
                setMainImage("../../assets/mercury-geology.png");
                setDescription(
                  "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
                );
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
          <h1>58.6 DAYS</h1>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <h1>87.98 DAYS</h1>
        </div>
        <div>
          <p>RADIUS</p>
          <h1>2,439.7 KM</h1>
        </div>
        <div id="padding-bot">
          <p>AVERAGE TEMO</p>
          <h1>430°c</h1>
        </div>
      </section>
    </>
  );
  return main;
  // return <Dropdown />;
}

export default MainPage;
