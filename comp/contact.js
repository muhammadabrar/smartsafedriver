import { useState } from "react";
import { LocationHeartFilled32, Email32, Phone32 } from "@carbon/icons-react";
export default function Contact_comp() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="wrap">
          <h1 className="contact-title">
            <span>Contact</span> Us
            {/* <hr/> */}
          </h1>
          <p className="contact-note">feel free to Contact us</p>
          <div className="info-boxs">
            <div className="info-box address">
              <>
                <i>
                  <LocationHeartFilled32 />
                </i>
                <h3>Our Address</h3>
                <p>ACICO Business Park unit 1 - Dubai - United Arab Emirates</p>
              </>
            </div>
            <div className="info-box email">
              <i>
                <Email32 />
              </i>
              <h3>Email Us</h3>
              <p>smartsafedrivers@gmail.com</p>
            </div>
            <div className="info-box phone">
              <i>
                <Phone32 />
              </i>
              <h3>Call Us</h3>
              <p>
                {" "}
                <a href="tel:+971 58 146 2204">+971 58 146 2204</a>
              </p>
            </div>
            <div className="info-box map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.375204814928!2d55.334347515617665!3d25.257960783867862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ce09d4580dd%3A0x74bc22958ce211fe!2sACICO%20Business%20Park%20-%20Al%20Khabaisi%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1647853528403!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="form-box">
              <form className="contact-form">
                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Your Name"
                  ></input>
                </div>
                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Your Email"
                  ></input>
                </div>
                <div className="field1">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Subject"
                  ></input>
                </div>
                <div className="field1">
                  <textarea
                    className="input"
                    placeholder="Enter Your Msg"
                  ></textarea>
                </div>
                <div className="">
                  <input
                    className="submit-btn"
                    type="submit"
                    placeholder="Name"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
