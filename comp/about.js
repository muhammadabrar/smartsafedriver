import { useState } from "react";
import {
    FaceMask32,
    Touch_2Filled32,
    ThumbsUpFilled32,
    Need32,
    Bar32,
    Partnership32,
    CarFront32,
    VehicleServices32,
    AirlinePassengerCare32,
    SprayPaint32
  } from "@carbon/icons-react";
export default function About() {
 const [phone, setphone] = useState(971544490233);

    return (
      <>
      
      <section className="about-us">
        <div className="wrap">
          <div className="about">
            <h1 className="about-title">
             About <span>Smart</span>SafeDrivers
              {/* <hr/> */}
            </h1>

            <p className="about-notes">
            At Smart Safe Drivers, we understand the importance of safety, reliability, and affordability. That's why we pride ourselves on our exceptional customer service and attention to detail, ensuring a stress-free and enjoyable experience every time.
<br/>
Don't take unnecessary risks on the road. Choose Smart Safe Drivers for all your driving needs in Dubai and the UAE. Contact us today to learn more and book your next ride.

            </p>
            {/* <hr style={{ marginTop: "2rem", marginRight: "2rem" }} /> */}
          </div>
        </div>
      </section>
      <section id="cta" class="cta">
      <div class="wrap" data-aos="zoom-in">

        <div className="cta-content">
          <h3>Book A Chauffeur Now</h3>
          <p> <b>SmartSafeDrivers</b> is Trust, Reliability & Responsibility,
              that’s how we define ourselves. We are in a business in which our
              clients call us when they need someone the most, If we aren’t good
              enough then we we shouldn’t be in the business in the first
              place..</p>
          <a class="cta-btn"  href={`tel:${phone}`}>Call Now</a>
          <a class="cta-btn" style={{backgroundColor: "#FFBB3A"}}  href={`https://wa.me/${phone}?text=hello, I would like to book a safe driver.`}>WhatsApp Now</a>
        </div>

      </div>
    </section>
<section className="why-sd">
        <div className="why-sd-wrap">
          <div className="about-sds">
            <h1 className="about-sds-title">
             Why<span> Smart </span>Safe Drivers?
              {/* <hr/> */}
            </h1>
            <p className="about-sds-notes">
            The top sober driving service in Dubai and the United Arab Emirates is Smart Safe Drivers. Smart Safe Drivers offers flexible and reasonable choices for occasional or regular designated drivers, as well as chauffeur services for business or leisure.  They provide peace of mind and a stress-free experience by ensuring that you and your car are transported securely to your preferred place by their friendly and skilled drivers. For a sensible and responsible choice for your driving requirements in Dubai and the UAE, select Smart Safe Drivers.
            </p>
            <hr style={{ marginTop: "2rem", marginRight: "2rem" }} />
            <div className="about-sds-items">
              <div className="about-sds-box">
                <i>
                <Bar32 />
                </i>
                <p className="about-sd-info">
                  Going for a Party? Get Driven Safely Back Home!
                </p>
              </div>
              <div className="about-sds-box">
                <i>
                  <VehicleServices32 />
                </i>
                <p className="about-sd-info">
                  Service appointment? We'll Pickup-up and Drop-off your car.
                </p>
              </div>
              <div className="about-sds-box">
                <i>
                <AirlinePassengerCare32 />
                </i>
                <p className="about-sd-info">
                  We pick-up & drop your kids off to school, on time!
                </p>
              </div>
              <div className="about-sds-box">
                <i>
                <CarFront32 />
                </i>
                <p className="about-sd-info">
                  Rehearse for your business meeting, while we drive your car
                </p>
              </div>
              <div className="about-sds-box">
                <i>
                <Partnership32 />
                </i>
                <p className="about-sd-info">
                  Trust us with your urgent packages
                </p>
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
            <a  href={`https://wa.me/${phone}?text=hello, I would like to book a safe driver.`} className="service-btn " >WhatsApp Now</a>
          </div>
        </div>
      </section>

      

      <section id="cta" class="covid">
      <div class="wrap" data-aos="zoom-in">
      <p> Following CDC and Public Health Guidelines, we are doing everything we can to keep you and our drivers safe.
If you or any passenger is experiencing COVID symptoms, please call our dispatch headquarters.</p>
        <div className="sops">
          <div className="sops-item">
            <div>
          <i>
          <SprayPaint32 />
                </i>
                <p className="about-sd-info">
                Every SmartSafeDriver vehicle is sanitized after each ride.
                </p>
          </div>
         
          <div>
           
          <i>
          <Need32 />
                </i>
                <p className="about-sd-info">
                Take-home hand sanitizer is available to each passenger.
                </p>
              
          </div>
          <div >
          <i>
          <SprayPaint32 />
                </i>
                <p className="about-sd-info">
                Drivers and passengers are required to wear facemasks.
                </p>
          </div>
          <div>
          <i>
          <ThumbsUpFilled32 />
                </i>
                <p className="about-sd-info">
                Drivers are equipped with latex gloves for safety.
                </p>
          </div>
        </div>
        </div>
        <p className="more-sops">For more information on COVID symptoms, safety and prevention, please visit the CDC website. <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">CLICK HERE</a></p>
      </div>
    </section>


       </>
    )
  }