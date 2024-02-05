import { useState } from "react";

function Saturn() {
  const [mainImage, setMainImage] = useState(
    "../../public/assets/planet-saturn.svg"
  );

  return (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-saturn.svg");
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-saturn-internal.svg");
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/saturn-geology.png");
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
            Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.
            It is a gas giant with an average radius of
            about nine and a half times that of Earth. It only has one-eighth the average density of Earth.
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Saturn_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-saturn.svg");
              }}
            >
              01 OVERVIEW
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-saturn-internal.svg");
              }}
            >
              02 INTERNAL STRUCTURE
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/saturn-geology.png");
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
