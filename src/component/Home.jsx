import React from 'react'
import BeduurProfile from './BeduurProfile'
import Comp from './Comp'
import './conatiner.css'
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    return (
        <div className=' p-1 pb-2 flex flex-col  gap-8 md:p-0 md:pb-4'>
           
           <div>
                <BeduurProfile color={"custom-blue"} title1={"FINANCE CONSULTATION AND FINANCE COACH"} title2={"BEDUUR ALMUTAIRI"} title3={"Lets Grow Your Business Together"} />
            </div>
            <div className='container m-auto items-center flex  md:py-12'>
                <div className='flex justify-center'>
                    <div className='flex flex-col gap-1 lg:flex-row lg:w-[90%] '>
                        <div className='w-[100%] '>
                            <img src='/Container (1).png' className='w-[100%]' />
                        </div>
                        <div style={{ backgroundImage: "url(./beduurbg.png)" }} className='bg-custom-blue flex justify-end  w-[100%] lg:w-[30%] md:p-4 md:py-6 '>
                            <div >
                                <h2 className='font-poppins text-3xl text-white font-bold p-1 md:p-4'>Bedoor Almutairi</h2>
                                <h2 className='font-poppins text-sm text-white font-thin  p-2 md:p-4'>A financial coach and project consultant. She obtained a Bachelor’s degree in Business Administration/Economics in 2012 from the Arab Open University. She has been working in the field of financial training and business consulting since 2016.
                                </h2>
                                <div className='flex p-3 md:p-1 gap-3'>
                                    <img src='div.elementor-icon-box-icon.png' style={{ height: "2rem" }} />
                                    <div>
                                        <h2 className='font-poppins text-md text-white font-semibold '>Focus on Business Efficiency
                                        </h2>
                                        <h2 className='font-poppins text-md text-white font-medium '>
                                            Porta semper magna elementum vel auctor tempus pulvinar dignissim
                                            rutrum egestas si</h2>
                                    </div>
                                </div>
                                <div className='flex p-3 md:p-1 gap-3'>
                                    <img src='/div.elementor-icon-box-icon (1).png' style={{ height: "2rem" }} />
                                    <div>
                                        <h2 className=' text-md text-white font-semibold '>Focus on Plan Target

                                        </h2>
                                        <h2 className='font-poppins text-md text-white font-medium '>
                                            Porta semper magna elementum vel auctor tempus pulvinar dignissim
                                            rutrum egestas si</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                        </div>

                </div></div>

            <div className='bg-gradient-to-b from-custom-blue to-black p-4 flex justify-center items-center flex-col'>

                <h1 className='text-md text-custom-skyblue font-poppins py-8 '>
                    OUR SERVICES
                </h1>
                <h1 className=' text-xl md:text-3xl text-white font-bold font-poppins py-8 text-center'>

                    We are ahead of our competitors in new
                    <br />
                    Business consultation.


                </h1>
                <div className='flex flex-col lg:flex-row gap-9  p-10'>
                    <Comp navigation={"/membershipservice"} title1={"MemberShip"} title2={"Business Membership"} heading={"Membership services offer you programs and materials that prepare you to start a new, different phase of your life"} bgColor='#E1EDE7' />
                    <Comp navigation={"/calender"} title1={"Book"} title2={"Consultation"} heading={"We cater to the needs of diverse industries across verticals. We are a team of devoted souls We are a team of devoted souls."} bgColor='#FFFFFF'/>
                    <Comp navigation={"/ebook"} title1={"Free/Paid"} title2={"E-Books"} bgColor='#FFFDEB' heading={"We are a team of devoted souls in the area of mainframe technologies. We also develop new software We are a team of devoted souls."}/>


                </div>

            </div>

            <div className='lg:m-[auto] lg:w-[80%]  md:p-2 flex  flex-col lg:flex-row'>
                <div className='bg-gradient-to-b from-custom-blue to-black w-full lg:w-[15%] flex flex-col-reverse h-[7rem] lg:h-[20rem] '>
                    <div className='px-4 lg:px-0'>
                        <div className='flex justify-start lg:justify-end  pr-6 '><h1 className='text-white   text-md'>TESTIMONAL</h1></div>
                        <h1 className='text-white pr-6  justify-start lg:justify-end flex py-2 font-semibold  text-sm'>Our Happy Customers</h1>
                    </div>
                </div>
                <div className=' w-full lg:w-[80%] flex justify-end items-end md:px-2'>
                    
                    <div>
                        <h1 className='text-gray-300 text-[1.2rem] md:text-[1.5rem] font-georgia p-1'>Of the things that I have benefited From is, of course my knowledge and communication with you 
Thank you. I hope you give more than the agreed upon service such as you always open the door for questions or a request for help
 I benefited from the encouragement that I feel is real and not just simulated, so that you understand his interactions and see his advantages and short coming
Follow-up tables arrange the work and are useful for evaluation
An impact on me after Kong. you work in business and participate in project I mean I really live what you say 
There are useful instruction that help me to make sure that I use social media diversify and understand product, and communicate with suppliers from outside and urgency if the situation required and that contacting them can give result faster than an email, and that I can see supplier with reasonable prices and easy and benefits
And sure I will follow up on changing the system of life 
I would love for you to see the psychological side, not just the number
And Thank you</h1>
                        <div>
                            <h1 className='text-black font-bold'>Maryam  </h1>
                            <h1 className='text-custom-blue font-semibold text-sm'>Kuwait</h1>
                        </div>
                    </div>
                    <div></div>

                </div>

            </div>
            {/* <div className='flex bg-custom-blue'>
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
    </div> */}



        </div>
    )
}

export default Home

// left: 2rem;
//     height: 2rem;
//     width: 12rem;
//     max-width: 100rem;
//     justify-content: flex-end;
//     display: flex;
//     align-items: center;
//     padding-right: 1rem;
//     z-index: 23;