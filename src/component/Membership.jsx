import React from 'react'

const Membership = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url("/Section (1).png")` }} className='h-[10rem]'>
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

            <div className='flex flex-col justify-center items-center py-8'>
                <div className='py-2'>
                    <img src='/Group (1).png' className='h-[20rem]' />
                </div>
                <div>
                    <h1 className='text-black font-semibold text-[2.3rem]'>COMING SOON....</h1>
                </div>
            </div>
        </div>
    )
}

export default Membership
