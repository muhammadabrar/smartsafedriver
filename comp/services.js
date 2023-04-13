import {
  Plane32,
  Enterprise32,
  PassengerDrinks32,
  CarFront32,
  TrafficFlow32,
  CabinCareAlert32,
  Delivery32,
  Event32,
} from "@carbon/icons-react";
import Image from "next/image";
import airport from '../public/hero/airport.jpeg';
import { useState } from "react";
export default function Services_comp() {
  const [phone, setphone] = useState(971544490233);

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <section id="services" className="services">
        <div className="wrap">
          <h1 className="section-title">
            Our <span>Services</span>
            {/* <hr/> */}
          </h1>
          <p>Our experienced and courteous drivers will get you and your car safely home, no matter where you are in the UAE. Whether you're looking for a one-time service or a regular designated driver, we have flexible and affordable options to fit your needs and budget.</p>
          <p>But our services don't stop there. We also offer chauffer services for those who need a personal driver for business or leisure, as well as the cheapest driver in Dubai for those who want to save money without sacrificing quality.</p>

          <div className="services-items">
            {/* <div
              className="service"
              // style={{ backgroundImage: `url('./hero/airport.jpeg')` }}
            > */}
              <div className="icon-box">
              
                <div className="icon">
                  <i>
                    <Plane32 />
                  </i>
                </div>
                <h4>
                  <a href="">Airport Transfers</a>
                </h4>
                <p>
                  Need a ride to or from the airport? Or, want to send a car and
                  driver to make a positive impression on a client? Book Now a
                  Smart Safe Driver Rest assured our safe driver will be waiting
                  for you outside the airport along with your vehicle.
                </p>
                <a
                  href={`https://wa.me/${phone}?text=hello, I would like to book a safe driver.`}
                  className="service-btn "
                >
                  WhatsApp Now
                </a>
                {/* <Image className="background-image" layout='fill' src={airport} /> */}
              {/* </div> */}
            </div>
            {/* <div
              className="service"
              // style={{ backgroundImage: `url('./hero/party.jpg')` }}
            > */}
              <div className="icon-box">
              {/* <Image className="background-image" layout='fill' src="/hero/party.jpg" /> */}
                <div className="icon">
                  <i>
                    <PassengerDrinks32 />
                  </i>
                </div>
                <h4>
                  <a href="">ROMANCE or After Party Pickup</a>
                </h4>
                <p>
                  Impress the love of your life when you go out. Smart Safe
                  Driver can help pre-arrange something special to have it
                  waiting for you on our arrival.
                  <br /> Call for more details.
                </p>
                <a
                  href={`https://wa.me/${phone}?text=hello, I would like to book a safe driver.`}
                  className="service-btn "
                >
                  WhatsApp Now
                </a>
              {/* </div> */}
            </div>
            {/* <div
              className="service"
              // style={{ backgroundImage: `url('./hero/bg1.jpg')` }}
            > */}
              <div className="icon-box">
              {/* <Image className="background-image" layout='fill' src="/hero/bg1.jpg" /> */}
                <div className="icon">
                  <i>
                    <Enterprise32 />
                  </i>
                </div>
                <h4>
                  <a href="">City Tour</a>
                </h4>
                <p>
                  You are on vacation or have Guests looking for someone who
                  could show help you showing around city to your guests? we can
                  offer you city tours with English speaking drivers or guided
                  city tours
                </p>
                <a
                  href={`https://wa.me/${phone}?text=hello, I would like to book a safe driver.`}
                  className="service-btn "
                >
                  WhatsApp Now
                </a>
              {/* </div> */}
            </div>
            {/* <div
              className="service"
              // style={{ backgroundImage: `url('./hero/corporate.jpg')` }}
            > */}
              <div className="icon-box">
              {/* <Image className="background-image" layout='fill' src="/hero/corporate.jpg" /> */}
                <div className="icon">
                  <i>
                    <CarFront32 />
                  </i>
                </div>
                <h4>
                  <a href="">Corporate Transfers</a>
                </h4>
                <p>
                  Set your company up with a SMART SAFE DRIVERS CORPORATE
                  ACCOUNT and your team can quickly book rides to help your
                  company grow and save on every ride. We Provide You Awesome
                  Drivers with professional and experienced chauffeurs. Call for
                  more details.
                </p>
                <a
                  href={`https://wa.me/${phone}?text=hello, I would like to book a safe driver.`}
                  className="service-btn "
                >
                  WhatsApp Now
                </a>
              {/* </div> */}
            </div>
            {/* <div
              className="service"
              // style={{ backgroundImage: `url('./hero/roadtrip.jpg')` }}
            > */}
              <div className="icon-box">
              {/* <Image className="background-image" layout='fill' src="/hero/roadtrip.jpg" /> */}

                <div className="icon">
                  <i>
                    <Delivery32 />
                  </i>
                </div>
                <h4>
                  <a href="">Errand</a>
                </h4>
                <p>
                  <br />
                  Safe & fast Delivery
                  <br />
                  <br />
                  Anytime, Anywhere in Dubai
                </p>
                <a
                  href={`https://wa.me/${phone}?text=hello, I would like to book a safe driver.`}
                  className="service-btn "
                >
                  WhatsApp Now
                </a>
              {/* </div> */}
            </div>
            {/* <div
              className="service"
              // style={{ backgroundImage: `url('./hero/event.jpg')` }}
            > */}
              <div className="icon-box" >
                {/* <Image className="background-image" layout='fill' src="/hero/event.jpg" /> */}
                <div className="icon">
                  <i>
                    <Event32 />
                  </i>
                </div>
                <h4>
                  <a href="">EVENTS</a>
                </h4>
                <p>
                  Weddings, concerts, theater, dinners and more. When you
                  experience an event with SMART SAFE DRIVERS, you experience an
                  event in a style above the rest.
                </p>
                <a
                  href={`https://wa.me/${phone}?text=hello, I would like to book a safe driver.`}
                  className="service-btn "
                >
                  WhatsApp Now
                </a>
              {/* </div> */}
            </div>

            {/* <div className="service" style={{backgroundImage:`url('./hero/bg1.jpg')`}}>
            <div className="icon-box" >
              <div className="icon"><i><Plane32 /></i></div>
              <h4><a href=""></a></h4>
              <p></p>
            </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* "https://api.whatsapp.com/send/?phone=971524837505&text=I will like to make a booking for a SafeDriver." */}
    </>
  );
}
