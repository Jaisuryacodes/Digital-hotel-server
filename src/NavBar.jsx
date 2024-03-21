import React from "react";
import searchIcon from "./assets/icon _search_.svg";
import shoppingIcon from "./assets/fi-rr-shopping-bag.svg";
import PhoneIcon from "./assets/phoneIcon.svg";
import ContactBg from "./assets/Rectangle.svg";
const ClientSide = () => {
  return (
    <>
      <div
        id="NavContent"
        className="NavContent text-[#39DB4A] text-[35px] flex justify-evenly h-[50px] w-auto"
      >
        <h2>
          <span className="text-[#222]">F</span>OOD
        </h2>
        <div
          id="menu"
          className="menu text-[20px] flex gap-3 items-center justify-center"
        >
          <h4>Home</h4>
          <h4>Menu</h4>
          <h4>Services</h4>
          <h4>Offers</h4>
        </div>
        <div className="Search flex gap-5 justify-center items-center w-[250px] text-[20px]">
          <div>
            <h4 className=" text-[#ffff] ">Contact</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientSide;
