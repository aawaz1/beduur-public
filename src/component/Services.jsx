import React from 'react'
import BeduurProfile from './BeduurProfile'
import ServicesComp from './ServicesComp'
import Faq from './Faq'
import Footer from './Footer'

const Services = () => {
  return (
    <div className='p-2 flex flex-col gap-8 '>
            
            <div>
                <BeduurProfile color={"custom-blue"} title1={"FINANCE CONSULTATION AND FINANCE COACH"} title2={"BEDUUR ALMUTAIRI"} title3={"Lets Grow Your Business Together"} />
            </div>
            
            <div className='flex md:w-[60%] md:m-[auto] flex-col md:flex-row '>
                <div className='md:w-[40%] flex flex-col gap-3'>
                    <h1 className='text-sm font-semibold text-custom-blue'>WHY CHOOSE OUR SERVICE</h1>
                    <h1 className='text-base font-bold'>Preparing for your <br />
                        success, we provide truly
                        prominent solutions</h1>
                    <h1 className='text-gray-300 text-md'>Tailored IT solutions that perfectly match the needs of
                        the services and manufacturing sector. We provide
                        robust start-up software solutions worldwide.</h1>
                    <div className='flex flex-col gap-1 cursor-pointer'>
                        <div className='flex gap-2 justify-start items-center bg-white hover:shadow-md p-3 rounded-md'> <div className='bg-custom-orange rounded-full px-4 py-2 text-white font-semibold'>1</div>
                            <div className='text-sm font-bold '>
                                Membership / Business Membership
                            </div>
                        </div>
                        <div className='flex gap-2  justify-start items-center bg-white hover:shadow-md p-3 rounded-md'> <div className='bg-custom-orange rounded-full px-4 py-2 text-white font-semibold'>2</div>
                            <div className='text-sm font-bold '>
                                Book Consultation
                            </div>
                        </div>
                        <div className='flex gap-2 justify-start items-center bg-white hover:shadow-md p-3 rounded-md'> <div className='bg-custom-orange rounded-full px-4 py-2 text-white font-semibold'>3</div>
                            <div className='text-sm font-bold '>
                                E-Books
                            </div>
                        </div>
                    </div>

                </div>

                <div className='relative md:w-[45%]'>
                    <div><img src='/div.elementor-column.png' className='md:w-[30rem] md:h-[30rem]' /></div>
                    <div className='bg-white justify-between flex border absolute right-[1.25rem] bottom-[37px] md:h-[5rem] p-5  md:w-[60%]'>
                        <div className='text-sm font-semibold text-black'>
                            <h1>Total Expirence</h1>
                            <h1>7+ Years</h1>
                        </div>
                        <div className='text-sm font-semibold text-black'>
                            <h1>Joined Members</h1>
                            <h1>1000</h1>
                        </div>
                    </div>
                </div>
            </div>

            <ServicesComp/>
            <Faq/>
           

        </div>
  )
}

export default Services