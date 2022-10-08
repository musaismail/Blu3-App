import React from "react";
import Searchproduct from "./Searchproduct";
import image from "../../images/Vector.png";
import image1 from "../../images/Vector-1.png";

function Searchproductlist() {
  const name = (clickeditem) => {
    console.log(clickeditem);
  };
  return (
    <div className="bg-[#f5f5f5] w-full min-h-screen">
      <div className="flex  flex-col justify-center items-center pt-[10] ">
        <ul className="flex justify-between w-full  pt-[70px]">
          <li>
            <img className="ml-[30px]" src={image} alt="" />
          </li>
          <li>
            <img className="mr-[30px]" src={image1} alt="" />
          </li>
        </ul>
      </div>

      <div></div>
      <div className="mt-[36px] ml-[30px]">
        <p>Please Select</p>
        <p>Product You Like</p>
      </div>
      <div>
        <Searchproduct name={name} />
      </div>
    </div>
  );
}

export default Searchproductlist;
