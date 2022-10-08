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
      img:premium,
      type:"Cartridges",
    },
    {
      id:2,
      img:others,
      type:"Disposables",
    },
    { 
      id:3,
      img: exotic,
      type:"Pods",
      
    },
    { 
      id:4,
      img: exotic,
      type:"Vapes 3",
      
    },
    { 
      id:5,
      img: exotic,
      type:"Vapes 3",
      
    },
    { 
      id:6,
      img: exotic,
      type:"Vapes 3",
      
    },
    { 
      id:7,
      img: exotic,
      type:"Vapes 3",
      
    },
   ]

const Vapes = ({getSubCategory}) => {
  const [id , setId] = useState("")
  const [SubCategories , setSubcategories] = useState("")
  getSubCategory(SubCategories)

  return (<div>
       <div className='pt-[28.7px] ml-[30px] mr-[16px]  flex justify-between font-semibold'>
    <h1>Vapes</h1>
    <img src={image} alt="png"/>
      </div>
      {/* subcategory swiper */}
      {console.log(SubCategories)}
      <Swiper className='flex  '
     spaceBetween={10} slidesPerView={3}
     modules={[Pagination]}
     pagination={{clickable: true}}>
      {
        Category.map((lists)=>(
          <SwiperSlide key={lists.id} className="ml-[30px] pb-[50px] pt-[29px]">
            
          <button  onClick={ ()=> {
            setId(lists.id)
            setSubcategories(lists.type)
            console.log("click is working")
           }}  className={`${id=== lists.id ? "h-[150px] w-[120px] sm:w-[135px] sm:h-[170px] bg-gradient-to-tr from-[#5CEF99] to-[#3D54FF]":
            "h-[150px] w-[120px] sm:w-[135px] sm:h-[170px] bg-[#FCFFFD] shadow-sm"} flex  focus:outline-0 flex-col items-center justify-center 
           rounded-[20px] tranform duration-500`}>
            <img src={lists.img} alt="flowers" className='w-[92px] object-cover h-[83px] rounded-full border-[1px] border-[#707070]' />
            <h2 className='pt-[8px] font-bold'>{lists.type}</h2>

          </button>
          
        </SwiperSlide>
        ))
      }
    </Swiper>
    </div>
  )
}

export default Vapes