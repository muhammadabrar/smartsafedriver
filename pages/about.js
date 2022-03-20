import Head from 'next/head'
import About from '../comp/about';
import Contact from '../comp/contact';
import Footer from '../comp/footer';
import Nav from '../comp/hero/nav';
import How_to from '../comp/how_to';
import Inner_page from '../comp/inner_page';
import Pricing_comp from '../comp/Pricing';
import Services_comp from '../comp/services';
export default function About_page() {

  return (
    <>
    
   <Nav active="about" />
   <Inner_page b="About Us" />
   {/* <Intro/>
<Comit/> */}
<About/>

<How_to/>
<Contact/>
<Footer/>
     
     </>
  )
}
