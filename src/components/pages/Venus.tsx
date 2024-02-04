import { useState } from "react";
// import "../mainPage/Page.css"
function MainPage() {
  const [mainImage, setMainImage] = useState(
    "../../public/assets/planet-venus.svg"
  );

  return (
    <>
      <main>
        <div className="mobile-buttons">
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-venus.svg");
            }}
          >
            OVERVIEW
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/planet-venus-internal.svg");
            }}
          >
            INTERNAL STRUCTURE
          </a>
          <a
            onClick={() => {
              setMainImage("../../public/assets/geology-venus.png");
            }}
          >
            SURFACE GEOLOGY
          </a>
        </div>
        <div className="left-col">
          <img src={mainImage} className="image" />
        </div>
        <div className="right-col">
          <h1>VENUS</h1>
          <p id="description">
          Venus is the second planet from the Sun.
          It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, 
          on rare occasions, visible to the naked eye in broad daylight.
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Venus_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-venus.svg");
              }}
            >
              01 OVERVIEW
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/planet-mercury-internal.svg");
              }}
            >
              02 INTERNAL STRUCTURE
            </button>
            <button
              onClick={() => {
                setMainImage("../../public/assets/geology-venus.png");
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
