import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mainbox text-[16px] font-serif flex flex-col gap-8 items-center justify-evenly ">
        <h1 className=" text-[24px] font-semibold "> ZOLO </h1>
        <div className=" flex gap-[250px] align-middle justify-around">
          <div className="left flex flex-col gap-4">
            <h1 className=" font-semibold text-[20px]">Useful links</h1>
            <h2>About us</h2>
            <h2>Events</h2>
            <h2>FAQ </h2>
          </div>
          <div className="center flex flex-col gap-4">
            <h1 className=" font-semibold text-[20px]">Main Menu</h1>
            <h2>Offers</h2>
            <h2>Menus</h2>
            <h2>Reservation</h2>
          </div>
          <div className="right flex flex-col gap-4">
            <h1 className=" font-semibold text-[20px]">Contact</h1>
            <h2>zolohotel@gmail.com</h2>
            <h2>9545444544</h2>
            <h2>Social media</h2>
          </div>
        </div>
        <div className="cr">
          <h2>Copyright 2023 © zolo hotel | All rights reserved</h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
