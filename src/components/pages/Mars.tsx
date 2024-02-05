import { useState } from "react";

function Mars() {
  const [mainImage, setMainImage] = useState(
    "../../public/assets/planet-mars.svg"
  );

  return (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-mars.svg");
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-mars-internal.svg");
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/mars-geology.png");
            }}
          >
            SURFACE GEOLOGY
          </a>
        </div>
        <div className="left-col">
          <img src={mainImage} className="image" width="336px" height="336px" />
        </div>
        <div className="right-col">
          <h1>MARS</h1>
          <p id="description">
            Mercury is the smallest planet in the Solar System and the closest
            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
            shortest of all the Sun's planets. Mercury is one of four
            terrestrial planets in the Solar System, and is a rocky body like
            Earth.
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Mars_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-mars.svg");
              }}
            >
              01 OVERVIEW
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-mars-internal.svg");
              }}
            >
              02 INTERNAL STRUCTURE
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/mars-geology.png");
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
