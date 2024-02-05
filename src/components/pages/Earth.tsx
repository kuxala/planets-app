import { useState } from "react";
// import "../mainPage/Page.css"
function MainPage() {
  const [mainImage, setMainImage] = useState(
    "../../public/assets/planet-earth.svg"
  );

  return (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-earth.svg");
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-earth-internal.svg");
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/earth-geology.png");
            }}
          >
            SURFACE GEOLOGY
          </a>
        </div>
        <div className="left-col">
          <img src={mainImage} className="image animated-image" width="450px" height="450px" />
        </div>
        <div className="right-col animated-text">
          <h1>EARTH</h1>
          <p id="description">
          Third planet from the Sun and the only known planet to harbor life.
           About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties 
          and geological history have allowed life to evolve and thrive.
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Earth_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-earth.svg");
              }}
            >
              01 OVERVIEW
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-earth-internal.svg");
              }}
            >
              02 INTERNAL STRUCTURE
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/earth-geology.png");
              }}
            >
              03 SURFACE GEOLOGY
            </button>
          </div>
        </div>
      </main>
      <section className="animated-text-bottom">
        <div>
          <p>ROTATION TIME</p>
          <h1>0.99 days</h1>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <h1>365.26 days</h1>
        </div>
        <div>
          <p>RADIUS</p>
          <h1>6,371 km</h1>
        </div>
        <div>
          <p>AVERAGE TEMO</p>
          <h1>16°c</h1>
        </div>
      </section>
    </>
  );
}

export default MainPage;
