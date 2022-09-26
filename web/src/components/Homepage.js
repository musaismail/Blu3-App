import React, { useState, useEffect } from "react";
import Avatar from "./Image/Avatar1.png";
import Hamburger from "./Image/hamburger.png";
import image from "./Image/plus.png";
import flower from "./Image/flower.png";
import extracts from "./Image/exacts.png";
import vapes from "./Image/Vapes.png";
import Flowers from "./SubCategories/Flowers";
import Vapes from "./SubCategories/Vapes";
import Extracts from "./SubCategories/Extracts";
import { FiShoppingCart } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import Infused from "./SubCategories/Infused";
import Prerolled from "./SubCategories/Prerolled";
import Gear from "./SubCategories/Gear";

const Category = [
  {
    id: 1,
    img: flower,
    type: "Flower",
  },
  {
    id: 2,
    img: vapes,
    type: "Vapes",
  },
  {
    id: 3,
    img: extracts,
    type: "Extracts",
  },
  {
    id: 4,
    img: vapes,
    type: "Infused",
  },
  {
    id: 5,
    img: flower,
    type: "Prerolled",
  },
  {
    id: 6,
    img: extracts,
    type: "Gear",
  },
];

const Homepage = () => {
  const [id, setId] = useState("");
  const [NameOfCategory, setNameOfCategory] = useState("");
  const [SubCategory, setSubcategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getSubCategory = (SubCategories) => {
    setSubcategory(SubCategories);
    console.log(SubCategory);
  };

  useEffect(() => {
    const results = Category.filter((o) =>
      o.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);
  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="bg-[#f5f5f5] w-full min-h-screen">
      <div className=" flex  flex-col justify-center items-center pt-[10] ">
        <ul className="flex justify-between w-full  pt-[70px]">
          <li>
            <img
              className="ml-[30px] h-[23.5px] w-[31.5px]"
              src={Hamburger}
              alt=""
            />
          </li>
          <li>
            <img
              className="mr-[30px] h-[32px] w-[31px] border-[3px] border-white rounded-full"
              src={Avatar}
              alt=""
            />
          </li>
        </ul>
      </div>

      <div className=" mt-[36px] ml-[30px] ">
        <p>Please Select </p>
        <p>Category You Like</p>
      </div>

      <div>
        <input
          className="w-[315px] h-[44px] ml-[30px] focus:outline-0 border-[2px]  border-[#3D54FF] rounded-3xl mt-4 pl-[30px] pr-[20px]"
          type="text"
          value={searchTerm}
          placeholder="Search"
          onChange={handleChange}
        />
      </div>

      {/* CATEGORY */}
      <div className="pt-[28.7px] ml-[30px] mr-[16px]  flex justify-between font-semibold">
        <h1>Category</h1>
        <img src={image} alt="png" />
      </div>
      {console.log(NameOfCategory)}
      {/* swiper */}
      <Swiper className="flex " spaceBetween={10} slidesPerView={3}>
        {searchResults &&
          searchResults.map((results) => (
            <SwiperSlide key={results.id} className=" ">
              <button
                onClick={() => {
                  setId(results.id);
                  setNameOfCategory(results.type);
                }}
                className={`${
                  id === results.id
                    ? "w-[100px] h-[62px] drop-shadow-[0px_9px_4px_rgba(23,255,120,0.3)] border-[2px] border-[#3d54ff] "
                    : "w-[102px] h-[64px] "
                } ml-[30px]  
                 flex flex-col  items-center mt-[38.1px] justify-center  transform duration-200  bg-white rounded-[12px]`}
              >
                <img
                  src={results.img}
                  alt="category"
                  className="w-[38px] h-[32px] object-contain "
                />
                <h1>{results.type}</h1>
              </button>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Sub category */}
      {id == 1 ? <Flowers getSubCategory={getSubCategory} /> : " "}
      {id == 2 ? <Vapes getSubCategory={getSubCategory} /> : " "}
      {id == 3 ? <Extracts getSubCategory={getSubCategory} /> : " "}
      {id == 4 ? <Infused getSubCategory={getSubCategory} /> : " "}
      {id == 5 ? <Prerolled getSubCategory={getSubCategory} /> : " "}
      {id == 6 ? <Gear getSubCategory={getSubCategory} /> : " "}
      {id == 7 ? <Flowers getSubCategory={getSubCategory} /> : " "}
      {id == 8 ? <Vapes getSubCategory={getSubCategory} /> : " "}

      <div className="flex justify-end pt-[50px] ml-[20px] m-5">
        <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#3D54FF] rounded-full">
          <Link to="/searchproductlist">
            <BsFillArrowRightCircleFill className="text-center w-[25px] h-[25px] text-[#FFFFFF]  " />
          </Link>
        </div>
      </div>

      <div className="flex justify-end ml-[20px] m-5">
        <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#3D54FF] rounded-full">
          <Link to="/productlist">
            <FiShoppingCart className="text-center w-[25px] h-[25px] text-[#FFFFFF]  " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
