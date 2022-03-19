import { useState } from "react";
import {
    FaceMask32,
    Touch_2Filled32,
    HealthCross32,
    TemperatureFeelsLike32
  } from "@carbon/icons-react";
export default function About() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
      <>
<section className="safety">
        <div className="safety-wrap">
          <div className="sops">
            <h1 className="sops-title">
              <span>Covid 19</span> Safety Measures
              {/* <hr/> */}
            </h1>
            <p className="sops-notes">
              Indeed these are difficult times for everyone. For us safety of
              our drivers and customers is equally important. We follow DHA
              safety guidelines.
            </p>
            <hr style={{ marginTop: "2rem", marginRight: "2rem" }} />
            <div className="sops-items">
              <div className="sops-box">
                <i>
                  <FaceMask32 />
                </i>
                <div className="sop-info">
                  <h4 className="sop-title">Wear Mask & Gloves</h4>
                  <p className="sop-note">
                    Wearing masks & gloves is mendatory for both driver &
                    passengers.
                  </p>
                </div>
              </div>
              <div className="sops-box">
                <i>
                  <Touch_2Filled32 />
                </i>
                <div className="sop-info">
                  <h4 className="sop-title">Avoid Contact</h4>
                  <p className="sop-note">
                    Avoid un-necessory contact and avoid using front passenger
                    seat.
                  </p>
                </div>
              </div>
              <div className="sops-box">
                <i>
                  <TemperatureFeelsLike32 />
                </i>
                <div className="sop-info">
                  <h4 className="sop-title">Temperature Screening</h4>
                  <p className="sop-note">
                    Drivers are checked for Temperature at the start & end of
                    their duty.
                  </p>
                </div>
              </div>
              <div className="sops-box">
                <i>
                  <HealthCross32 />
                </i>
                <div className="sop-info">
                  <h4 className="sop-title">Continous Senitization</h4>
                  <p className="sop-note">
                    Drivers are instructed to stay clean & regularly use
                    senitizars.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="states">
            <h2>TRUSTED & EXPERIENCED SAFE DRIVER</h2>
            <p>HIRE OUR DRIVERS TO TAKE YOU HOME SAFELY, ANYWHERE, ANYTIME.</p>
            <div className="states-items">
              <div className="state-box">
                <h3>100+</h3>
                <p>drivers</p>
              </div>
              <div className="state-box">
                <h3>100+</h3>
                <p>Weekly Bookings</p>
              </div>
            </div>
            <button className="service-btn ">WhatsApp Now</button>
          </div>
        </div>
      </section>

      <section className="short-about-us">
        <div className="wrap">
          <div className="about">
            <h1 className="about-title">
              <span>Smart</span>SafeDrivers
              {/* <hr/> */}
            </h1>

            <p className="about-notes">
              <span>Smart</span>SafeDrivers Trust, Reliability & Responsibility,
              that’s how we define ourselves. We are in a business in which our
              clients call us when they need someone the most, If we aren’t good
              enough then we we shouldn’t be in the business in the first
              place..
            </p>
            {/* <hr style={{ marginTop: "2rem", marginRight: "2rem" }} /> */}
          </div>
        </div>
      </section>

       <section id="cta" class="cta">
      <div class="wrap" data-aos="zoom-in">

        <div className="cta-content">
          <h3>Book A Driver Now</h3>
          <p> Get Professional Safe Drivers for a safe and sound journey to your
              destination anywhere across Dubai.</p>
          <a class="cta-btn" href="#">Call Now</a>
          <a class="cta-btn" href="#">WhatsApp Now</a>
        </div>

      </div>
    </section>

    

       </>
    )
  }