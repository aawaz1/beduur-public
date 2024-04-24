import React from 'react'

const Calender = () => {
    return (
        <div>
            <div className='w-[80%] mx-auto flex'>
                <div>

                </div>

                <div className='flex flex-col gap-4 p-4'>
                   <div className='px-6 flex justify-start items-center'> <div className='bg-gray-200 rounded-md p-2 px-8 '>
                        <h1 className=' text-[1.2rem] text-custom-black font-poppins font-semibold'>Session Cost :- 150.000 KD</h1>

                    </div></div>
                    <div className='flex gap-12'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-md font-md' for="username">Name</label>
                            <input className=" border border-gray-300 rounded-md p-2 w-[100%]" placeholder="Name" type="text" />

                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-md font-md' for="username">Email</label>
                            <input className="border border-gray-300 rounded-md p-2 w-[100%]" placeholder="Email" type="text" />

                        </div>



                    </div>
                    <div className='flex gap-12'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-md font-md' for="username">Phone</label>
                            <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Phone" type="text" />

                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-md font-md' for="username">Session Type</label>
                            <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Session Type" type="text" />

                        </div>


                    </div>
                    <div className='flex gap-12'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-md font-md' for="username">Session Date</label>
                            <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Session Date" type="text" />

                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-md font-md' for="username">Session Time</label>
                            <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Session Time" type="text" />

                        </div>


                    </div>
                    <div className='flex gap-12'>
                        <div className='flex flex-col gap-2 w-[65%]'>
                            <label className='text-md font-md' for="username">Payment Type</label>
                            <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Payment Type" type="text" />

                        </div>



                    </div>
                    <div>
                        <h1 className='text-[1rem] font-poppins w-[65%]'>
                            Choose the session time according to chosen date or your else appointment will be get cancelled.
                        </h1>
                    </div>
                    <div className=' cursor-pointer flex justify-center items-center w-[65%] bg-custom-green text-sm text-white p-3 px-22 rounded-lg'>
                         Submit Message
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Calender