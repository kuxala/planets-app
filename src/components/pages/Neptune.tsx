import { useState } from "react";

function Neptune() {
  const [mainImage, setMainImage] = useState(
    "../../public/assets/planet-neptune.svg"
  );

  return (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-neptune.svg");
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-uranus-neptune.svg");
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/neptune-geology.png");
            }}
          >
            SURFACE GEOLOGY
          </a>
        </div>
        <div className="left-col">
          <img src={mainImage} className="image" width="440px" height="440px" />
        </div>
        <div className="right-col">
          <h1>NEPTUNE</h1>
          <p id="description">
          Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, 
          it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. 
          It is 17 times the mass of Earth, more massive than its near-twin Uranus.
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Neptune_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-neptune.svg");
              }}
            >
              01 OVERVIEW
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-neptune-internal.svg");
              }}
            >
              02 INTERNAL STRUCTURE
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/neptune-geology.png");
              }}
            >
              03 SURFACE GEOLOGY
            </button>
          </div>
        </div>
      </main>
      <section>
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
