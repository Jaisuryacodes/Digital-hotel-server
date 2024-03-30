import React from "react";
import Footer from "./Footer";
const Adminview = () => {
  return (
    <>
      <div className=" px-6">
      <div className=" mt-5 py-7 bg-orange-600 px-6  ">
          <h1 className=" text-[20px] ">Table - 1</h1>
          <h2 className="ml-6 font-normal text-[16px]">Idly 2</h2>
          <h1 className=" text-[20px]">Table - 2</h1>
          <h2 className="ml-6 font-normal text-[16px]"> Parotta 2</h2>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Adminview;
