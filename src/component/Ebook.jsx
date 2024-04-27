import React from 'react'
import MembershipHeader from './MembershipHeader'

const Ebook = () => {
    return (
        <div className='flex  flex-col gap-4 md:p-4'>
            <div>
                <MembershipHeader business={null} setBusiness={null} title={"E Book Service"} title1={"Free E-Book"} title2={"Paid"} title3={null} />
            </div>
            <div className='lg:w-[80%] lg:mx-auto shadow-lg p-1 lg:p-2'>
                <div className="flex flex-col justify-center py-4 w-[100%] max-md:max-w-full">
                    <div className="w-[100%] border-t-[6px] border-custom-green border-solid min-h-[1px] max-md:max-w-full" />
                </div>

                <div className='flex flex-col lg:flex-row w-[100%] gap-4'>
                    <div className='w-[50%] bg-white'>
                        <div>
                            <h1 className='text-custom-green font-semibold font-poppins lg:p-4 lg:pl-8'>
                                FREE E-BOOK
                            </h1>
                            <div className="flex flex-col justify-center px-4 pl-8 py-4 w-[80%] max-md:max-w-full">
                                <div className="w-[100%] border-t border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
                            </div>
                            <div>
                                <img src='/14565644_5511048 1.png' className='w-[80rem]' />
                            </div>

                        </div>

                    </div>

                    <div className='flex flex-col gap-4 p-4 py-16 w-[50%] lg:w-[100%]'>



                        <div className='flex gap-12 w-[25rem] md:w-[100%]'>
                            <div className='flex flex-col w-[70%] gap-2'>
                                <label className='text-md font-md' for="username">Name</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Name" type="text" />

                            </div>



                        </div>
                        <div className='flex gap-12 w-[25rem] md:w-[100%]'>
                            <div className='flex flex-col w-[70%] gap-2'>
                                <label className='text-md font-md' for="username">Email</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Email" type="text" />

                            </div>


                        </div>
                        <div className='flex gap-12 w-[25rem] md:w-[100%]'>
                            <div className='flex flex-col w-[70%] gap-2'>
                                <label className='text-md font-md' for="username">Phone</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Phone" type="text" />

                            </div>



                        </div>
                        <div>
                            <h1 className='text-[1rem] font-poppins w-[18rem] md:w-[70%]'>
                                Choose the session time according to chosen date or your else appointment will be get cancelled.
                            </h1>
                        </div>
                        <div className=' cursor-pointer flex justify-center items-center w-[18rem] md:w-[70%] bg-custom-green text-sm text-white p-3 px-22 rounded-lg'>
                            Get Free E-Book
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ebook