import React from 'react'
import "./App.css";
import si from "./assets/special_image.jpg";
import si1 from "./assets/special_image1.jpg";
import si2 from "./assets/special_image2.jpg";

const Offers = () => {
  return (
    <div>
      <header>
        <h3>ZOHO RESTAURANT</h3>
        <h3>Log in</h3>
      </header>
      <div id="Home"> 
      <div className="flex">
        <h1>Hey U!</h1>
      </div>
      <div className="Special">
        <img src={si} alt="" />
        <img src={si2} alt="" />
        <img src={si1} alt="" />
      </div>
      <div className="clientSelection">
        <button>Parscel</button>
        <button onclick="<Client/>">Order</button>
      </div>
      </div>
    </div>
  )
}

export default Offers
