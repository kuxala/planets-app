import { useState } from "react";

function Jupiter() {
  const [mainImage, setMainImage] = useState(
    "../../public/assets/planet-jupiter.svg"
  );

  return (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-jupiter.svg");
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-jupiter-internal.svg");
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/jupiter-geology.png");
            }}
          >
            SURFACE GEOLOGY
          </a>
        </div>
        <div className="left-col">
          <img src={mainImage} className="image" width="550px" height="550px" />
        </div>
        <div className="right-col">
          <h1>JUPITER</h1>
          <p id="description">
          Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a
           gas giant with a mass two and a half times that of all the other
           planets in the Solar System combined, but less than one-thousandth the mass of the Sun.
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Jupiter_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-jupiter.svg");
              }}
            >
              01 OVERVIEW
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-jupiter-internal.svg");
              }}
            >
              02 INTERNAL STRUCTURE
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/jupiter-geology.png");
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
