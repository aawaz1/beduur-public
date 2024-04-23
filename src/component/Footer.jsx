import { Grid } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex bg-custom-blue'>
    <div className='w-[50%] bg-custom-blue relative overflow-hidden p-4 pl-[10%]'>
        <h1 className='text-white font-md p-2 text-[1.5rem]'>Call Us Today</h1>
        <h1 className='text-white font-semibold p-2 text-[1.5rem]'>Got A Question? We Would Be
            Happy To Help!</h1>
        <div>
            <div>
                <div style={{ backgroundColor: "rgba(44, 140, 140, 1)" }} className=' relative  p-[1rem] w-[6rem] bg-[rgba(44, 140, 140, 1)] rounded-full flex justify-start items-center '>
                    <div className=' relative z-10 rounded-full w-[100%] px-3 py-4 bg-black flex justify-center items-center '>
                        <img src='/Vector.png' />

                    </div>
                    <div className='absolute rounded-full text-custom-blue text-[1rem] font-bold pr-[1rem] left-[2rem] p-2 flex items-center justify-end bg-white  h-[2rem] w-[14rem]'>+(61) 18756-01247</div>
                </div>
            </div>

        </div>


    </div>


    <div className='w-[50%] bg-black p-6 pl-[10%] relative overflow-hidden' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 8% 100%)' }}>
        <h1 className='text-white p-2'>NEWS LETTER</h1>
        <h1 className='text-white font-bold p-2 text-[1.5rem]'>Subscribe To Our NewsLetter</h1>
        <div className='flex gap-2'>
            <input style={{ border: "2px solid gray" }} className='bg-black  w-[60%] rounded-full' />
            <button className='bg-custom-blue px-4 py-2 text-white ' style={{ clipPath: 'polygon(8% 0%, 100% 0%, 90% 100%, 0% 100%)' }}>Subscribe</button>
        </div>
    </div>

</div>

<div className='w-[80%] m-[auto] flex flex-col justify-center items-center py-6 '>
    <Grid container>
        <Grid item xs={12} md={4}>
            <div className=''>
                <img src='/image 1 (1).png' />
                <h1 className='text-gray-400 '>A Finacial Coach And A Business Consultant</h1>
            </div>

        </Grid>
        <Grid item xs={12} md={4}>
            <div className='gap-2'>
                <h1 className='text-black text-[1.3rem] font-semibold py-1'>Quick Links</h1>
                <h1 className='text-gray-300 font-poppins'>Home</h1>
                <h1 className='text-gray-300 font-poppins'>About Us</h1>
                <h1 className='text-gray-300 font-poppins '>Services</h1>
                <h1 className='text-gray-300 font-poppins '>Contact Us</h1>

            </div>
        </Grid>
        <Grid item xs={12} md={4}>
        <div className='gap-2'>
                <h1 className='text-black text-[1.3rem] font-semibold py-1'>Services</h1>
                <h1 className='text-gray-300 font-poppins'>Membership</h1>
                <h1 className='text-gray-300 font-poppins'>Book Consultation</h1>
                <h1 className='text-gray-300 font-poppins '>Booking</h1>
                <h1 className='text-gray-300 font-poppins '>Pages</h1>

            </div>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item xs={12} md={3}>
            <div className='flex gap-1'>
            <img src='/div.elementor-icon-box-icon (2).png'/>
            <h1 className='font-semibold text-black'>LONDON EYE LONDON UK</h1>
            </div>
            </Grid>
        <Grid item xs={12} md={3}>
        <div className='flex gap-1'>
            <img src='/div.elementor-icon-box-icon (3).png'/>
            <h1 className='font-semibold text-black'>(+454) 5344 7543</h1>
            </div>
        </Grid>
        <Grid item xs={12} md={3}>
        <div className='flex gap-1'>
            <img src='/div.elementor-icon-box-icon (4).png'/>
            <h1 className='font-semibold text-black'>mail@Billierd.com</h1>
            </div>
        </Grid>
        <Grid item xs={12} md={3}>
            <div className='flex gap-1'>
                <img src='/span.elementor-grid-item.png'/>
                <img src='/span.elementor-grid-item (1).png'/>
                <img src='/span.elementor-grid-item (2).png'/>

            </div>
        </Grid>
    </Grid>
    
</div>
<div className="flex flex-col w-[80%] m-[auto]">
<div className="flex flex-col justify-center py-4 w-[100%] max-md:max-w-full">
<div className="w-[100%] border-t border-gray-800 border-solid min-h-[1px] max-md:max-w-full" />
</div>
<div className="items-center pr-16 pb-3.5 pl-20 mt-5 w-full text-base leading-6 text-center text-zinc-400 max-md:px-5 max-md:max-w-full">
© 2023 AN INTERNATIONAL • All Rights Reserved
</div>
</div>
</>
  
  )
}

export default Footer