import { useState, useEffect } from "react";
import { MobileDownload32 } from "@carbon/icons-react";
export default function Intro() {
  const [silde, setsilde] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setsilde(silde == 1 ? 2 : silde == 2 ? 3 : 1);
    }, 5000);
  }, [silde]);
  return (
    <>
      <div aria-label="Newest Photos">
        <div className="carousel" data-carousel>
          <ul data-slides>
            <li class={silde == 1 ? "slide active" : "slide"}>
              <img src="./hero/bg1.jpg" alt="Nature Image #1" />
              {silde == 1 && (
                <>
                  <div className="caption ">
                    <h1 className="heading">
                      Travel in Luxury of Your <span>Own Car.</span>
                    </h1>

                    <p className="hero-text">
                      Choose from the range of our highly professional drivers
                      to escort you to the airport, events, wedding, or weekend
                      getaway.
                    </p>
                    <button className="action-btn">Call Now</button>
                    <button className="main-action-btn">WhatsApp Now</button>
                  </div>
                </>
              )}
            </li>
            <li class={silde == 2 ? "slide active" : "slide"}>
              <img src="./hero/bg3.jpg" alt="Nature Image #2" />
              {silde == 2 && (
                <>
                  <div className="caption ">
                    <h1 className="heading">
                      You Drink We Drive Say No To Driving{" "}
                      <span>Under Influence</span>
                    </h1>
                    <p className="hero-text">
                      Don't be a threat to yourself and other passengers on the
                      road. Book a safe driver Now and make the smarter choice.
                    </p>
                    <button className="action-btn">Call Now</button>
                    <button className=" main-action-btn">WhatsApp Now</button>
                  </div>
                </>
              )}
            </li>
            <li class={silde == 3 ? "slide active" : "slide"}>
              <img src="./hero/bg2.jpg" alt="Nature Image #3" />

              {silde == 3 && (
                <>
                  <div className="caption ">
                    <h1 className="heading">
                      Reliable Drivers. Sit Back & Relax.
                    </h1>
                    <p className="hero-text">
                      Expect only the best from our wide array of professionally
                      trained drivers as they will take you to your destination
                      safely.
                    </p>
                    <button className="action-btn">Call Now</button>
                    <button className=" main-action-btn">WhatsApp Now</button>
                  </div>
                </>
              )}
            </li>
          </ul>
          <button className="go-down" href="#services">
            <MobileDownload32 />
          </button>
          <ol className="carousel-indicators">
            <li
              className={silde == 1 && "active"}
              onClick={() => setslide(1)}
            ></li>
            <li
              className={silde == 2 && "active"}
              onClick={() => setslide(2)}
            ></li>
            <li
              className={silde == 3 && "active"}
              onClick={() => setslide(3)}
            ></li>
          </ol>
        </div>
      </div>
    </>
  );
}
