import Head from 'next/head'
import About from '../comp/about';
import Comit from '../comp/comit';
import Contact from '../comp/contact';
import Footer from '../comp/footer';
import Hero from '../comp/hero';
import Intro from '../comp/hero/intro';
import Nav from '../comp/hero/nav';
import How_to from '../comp/how_to';
import Pricing_comp from '../comp/Pricing';
import Services_comp from '../comp/services';
export default function Home() {

  return (
    <>
    
   <Nav active="home" />
   <Intro/>
<Comit/>
<Services_comp/>
<How_to/>
<Pricing_comp/>
<section class="cta2">
      <div class="cta-wrap" data-aos="zoom-in">
      <img src='./logo.png'/>

        <div className="funch-lines">
        <h3>RIDE LIKE ROYALTY</h3>
        <p>SAFE • FRIENDLY • AFFORDABLE</p>
          
        </div>
        <a class="cta-btn"  href={`https://wa.me/971581462204?text=I will like to make a booking for a SmartSafeDriver.`}>Book Now</a>


      </div>
    </section>
<About/>
<Contact/>
<Footer/>
     
     </>
  )
}
