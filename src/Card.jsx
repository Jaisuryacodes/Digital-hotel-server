import React from "react";
import iconpic from "./assets/iconpic.svg";
const Card = () => {
  return (
    <>
      <div className="card w-[446px]  rounded-[40px] bg-white flex flex-col items-center  gap-8 py-8  ">
        <div className=" top ">
          <img src={iconpic} alt="" />
        </div>
        <div className="cardDetails text-[40px]">
          <h1>Break Fast</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
