import React, { useState } from 'react'
import MembershipHeader from './MembershipHeader'
import IconProp from './Props/IconProp';

const Calender = () => {
    const [business, setBusiness] = useState(1);
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <MembershipHeader business={business} setBusiness={setBusiness} title={"Book Consultation Service"} title1={"Home Business Session"} title2={"Small & Middle Business"} title3={"Business Development Contract"} />
            </div>
            <div>
                <IconProp title={business === 1 ? ("HOME BUSINESS SESSION") : business === 2 ? ("Small & Middle Business") : ("Business Development Contract")} title1={"12 Illustrated Subjects: Monthly topics covering various financial aspects such as money energy, financial readiness, global market investing, establishing projects."}
                    title2={"6 Zoom Meetings: Subscribers have the opportunity to attend direct meetings with the program organizers to address important financial issues and have their questions answered."}
                    title3={"6 Consultations via Email: Each subscriber can seek personalized advice related to their financial situation, income management, or investment path through email consultations."} />
            </div>
            <div className='lg:w-[80%] lg:mx-auto '>
                <div className="flex flex-col justify-center py-4 w-[100%] max-md:max-w-full">
                    <div className="w-[100%] border-t-[6px] border-custom-green border-solid min-h-[1px] max-md:max-w-full" />
                </div>

                <div>
                    <div>

                    </div>

                    <div className='flex flex-col gap-4 p-4'>

                        <div className='px-6 flex justify-start items-center'>
                            <div className='bg-gray-200 rounded-md p-2 px-8 '>
                                <h1 className=' text-md lg:text-[1.2rem] text-custom-black font-semibold'>Session Cost :- 150.000 KD</h1>

                            </div></div>
                        <div className='flex flex-col lg:flex-row gap-4 lg:gap-12'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-md font-md' for="username">Name</label>
                                <input className=" border border-gray-300 rounded-md p-2 w-[100%]" placeholder="Name" type="text" />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-md font-md' for="username">Email</label>
                                <input className="border border-gray-300 rounded-md p-2 w-[100%]" placeholder="Email" type="text" />

                            </div>



                        </div>
                        <div className='flex flex-col lg:flex-row gap-4 lg:gap-12'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-md font-md' for="username">Phone</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Phone" type="text" />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-md font-md' for="username">Session Type</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Session Type" type="text" />

                            </div>


                        </div>
                        <div className='flex flex-col lg:flex-row gap-4 lg:gap-12'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-md font-md' for="username">Session Date</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Session Date" type="text" />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-md font-md' for="username">Session Time</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Session Time" type="text" />

                            </div>


                        </div>
                        <div className='flex gap-4 lg:gap-12'>
                            <div className='flex flex-col gap-2 w-[100%] lg:w-[30%]'>
                                <label className='text-md font-md' for="username">Payment Type</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Payment Type" type="text" />

                            </div>



                        </div>
                        <div>
                            <h1 className='text-[1rem] font-poppins lg:w-[30%]'>
                                Choose the session time according to chosen date or your else appointment will be get cancelled.
                            </h1>
                        </div>
                        <div className=' cursor-pointer flex justify-center items-center lg:w-[30%] bg-custom-green text-sm text-white p-3 px-22 rounded-lg'>
                            Submit Message
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calender