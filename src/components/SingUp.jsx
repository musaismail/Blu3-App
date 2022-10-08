import React from 'react'
import Button from './Button'
import {Link} from "react-router-dom"

const SingUp = () => {
  return (
<form className='w-[220px] mt-[35.5px]'>
   <input placeholder='Email or Username'  className='w-full focus:outline-0 border-b-[1px] text-[14px] pb-[3.5px] text-[#1c1d1d] border-[#707070]'/>
   <input placeholder='Password' type="password" className='w-full  focus:outline-0 border-b-[1px] text-[14px] pb-[3.5px] border-[#707070] text-[#1c1d1d] mt-[24px]'/>
   <input placeholder='Confirm Password' type="password" className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px] border-[#707070] mb-[37.5px] text-[#1c1d1d] mt-[24px]'/>

  

      {/* Sign Up button */}
      <Link to="/homepage">
      <Button name=" Sign Up"  />

      </Link>

    </form>
  )
}

export default SingUp