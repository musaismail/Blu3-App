import React,{useState} from 'react'
import image from "../Image/plus.png"
import premium from "../Image/premium.png"
import others from "../Image/No2.png"

import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination } from 'swiper'

import "swiper/css";
import "swiper/css/pagination";




const Category = [

    { 
      id:1,
      img:premium,
      type:"Hash-Hole",
      
    },
    {
      id:2,
      img:others,
      type:"Kief",
      
    },
    {
      id:3,
      img: premium,
      type:"Virgin",
    },
    {
      id:4,
      img: premium,
      type:"Prerolled 4",
    },
    {
      id:5,
      img: premium,
      type:"Prerolled 5",
    },
   ]

const Prerolled = ({getSubCategory}) => {
  const [id , setId] = useState("")
  const [SubCategories , setSubcategories] = useState("")

  getSubCategory(SubCategories)
  return (<div>
       <div className='pt-[28.7px] ml-[30px] mr-[16px]  flex justify-between font-semibold'>
    <h1>Prerolled</h1>
    <img src={image} alt="png"/>
      </div>
      {/* subcategory swiper */}
      {console.log(SubCategories)}
      <Swiper className='flex  '
     spaceBetween={10} slidesPerView={3}  modules={[Pagination]}
     pagination={{clickable: true}}>
      
      {
        Category.map((lists)=>(
          <SwiperSlide key={lists.id} className="ml-[30px] pb-[50px] pt-[29px]">
          <button  onClick={ ()=> {
            setId(lists.id)
            setSubcategories(lists.type)
            console.log("click is working")
           }}  className={`${id=== lists.id ? "h-[180px] w-[140px] bg-gradient-to-tr from-[#5CEF99] to-[#3D54FF]":
            "w-[135px] h-[170px] bg-[#FCFFFD] shadow-sm"} flex focus:outline-0 flex-col items-center justify-center 
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

export default Prerolled;
