import React from 'react';
import image from '../../images/Vector.png';
import image1 from '../../images/Vector-1.png';

function ProductList() {
  return (
    <div>

      <div>
        <ul className="flex justify-between pt-[70px]">
          <li><img className="ml-[30px]" src={image} alt="" /></li>
          <li><img className="mr-[30px]" src={image1} alt="" /></li>
        </ul>

        <p className="mt-[36px] ml-[30px]">Add Product</p>
        <div className="flex justify-center mt-[35px]">
          <div className="flex flex-col justify-center">
            <input type="file" placeholder="INPUT IMAGE" className=" border-2 border-[#707070] mb-[35px] w-[269px] h-[156px]" src="" alt="" />
            <input type="text" name="Product name" className=" font-black border-2 border-[#707070] mb-[35px] rounded-xl h-[30px] w-[269px] text-[11px] font-[Segoe UI] placeholder:pl-5" placeholder="product name" />
            <textarea name="Product Description" className="pt-[57px] pb-[50px] placeholder font-black rounded-xl border-2 placeholder:pl-5 text-[11px] border-[#707070] w-[269px] h-[122px] mb-[35px]" placeholder="product description" />
            <input type="text" name="Product name" className=" font-black border-2 border-[#707070] rounded-xl h-[30px] w-[269px] text-[11px] font-[Segoe UI] placeholder:pl-5" placeholder="product price" /> <br />
            <div className="flex justify-center">
              <button className="text-white text-lg font-black mb-[119px] bg-[#7081FE] rounded-3xl w-[126px] text-center h-[31px]" type="submit">Add</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ProductList;
