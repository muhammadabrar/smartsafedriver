import Head from 'next/head'
import About from '../comp/about';
import Contact_comp from '../comp/contact';
import Footer from '../comp/footer';
import Nav from '../comp/hero/nav';
import How_to from '../comp/how_to';
import Inner_page from '../comp/inner_page';
import Pricing from '../comp/Pricing';
import Services_comp from '../comp/services';
export default function Contact() {

  return (
    <>
    
   <Nav active="contact" />
   <Inner_page b="Contact Us" />
   {/* <Intro/>
<Comit/> */}
<Contact_comp/>
<Footer/>
     
     </>
  )
}
