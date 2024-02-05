import { useState } from "react";

function Uranus() {
  const [mainImage, setMainImage] = useState(
    "../../public/assets/planet-uranus.svg"
  );

  return (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-uranus.svg");
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-uranus-internal.svg");
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/uranus-geology.png");
            }}
          >
            SURFACE GEOLOGY
          </a>
        </div>
        <div className="left-col">
          <img src={mainImage} className="image" width="450px" height="450px" />
        </div>
        <div className="right-col">
          <h1>URANUS</h1>
          <p id="description">
          Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, 
          Uranus according to Greek mythology, was the great-grandfather of Ares.
           It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Uranus_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-uranus.svg");
              }}
            >
              01 OVERVIEW
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-uranus-internal.svg");
              }}
            >
              02 INTERNAL STRUCTURE
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/uranus-geology.png");
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
