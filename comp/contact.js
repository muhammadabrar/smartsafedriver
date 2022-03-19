import { useState } from "react";
import {
    LocationHeartFilled32,
    Email32,
    Phone32
  } from "@carbon/icons-react";
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
                <p>A108 Adam Street, New York, NY 535022</p>
              </>
            </div>
            <div className="info-box email">
              <i>
                <Email32 />
              </i>
              <h3>Email Us</h3>
              <p>contact@example.com</p>
            </div>
            <div className="info-box phone">
              <i>
                <Phone32 />
              </i>
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
            <div className="info-box map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26425.264212013986!2d72.58971672984724!3d34.11670390764752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38defa191164fbc7%3A0x51780d9082757ca7!2sMaini%2C%20Swabi%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1647693001450!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="form-box">
              <form>
                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="Name"
                  ></input>
                </div>
                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="Name"
                  ></input>
                </div>
                <div className="field1">
                  <input
                    className="input"
                    type="text"
                    placeholder="Name"
                  ></input>
                </div>
                <div className="field1">
                  <textarea className="input" placeholder="Name"></textarea>
                </div>
                <div className="submit">
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
    )
  }