
  import { useState } from "react";
  export default function Inner_page(props) {
    return (
      <>
  <section id="breadcrumbs" class="sec-page">
      
      <div class="breadcrumbs">

        <ol>
          <li><a className="b-link" href="/">Home</a></li>
          {props?.blog && <li><a className="b-link" href="/blogs">Blogs</a></li>}
          {props.b && <li>{props.b}</li>}
        </ol>
        <h2>{props.b}</h2>

      </div>
    </section>
       
  
        
        {/* "https://api.whatsapp.com/send/?phone=971524837505&text=I will like to make a booking for a SafeDriver." */}
      </>
    );
  }
  