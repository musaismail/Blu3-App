import React from "react";
import LikeProduct from "./LikeProduct";
import image from "../../images/Vector.png";
import image1 from "../../images/Vector-1.png";
import { Link } from "react-router-dom";

function Likeproductlist() {
  return (
    <div className="bg-[#f5f5f5] w-full min-h-screen">
      <div className="flex  flex-col justify-center items-center pt-[10] ">
        <ul className="flex justify-between w-full pt-[70px]">
          <li>
            <img className="ml-[30px]" src={image} alt="" />
          </li>
          <li>
            <img className="mr-[30px]" src={image1} alt="" />
          </li>
        </ul>
      </div>

      <div className="flex justify-between">
        <div className="mt-[36px] ml-[30px] mb-[20px]">
          <p>Product You Like</p>
        </div>
        <div className="mt-[36px] mr-[30px] mb-[20px]">
          <Link to="/favproduct">
            <buttton className="border-[1px] border-blue-700 py-2 px-2 rounded-[25px] bg-[#7081FE] text-white text-xs">
              Favourite Products
            </buttton>
          </Link>
        </div>
      </div>
      <div>
        <LikeProduct />
      </div>
    </div>
  );
}

export default Likeproductlist;
