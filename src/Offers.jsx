import React from "react";
import "./App.css";
import si from "./assets/special_image.jpg";
import si1 from "./assets/special_image1.jpg";
import si2 from "./assets/special_image2.jpg";

const Offers = () => {
  return (
    <div>
      <header>
        <h3>ZOHO RESTAURANT</h3>
        Home Contact
        <h3>Log in</h3>
      </header>
      <div id="Home">
        <div className="flex"></div>
        <div className="Special">
          <img className=" imagepic" src={si} alt="" />
          <img className=" imagepic" src={si2} alt="" />
          <img className=" imagepic" src={si1} alt="" />
        </div>
        <div className="clientSelection text-[26px]">
          <button>Parscel</button>
          <button onclick="<Client/>">Order</button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
