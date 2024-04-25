import React, { useState } from 'react'

const MembershipHeader = ({ title, title1, title2, title3, business, setBusiness }) => {

  return (
    <div style={{ backgroundImage: `url("/Section (2).png")` }} className='h-[15rem]'>
      <div className='flex justify-between  w-[60%] m-[auto] h-[100%]'>
        <h1 className='text-white font-semibold font-poppins items-center justify-center flex   text-[1.5rem]'>
          {title}
        </h1>
        <div className='h-[100%] flex items-end '>
          <div style={{ borderTopRightRadius: "9px", borderTopLeftRadius: "9px" }} className='bg-white rounded-tl-12 rounded-tr-12'>
            <h1 className='px-6 pt-2 pb-1  font-kumbh-sans font-md'><span onClick={setBusiness ? () => setBusiness(1) : null} className={` ${business === 1 ? 'text-custom-blue' : 'text-gray-400'} mx-1 cursor-pointer font-kumbh-sans`} >{title1} </span>
            <span className='mx-1'>|</span>
              <span onClick={setBusiness ? () => setBusiness(2) : null} className={` ${business === 2 ? 'text-custom-blue' : 'text-gray-400'} mx-1 cursor-pointer font-kumbh-sans`}>{title2}</span>
              {title3 ? (<><span className='mx-1'>|</span>
                <span className={` ${business === 3 ? 'text-custom-blue' : 'text-gray-400'} mx-1 cursor-pointer font-kumbh-sans`}
 onClick={() => setBusiness(3)}>{title3}</span></>) : null}
            </h1>
          </div>
          <div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default MembershipHeader