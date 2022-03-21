import { useState, useEffect } from "react";
import { MobileDownload32 } from "@carbon/icons-react";
export default function Intro() {
  const [silde, setsilde] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setsilde(silde == 1 ? 2 : silde == 2 ? 3 : 1);
    }, 15000);
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
                    welcome to smart safe drivers<br/>
                    <span>Everything You Need</span>
                    </h1>

                    <p className="hero-text">
                    Are you looking for a chauffeur in UAE? Wondering about their standard of services? 
We are providing a range of reliable Safe Driver Services.
{/* Our mission is to provide the best service to every one of our customers and to maintain the quality level. <br/>
<small>let us know when and where you want the Driver to pick you up from, or book online and we’ll call you back to confirm your booking.</small> */}
                    </p>
                    <a  href="tel:+971 58 146 2204"  className="action-btn">Call Now</a>
                    <a href={`https://wa.me/971581462204?text=I will like to make a booking for a SmartSafeDriver.`} className="main-action-btn">WhatsApp Now</a>
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
                    Your car –
{" "}
                      <span>Our driver</span>
                    </h1>
                    <p className="hero-text">
                    You Drink We Drive

Say No To Driving Under Influence<br/>
                    Have a safe journey to your destination in the comfort of your own car with our professional chauffeur.

                    </p>
                    <a  href="tel:+971 58 146 2204" className="action-btn">Call Now</a>
                    <a href={`https://wa.me/971581462204?text=I will like to make a booking for a SmartSafeDriver.`} className=" main-action-btn">WhatsApp Now</a>
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
                    Safe Journey With Awesome Reliable Drivers. <span>Sit Back & Relax.</span>


                    </h1>
                    <p className="hero-text">
                    {/* Expect only the best from our wide array of professionally trained drivers as they will take you to your destination safely.  */}
                    Our drivers undergo specific training to ensure the quality of their services. To ensure the safety of passengers in extreme conditions,
                     they are trained in defensive driving techniques. 

                    </p>
                    <a href="tel:+971 58 146 2204"  className="action-btn">Call Now</a>
                    <a href={`https://wa.me/971581462204?text=I will like to make a booking for a SmartSafeDriver.`} className=" main-action-btn">WhatsApp Now</a>
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
              onClick={() => setsilde(1)}
            ></li>
            <li
              className={silde == 2 && "active"}
              onClick={() => setsilde(2)}
            ></li>
            <li
              className={silde == 3 && "active"}
              onClick={() => setsilde(3)}
            ></li>
          </ol>
        </div>
      </div>
    </>
  );
}
