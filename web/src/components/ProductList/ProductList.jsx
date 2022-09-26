import React from 'react';
import { BsPlusLg } from "react-icons/bs";
import Products from './Products/Products';
import image from '../../images/Vector.png';
import image1 from '../../images/Vector-1.png';

function ProductList() {
  return (
    <div className="bg-[#f5f5f5] w-full min-h-screen">
      <div className="flex  flex-col justify-center items-center pt-[10] ">
        <ul className="flex justify-between w-full pt-[70px]">
            <li><img className="ml-[30px]" src={image} alt="" /></li>
            <li><img className="mr-[30px]" src={image1} alt="" /></li>
          </ul>
      </div>
          
<div className="mt-[36px] ml-[30px]">
  <p >shopping cart</p>
  </div>
          
  <div className="flex justify-start w-full">   
        <BsPlusLg className="mt-[8px] ml-[20px] mb-6 w-[25px] h-[25px]" />
  </div>
          <div>
            <Products />
          </div>
       </div>
      
    
  );
}

export default ProductList;
