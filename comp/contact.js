import { useState } from "react";
import { LocationHeartFilled32, Email32, contact32 } from "@carbon/icons-react";
import axios from 'axios';
import { Close32, CheckmarkFilled32, Close24 } from "@carbon/icons-react";

export default function Contact_comp() {
const [name, setname] = useState();
const [contact, setcontact] = useState();
const [subject, setsubject] = useState();
const [msg, setmsg] = useState();
const [successMsg, setsuccessMsg] = useState(false);
const [errorMsg, seterrorMsg] = useState(false);
const [loading, setloading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setloading(true);
      await axios
        .post("api/contact", {
          name,
          contact,
          subject,
          msg,
          date: Date(),
        })
        .then(function (response) {
          console.log(response);
          console.log("sublited");
          setname("");
          setcontact("");
          setloading(false);
          setsuccessMsg(true);
          seterrorMsg(false);
          setTimeout(() => {
            setsuccessMsg(false);
          }, 10000);
        })
        .catch(function (error) {
          console.log(error);
          setloading(false);

          seterrorMsg(true);
          setsuccessMsg(false);
          setTimeout(() => {
            seterrorMsg(false);
          }, 10000);
        });
  
  };
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
            <div className="info-box contact">
              <i>
                <contact32 />
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
            {successMsg ? (
            <>
              <div className="Success-page">
                <i className="success-icon">
                  <CheckmarkFilled32 />
                </i>
                <h2 className="success-title">Successful!</h2>
                <p className="success-text">
                  <b>Thank you for contact</b>
                </p>
                <p className="success-text">
                  Your query has been submited. Our team will contact you ASAP
                </p>
              </div>
            </>
          ) : (<><form className="contact-form"  onSubmit={(e) => handleForm(e)}>
                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={(e) => setname(e.target.value)}

                  ></input>
                </div>
                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Your Email or phone No."
                    onChange={(e) => setcontact(e.target.value)}

                  ></input>
                </div>
                <div className="field1">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Subject"
                    onChange={(e) => setsubject(e.target.value)}

                  ></input>
                </div>
                <div className="field1">
                  <textarea
                    className="input"
                    placeholder="Enter Your Msg"
                    onChange={(e) => setmsg(e.target.value)}

                  ></textarea>
                </div>
                {errorMsg && <div className="Err-msg">
          <p>Someting is wrong please try again</p>
          <i onClick={() => seterrorMsg(false)}>
            <Close24 />
          </i>
          </div>}
                <div className="">
                <button
                    className="submit-btn"
                    type="submit"
                    disabled={loading}
                  >{loading? "Loading...":"submit"}</button>
                </div>
              </form></> )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
