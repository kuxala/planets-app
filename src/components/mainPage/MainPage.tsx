import "./MainPage.css";

function MainPage() {
  return (
    <>
      <main>
        <div className="left-col">
          <img src="../../public/assets/planet-mercury.svg" />
        </div>
        <div className="right-col">
          <h1>MERCURY</h1>
          <p id="description">
            Mercury is the smallest planet in the Solar System and the closest
            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
            shortest of all the Sun's planets. Mercury is one of four
            terrestrial planets in the Solar System, and is a rocky body like
            Earth.
          </p>
          <p id="source">
            Source:{"  "}
            <a href="https://en.wikipedia.org/wiki/Mercury_(planet)">
              Wikipedia
            </a>
          </p>
          <div className="buttons">
            <button id="first-button">01 OVERVIEW</button>
            <button>02 INTERNAL STRUCTURE</button>
            <button>03 SURFACE GEOLOGY</button>
          </div>
        </div>
      </main>
      <section>
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
        <div>
          <p>AVERAGE TEMO</p>
          <h1>430C</h1>
        </div>
      </section>
    </>
  );
}

export default MainPage;
