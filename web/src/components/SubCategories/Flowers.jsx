import React,{useState} from 'react'
import image from "../Image/plus.png"
import exotic from "../Image/no3.png"
import premium from "../Image/premium.png"
import others from "../Image/No2.png"

import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination } from 'swiper'

import "swiper/css";
import "swiper/css/pagination";



const Category = [

    { 
      id:1,
      img:exotic,
      type:"Exotic",
      
    },
    {
      id:2,
      img:premium,
      type:"Premium",
      
    },
    {
      id:3,
      img: others,
      type:"Blu3",
    },
    {
      id:4,
      img: others,
      type:"Exacts",
    },
    {
      id:5,
      img: others,
      type:"Exacts",
    },
    {
      id:6,
      img: others,
      type:"Exacts",
    },
    {
      id:7,
      img: others,
      type:"Exacts",
    },
    {
      id:8,
      img: others,
      type:"Exacts",
    },
   ]

const Flowers = ({getSubCategory}) => {
  const [id , setId] = useState("")
  const [SubCategories , setSubcategories] = useState("")

  getSubCategory(SubCategories)
  return (<div>
       <div className='pt-[28.7px] ml-[30px] mr-[16px]  flex justify-between font-semibold'>
    <h1>Flowers</h1>
    <img src={image} alt="png"/>
      </div>
      {/* subcategory swiper */}
    <Swiper className='flex  '
     spaceBetween={10} slidesPerView={3}
     modules={[Pagination]}
     pagination={{clickable: true}}>
      {
        Category.map((lists)=>(
          <SwiperSlide key={lists.id} className="ml-[30px] pt-[29px] pb-[50px]">
          <button  onClick={ ()=> {
           
            setId(lists.id)
            setSubcategories(lists.type)
           }}  className={`${id=== lists.id ? "h-[150px] w-[120px] sm:w-[135px] sm:h-[170px] bg-gradient-to-tr from-[#5CEF99] to-[#3D54FF]":
            "h-[150px] w-[120px] sm:w-[135px] sm:h-[170px] bg-[#FCFFFD] shadow-sm"} focus:outline-0 flex flex-col items-center justify-center 
           rounded-[20px] tranform duration-500`}>
            <img src={lists.img} alt="flowers" className='w-[92px] h-[83px] rounded-full border-[1px] border-[#707070]' />
            <h2 className='pt-[8px] font-bold'>{lists.type}</h2>

          </button>
        </SwiperSlide>
        ))
      }
    </Swiper>
    </div>
  )
}

export default Flowers