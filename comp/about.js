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
      <section class="cta2">
      <div class="cta-wrap" data-aos="zoom-in">
      <h1 className="about-title" style={{color:"#fff"}}>
             <span>Smart</span>SafeDrivers
              {/* <hr/> */}
            </h1>

        <div className="funch-lines">
        <h3>RIDE LIKE ROYALTY</h3>
        <p>SAFE • FRIENDLY • AFFORDABLE</p>
          
        </div>
        <a class="cta-btn"  href="#">Book Now</a>


      </div>
    </section>
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
                  <FaceMask32 />
                </i>
                <p className="about-sd-info">
                  Going for a Party? Get Driven Safely Back Home!
                </p>
              </div>
              <div className="about-sds-box">
                <i>
                  <FaceMask32 />
                </i>
                <p className="about-sd-info">
                  service appointment? We'll Pickup-up and Drop-off your car.
                </p>
              </div>
              <div className="about-sds-box">
                <i>
                  <FaceMask32 />
                </i>
                <p className="about-sd-info">
                  we pick-up & drop your kids off to school, on time!
                </p>
              </div>
              <div className="about-sds-box">
                <i>
                  <FaceMask32 />
                </i>
                <p className="about-sd-info">
                  rehearse for your business meeting, while we drive your car
                </p>
              </div>
              <div className="about-sds-box">
                <i>
                  <FaceMask32 />
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
            <button className="service-btn " >WhatsApp Now</button>
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
          <a class="cta-btn"  href="#">Call Now</a>
          <a class="cta-btn" style={{backgroundColor: "#FFBB3A"}} href="#">WhatsApp Now</a>
        </div>

      </div>
    </section>

    

       </>
    )
  }