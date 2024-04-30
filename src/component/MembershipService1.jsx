import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BeginMembership from './BeginMembership';


const MembershipService1 = () => {

    const sessionCard = () => {
        return (
            <div className='relative  lg:min-w-[7rem] xl:min-w-[10rem] w-[10rem]'>
            <div className='h-[3rem] '><img src='/div (1).png' />
            </div>
            <div style={{ zIndex: 1 }} className=' relative p-3 '><img src='/image 6.png' />
                <h1 className='text-white text-sm'>File Title</h1>
                <h1 className='text-white text-sm'>Views</h1></div>
            {/* <div style={{clipPath : "polygon(0% 45%, 0% 100%, 100% 100%, 100% 0%)"}} className='bg-custom-green w-[100%] h-[40%] absolute bottom-0 left-0'>
       
    </div> */}
        </div>

        )
    }
    return (
        <div className='flex flex-col gap-7 '>
            <div style={{ backgroundImage: `url("/Section (2).png")` }} className='h-[15rem]'>
                <div className='flex justify-between  w-[60%] m-[auto] h-[100%]'>
                    <h1 className='text-white font-semibold font-poppins items-center justify-center flex   text-[1.5rem]'>
                        Membership Service
                    </h1>
                    <div className='h-[100%] flex items-end '>
                        <div style={{ borderTopRightRadius: "9px", borderTopLeftRadius: "9px" }} className='bg-white rounded-tl-12 rounded-tr-12'>
                            <h1 className='px-6 pt-2 pb-1 text-gray-400 font-kumbh-sans font-md'>Begin <span className='mx-1'>|</span><span className='text-custom-green mx-1   font-kumbh-sans'>Business Membership</span></h1>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            </div>
            <BeginMembership/>
            <div className='flex flex-col gap-6'>
                <div className=''>
                <div className='w-[80%] m-[auto] flex flex-col  gap-6 p-2'>
                    <h1 className='text-black text-[2rem] font-poppins font-semibold'>Session 1</h1>
                    <div className='flex gap-10'>
                    <div className='flex flex-col gap-10 w-[96%] '>
                        <div className='flex gap-4 justify-end items-end'>
                           
                            <button className='bg-custom-green text-white rounded-md py-1 px-2'>View All</button>
                        </div>
                     <div className='flex gap-10'>
                     {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                     </div>
                     
                      </div>
                        
                      
                      
                       
                      
                    </div>

                </div>
                <div className='w-[80%] m-[auto] flex flex-col   gap-6 p-2'>
                    <h1 className='text-black text-[2rem] font-poppins  font-semibold'>Session 2</h1>
                    <div className='flex gap-10'>
                    <div className='flex flex-col gap-10 w-[96%] '>
                        <div className='flex gap-4 justify-end items-end'>
                           
                            <button className='bg-custom-green text-white rounded-md py-1 px-2'>View All</button>
                        </div>
                     <div className='flex gap-10'>
                     {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                     </div>
                     
                      </div>
                        
                      
                      
                       
                      
                       
                    </div>

                </div>
                <div className='w-[80%] m-[auto] flex flex-col  gap-6 p-2'>
                    <h1 className='text-black text-[2rem] font-poppins font-semibold'>Session 3</h1>
                    <div className='flex gap-10'>
                    <div className='flex flex-col gap-10 w-[96%] '>
                        <div className='flex gap-4 justify-end items-end'>
                           
                            <button className='bg-custom-green text-white rounded-md py-1 px-2'>View All</button>
                        </div>
                     <div className='flex gap-10'>
                     {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                     </div>
                     
                      </div>
                        
                      
                      
                       
                      
                       
                    </div>

                </div>
                <div className='w-[80%] m-[auto] flex flex-col  gap-6 p-2'>
                    <h1 className='text-black text-[2rem] font-poppins font-semibold'>Live Meetings</h1>
                    <div className='flex gap-10'>
                    <div className='flex flex-col gap-10 w-[96%] '>
                        <div className='flex gap-4 justify-end items-end'>
                            
                            <button className='bg-custom-green text-white rounded-md py-1 px-2'>View All</button>
                        </div>
                     <div className='flex gap-10'>
                     {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                     </div>
                     
                      </div>
                        
                      
                      
                       
                      
                       
                    </div>

                </div>
                <div className='w-[80%] m-[auto] flex flex-col  gap-6 p-2'>
                    <h1 className='text-black text-[2rem] font-poppins font-semibold'>Head Sessions</h1>
                    <div className='flex gap-10'>
                      <div className='flex flex-col gap-10 w-[96%] '>
                        <div className='flex gap-4 justify-end items-end'>
                            <button className='bg-custom-green py-1 px-2 rounded-md text-white '>JAN</button>
                            <button className='bg-custom-green py-1 px-2 rounded-md text-white '>2024</button>
                            <button className='bg-custom-green text-white rounded-md py-1 px-2'>View All</button>
                        </div>
                     <div className='flex gap-10'>
                     {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                      {sessionCard()}
                     </div>
                     
                      </div>
                        
                      
                      
                       
                      
                       
                    </div>

                </div>
                </div>
               
            </div>

        </div>
    )
}

export default MembershipService1