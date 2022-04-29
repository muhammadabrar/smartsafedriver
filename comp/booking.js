import { Close32, CheckmarkFilled32, Close24 } from "@carbon/icons-react";
import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
const Booking = (props) => {
  const [plan3_options, setplan3_options] = useState([
    { value: "0 - 10 KM ", label: "10 - 10 KM ", price: 90 },
    { value: "10 - 20 KM ", label: "10 - 20 KM ", price: 105 },
    { value: "20 - 30 KM ", label: "20 - 30 KM ", price: 120 },
    { value: "30 - 40 KM ", label: "30 - 40 KM ", price: 135 },
    { value: "40 - 50 KM ", label: "40 - 50 KM ", price: 150 },
    { value: "50 - 60 KM ", label: "50 - 60 KM ", price: 165 },
    { value: "60 - 70 KM ", label: "60 - 70 KM ", price: 180 },
  ]);
  const [plan2_options, setplan2_options] = useState([
    { value: "2 Hours", label: "2 Hours", price: 160 },
    { value: "3 Hours", label: "3 Hours", price: 240 },
    { value: "4 Hours", label: "4 Hours", price: 320 },
    { value: "5 Hours", label: "5 Hours", price: 400 },
    { value: "8 (1 Day) Hours", label: "8 (1 Day) Hours", price: 500 },
    { value: "16 (2 Day) Hours", label: "16 (2 Day) Hours", price: 1000 },
    { value: "24 (3 Day) Hours", label: "24 (3 Day) Hours", price: 1500 },
  ]);
  const [plan1_options, setplan1_options] = useState([
    { value: "Abu Dhabi", label: "Abu Dhabi", price: 440 },
    { value: "Sharjah", label: "Sharjah", price: 160 },
    { value: "Ajman", label: "Ajman", price: 210 },
    { value: "UAQ", label: "UAQ", price: 160 },
    { value: "Rak", label: "Rak", price: 160 },
    { value: "Fujairah", label: "Fujairah", price: 160 },
    { value: "Al Ain", label: "Al Ain", price: 160 },
  ]);

  const [loading, setloading] = useState(false);
  const [plan, setplan] = useState(props.plan);
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [location, setlocation] = useState("");
  const [price, setprice] = useState(0);
  const [feature, setfeature] = useState();
  const [featureErr, setfeatureErr] = useState(false);
  const [successMsg, setsuccessMsg] = useState(false);
  const [errorMsg, seterrorMsg] = useState(false);

  const handleprice = (e) => {
    setfeature(e.value);
    setfeatureErr(false)
    console.log("value: " + e.value);

    switch (plan) {
      case "plan2":
        const filter2 = JSON.stringify(
          plan2_options.filter((item) => item.value == e.value)[0].price
        );
        setprice(filter2);
        console.log("filter value: " + filter2);

        break;
      case "plan3":
        const filter3 = JSON.stringify(
          plan3_options.filter((item) => item.value == e.value)[0].price
        );
        setprice(filter3);

        console.log("filter value: " + filter3);

        break;
      default:
        const filter = JSON.stringify(
          plan1_options.filter((item) => item.value == e.value)[0].price
        );
        setprice(filter);

        console.log("filter value: " + filter);
    }
  };
  const handleForm = async (e) => {
    e.preventDefault();
    setloading(true);

    if (feature) {
      await axios
        .post("api/bookings", {
          name,
          phone,
          location,
          price,
          plan,
          feature: feature,
          status: "panding",
          date: Date(),
        })
        .then(function (response) {
          console.log(response);
          console.log("sublited");
          setname("");
          setphone("");
          setlocation("");
          setprice("");
          setfeature("");
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
    } else {
      setfeatureErr(true);
    setloading(false);

    }
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      //   borderBottom: '1px dotted pink',
      //   color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: "100%",
      display: "flex",

      padding: "1rem 1.5rem",
      border: featureErr?"1px solid #e82d2d82" : "1px solid #ccc",
      height: "4.3rem",
      boxSizing: "border-box",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className="model">
      <div className="model-overlay" onClick={() => props.close()}></div>
      <div className="model-card">
        <div className="model-header">
          <h1>Book your ride now</h1>
          <i onClick={() => props.close()}>
            <Close32 />
          </i>
        </div>
        <div className="model-body">
          {successMsg ? (
            <>
              <div className="Success-page">
                <i className="success-icon">
                  <CheckmarkFilled32 />
                </i>
                <h2 className="success-title">Successful!</h2>
                <p className="success-text">
                  <b>Thank you so much For booking</b>
                </p>
                <p className="success-text">
                  Our driver will contact you in few minuts
                </p>
                <button className="success-btn" onClick={() => props.close()}>Back To Home</button>
              </div>
            </>
          ) : (
            <>
              <ul className="booking-tabs">
                <li
                  className={`tab-item ${plan == "plan1" && "active"}`}
                  onClick={() => setplan("plan1")}
                >
                  Inter-Emirates
                </li>
                .
                <li
                  className={`tab-item ${plan == "plan2" && "active"}`}
                  onClick={() => setplan("plan2")}
                >
                  Hourly Plan
                </li>
                .
                <li
                  className={`tab-item ${plan == "plan3" && "active"}`}
                  onClick={() => setplan("plan3")}
                >
                  Within-Dubai
                </li>
              </ul>
              
              <form onSubmit={(e) => handleForm(e)}>
                <div className="bookin-field">
                  <div className="field-label">Name</div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={(e) => setname(e.target.value)}
                    required
                  ></input>
                </div>
                <div className="bookin-field">
                  <div className="field-label">Phone#</div>

                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Your Phone Number"
                    onChange={(e) => setphone(e.target.value)}
                    required
                  ></input>
                </div>
                <div className="plan">
                  <div className="bookin-field">
                    <div className="field-label">
                      {plan == "plan1"
                        ? "Dubai to"
                        : plan == "plan2"
                        ? "Time"
                        : plan == "plan3" && "Distance"}{" "}
                    </div>

                    <Select
                      label="asdasdasd"
                      required
                      styles={customStyles}
                      options={
                        plan == "plan1"
                          ? plan1_options
                          : plan == "plan2"
                          ? plan2_options
                          : plan == "plan3" && plan3_options
                      }
                      onChange={(e) => handleprice(e)}
                    />
                    {featureErr && <>
          <p className="Err-selectOptions">Please select option</p>
          </>}
                  </div>
                  <div className="price-field">
                    <div className="field-label">Price</div>
                    <input
                      className="input"
                      type="text"
                      value={`AED ${price}`}
                      disabled
                      placeholder="Enter Your Name"
                      required
                    ></input>
                  </div>
                </div>
                <div className="bookin-field">
                  <div className="field-label">Current location</div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Your Current locatio"
                    onChange={(e) => setlocation(e.target.value)}
                    required
                  ></input>
                </div>
        {errorMsg && <div className="Err-msg">
          <p>Someting is wrong please try again</p>
          <i onClick={() => seterrorMsg(false)}>
            <Close24 />
          </i>
          </div>}

                <div className="row">
                   
                  {/* <button className="submit-btn" type="submit" href={`https://wa.me/971581462204?text=I will like to make a booking for a SmartSafeDriver.`}>whatsApp</button> */}
                  <button
                    className="submit-btn"
                    type="submit"
                    disabled={loading}
                  >{loading? "Loading...":"book"}</button>
                </div>
              </form>
            </>
          )}

        </div>
        <div className="model-footer"></div>
      </div>
    </div>
  );
};

export default Booking;
