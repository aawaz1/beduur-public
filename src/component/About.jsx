import React from 'react'
import BeduurProfile from './BeduurProfile'
import BeduurImage from './BeduurImage'
import { Navigate, useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    return (
        <div className='p-1 pb-2 md:p-0 md:pb-4 flex flex-col gap-5 '>
           
            <div>
                <BeduurProfile color={"custom-blue"} title1={"FINANCE CONSULTATION AND FINANCE COACH"} title2={"BEDUUR ALMUTAIRI"} title3={"Lets Grow Your Business Together"} />
            </div>
            <div className='p-2'>
                <BeduurImage />
            </div>
            <div className='flex lg:w-[60%] lg:m-[auto] flex-col lg:flex-row '>
    <div className='lg:w-[40%] flex sm:justify-center lg:justify-normal sm:items-center lg:items-start lg:text-start sm:text-center flex-col gap-3'>
        <h1 className='text-sm font-semibold text-custom-blue'>WHY CHOOSE OUR SERVICE</h1>
        <h1 className='text-base font-bold'>Preparing for your <br />
            success, we provide truly
            prominent solutions</h1>
        <h1 className='text-gray-300 text-md'>Financial guidance sessions for individuals and projects, during which we work to develop an appropriate road map to achieve the desired goal.</h1>
        <div className='flex flex-col gap-1 cursor-pointer'>
            <div className='flex gap-2 justify-start items-center bg-white hover:shadow-md p-3 rounded-md'> <div className='bg-custom-orange rounded-full px-4 py-2 text-white font-semibold'>1</div>
                <div onClick={() => navigate('/membershipservice')} className='text-sm font-bold '>
                    Membership / Business Membership
                </div>
            </div>
            <div className='flex gap-2  justify-start items-center bg-white hover:shadow-md p-3 rounded-md'> <div className='bg-custom-orange rounded-full px-4 py-2 text-white font-semibold'>2</div>
                <div onClick={() => navigate('/calender')} className='text-sm font-bold '>
                    Book Consultation
                </div>
            </div>
            <div className='flex gap-2 justify-start items-center bg-white hover:shadow-md p-3 rounded-md'> <div className='bg-custom-orange rounded-full px-4 py-2 text-white font-semibold'>3</div>
                <div onClick={() => navigate('/ebook')} className='text-sm font-bold '>
                    E-Books
                </div>
            </div>
        </div>

    </div>

    <div className='relative w-[100%] lg:w-[45%] sm:justify-center lg:justify-normal sm:items-center lg:items-start'>
        <div><img src='/div.elementor-column.png' className='md:w-[30rem] md:h-[30rem]' /></div>
        <div className='bg-white justify-between flex border absolute right-[1.25rem] bottom-[37px] md:h-[5rem] p-3  md:w-[50%]'>
            <div className='text-sm font-semibold text-black py-2'>
                <h1>Total Expirence : 10+ Years</h1>
               
            </div>
           
        </div>
    </div>
</div>

        </div>
    )
}

export default About