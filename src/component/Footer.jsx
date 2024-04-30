import { Grid } from '@mui/material'
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <>
            <div className='block lg:hidden blockflex flex-col'>
                <div className='w-[100%] lg:w-[50%] bg-custom-blue relative overflow-hidden p-4 pl-[10%]'>
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


                <div className='w-[100%] lg:w-[50%] bg-black p-6 pl-[10%] relative overflow-hidden' >
                    <h1 className='text-white p-2'>NEWS LETTER</h1>
                    <h1 className='text-white font-bold p-2 text-[1.5rem]'>Subscribe To Our NewsLetter</h1>
                    <div className='flex gap-2'>
                        <input style={{ border: "2px solid gray" }} className='bg-black  w-[60%] rounded-full' />
                        <button className='bg-custom-blue px-4 py-2 text-white ' style={{ clipPath: 'polygon(8% 0%, 100% 0%, 90% 100%, 0% 100%)' }}>Subscribe</button>
                    </div>
                </div>

            </div>
            <div className='hidden lg:flex  bg-custom-blue'>
                <div className='w-[50%] bg-custom-blue relative overflow-hidden p-4 pl-[10%]'>
                    <h1 className='text-white font-md p-2 text-[1.5rem]'>Mail Us Today</h1>
                    <h1 className='text-white font-semibold p-2 text-[1.5rem]'>Got A Question? We Would Be
                        Happy To Help!</h1>
                        <div className='w-[50%] rounded-full text-custom-blue text-[1rem] font-bold   p-2 flex justify-center items-center bg-white  h-[2rem] '>bodouralmutairicoach@gmail.com</div>
                    <div>
                        <div>
                            {/* <div style={{ backgroundColor: "rgba(44, 140, 140, 1)" }} className=' relative  p-[1rem] w-[6rem] bg-[rgba(44, 140, 140, 1)] rounded-full flex justify-start items-center '> */}
                                {/* <div className=' relative z-10 rounded-full w-[100%] px-3 py-4 bg-black flex justify-center items-center '>
                                    <img src='/Vector.png' />

                                </div> */}
                                {/* <div className='absolute rounded-full text-custom-blue text-[1rem] font-bold pr-[1rem] left-[2rem] p-2 flex items-center justify-end bg-white  h-[2rem] '>bodouralmutairicoach@gmail.com</div> */}
                            {/* </div> */}
                        </div>

                    </div>


                </div>


                <div className='w-[50%] bg-black p-6 pl-[10%] relative overflow-hidden' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 8% 100%)' }}>
                    {/* <h1 className='text-white p-2'>NEWS LETTER</h1>
                    <h1 className='text-white font-bold p-2 text-[1.5rem]'>Subscribe To Our NewsLetter</h1> */}
                    {/* <div className='flex gap-2'>
                        <input style={{ border: "2px solid gray" }} className='bg-black  w-[60%] rounded-full' />
                        <button className='bg-custom-blue px-4 py-2 text-white ' style={{ clipPath: 'polygon(8% 0%, 100% 0%, 90% 100%, 0% 100%)' }}>Subscribe</button>
                    </div> */}
                </div>

            </div>

            <div className='lg:w-[80%] lg:m-[auto] flex flex-col justify-center items-center gap-8 px-2 lg:px-0 py-6 '>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={3}>
                        <div className='flex flex-col gap-4'>
                            <img src='/image 1 (1).png' className='w-[10rem]' />
                            <h1 className='text-gray-400 font-semibold text-sm'>A Financial Coach And A Business Consultant</h1>
                            <div className='flex justify-start items-center gap-4'>
                            <a href="https://www.instagram.com/almutairibedoor/?hl=en" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon fontSize='1rem'/>
</a>
                                
                           
                            <a href="https://www.youtube.com/channel/UCTCfg79klGY8fE0jRtt_5jg?app=desktop" target="_blank" rel="noopener noreferrer">
                            <YouTubeIcon />
</a>
                          

                        </div>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className='gap-2'>
                            <h1 className='text-black text-[1.1rem] font-bold py-1'>Our Company</h1>
                            <h1 className='text-gray-400 text-[1rem] font-medium'>Home</h1>
                            <h1 className='text-gray-400 font-semibold'>About Us</h1>
                            <h1 className='text-gray-400 font-semibold '>Contact Us</h1>
                            

                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className='gap-2'>
                            <h1 className='text-black text-[1.1rem] font-bold py-1'>Services</h1>
                            <h1 className='text-gray-400 text-[1rem] font-medium'>Membership</h1>
                            <h1 className='text-gray-400 text-[1rem] font-medium'>Book Consultation</h1>
                            <h1 className='text-gray-400 text-[1rem] font-medium'>Booking</h1>
                           

                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className=' flex flex-col gap-1'>
                            <h1 className='text-black text-[1.1rem] font-bold py-1'>Contact Us</h1>
                            <div className='flex justify-center items-center gap-2'>
                            <img src='/div.elementor-icon-box-icon (2).png'  className='h-4' />
                            <h1 className='font-semibold  text-gray-400'>Office no:07, 04tth floor, Al Fajer complex, Tunis st, Hawally, Kuwait</h1>
                        </div>
                            <div className='flex justify-start items-center gap-2'>
                            <img src='/div.elementor-icon-box-icon (4).png' className='h-4' />
                            <h1 className='font-semibold text-gray-400 '>bodouralmutairicoach@gmail.com</h1>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <img src='/div.elementor-icon-box-icon (3).png' className='h-4' />
                            <h1 className='  font-semibold text-gray-400'>Coming Soon</h1>
                        </div>
                            

                        </div>
                    </Grid>
                </Grid>
                {/* <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <div className='flex justify-start items-center gap-1'>
                            <img src='/div.elementor-icon-box-icon (2).png' />
                            <h1 className='font-semibold font-poppins text-black'>LONDON EYE LONDON UK</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className='flex justify-start items-center gap-1'>
                            <img src='/div.elementor-icon-box-icon (3).png' />
                            <h1 className=' font-poppins font-semibold text-black'>(+454) 5344 7543</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className='flex justify-start items-center gap-1'>
                            <img src='/div.elementor-icon-box-icon (4).png' />
                            <h1 className='font-semibold text-black font-poppins'>mail@Billierd.com</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className='flex justify-start items-center gap-1'>
                            <img src='/span.elementor-grid-item.png' />
                            <img src='/span.elementor-grid-item (1).png' />
                            <img src='/span.elementor-grid-item (2).png' />

                        </div>
                    </Grid>
                </Grid> */}

            </div>
            <div className="flex flex-col w-[100%] lg:w-[80%] m-[auto]">
                <div className="flex flex-col justify-center py-1 w-[100%] max-md:max-w-full">
                    <div className="w-[100%] border-t border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
                </div>
                <div className="items-center pr-16 py-2.5 pl-20  w-full  leading-6 text-sm md:text-[0.9rem]  text-center text-zinc-400 max-md:px-5 max-md:max-w-full">
                    © 2023 AN INTERNATIONAL • All Rights Reserved
                </div>
            </div>
        </>

    )
}

export default Footer