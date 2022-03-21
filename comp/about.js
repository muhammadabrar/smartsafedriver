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
    const [showMediaIcons, setShowMediaIcons] = useState(false);
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
            Smart Safe Drivers was established with the idea of ​​providing a comfortable travel experience to the general public, business class, tourists and others.
            <br/>
             The goal of the best secure driver is to provide equal value to each of your users.
             <br/>

In the meantime, we keep in touch with our drivers to monitor the quality of our service and maintain your level of satisfaction. <br/>We work with a customer first approach that allows us to earn your trust.

Furthermore, once you book your ride, the best safe driver is immediately available at your service. <br/>Our mission is to provide the best service to each of our customers and to maintain quality standards.
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
          <a class="cta-btn"  href="tel:+971 58 146 2204">Call Now</a>
          <a class="cta-btn" style={{backgroundColor: "#FFBB3A"}}  href={`https://wa.me/971581462204?text=I will like to make a booking for a SmartSafeDriver.`}>WhatsApp Now</a>
        </div>

      </div>
    </section>
<section className="why-sd">
        <div className="why-sd-wrap">
          <div className="about-sds">
            <h1 className="about-sds-title">
             Why Professional <span>Safe Drivers?</span>
              {/* <hr/> */}
            </h1>
            <p className="about-sds-notes">
            A safe driver is essential, but so is driving.<br/>
            Our safe drivers are aware of all the major roads and locations in Dubai to serve you with an enjoyable experience through Private Driver Service in Dubai. No matter your purposes of hiring a safe driver, our sober drivers will help you meet your concerns in a hassle-free manner. With us, you will definitely enjoy 100% dedicated services and meet your every safe driving needs.
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
            <a  href={`https://wa.me/971581462204?text=I will like to make a booking for a SmartSafeDriver.`} className="service-btn " >WhatsApp Now</a>
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