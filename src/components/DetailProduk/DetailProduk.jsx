import React from 'react';
import { Link } from 'react-router-dom';


function DetailProduk() {
  const clickedproduct = JSON.parse(localStorage.getItem("my_clickedproduct")) || [];
  return (
    <div className=" relative overflow-hidden  min-h-screen bg-gradient-to-b from-[#7081FE] to-[#C6C2C2] ">
      <div className="flex flex-col items-center">

        <div className='mb-[200px]'>
          <img className="mt-[84px] w-[150px] h-[100px] " src={clickedproduct.image} alt="Product" />
        </div>

        <div className=" text-center mt-[-80px] z-10">
        <p className="text-[40px] font-[Segoe UI] font-black text-white">{clickedproduct.price}</p>
          <p className="text-[40px] font-[Segoe UI] font-black text-white">{clickedproduct.title}</p>
           <p className="text-[13px] font-black text-white font-[Segoe UI] leading-[17px]">{clickedproduct.paragraph}
          </p>
        </div>

        <div className="mt-[114px]">
          <Link to="/stripecontainer">
          <button type="submit" className="absolute bottom-0 transform translate-x-[-50%] bg-gradient-to-b from-[#7C8AF5] to-[#808080] border-[#707070] w-[400px] h-[50px] rounded-tl-[1000px] rounded-tr-[1000px]   text-center">
            <p className="text-[25px] font-black font-[Segoe UI] leading-[17px] text-black ">BUY</p>
          </button>
          </Link>
        </div>

      </div>
    </div>

  );
}

export default DetailProduk;
