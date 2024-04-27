import React from 'react'

const IconProp = ({title , title1 , title2 , title3}) => {
    
  return (
    <div className='lg:w-[80%] lg:m-[auto] rounded-md border border-gray-200'>
                <div className='w-80% m-[auto] p-2 py-8 flex flex-col gap-4'>
                    <div>
                        <h1 className='text-black text-[1.2rem] font-poppins font-bold pl-6'>{title}</h1>
                    </div>
                    <div className='flex pl-6 gap-2'>
                        <div>
                        <img src='/Icon.png' className='w-[3rem] md:w-[1rem]' />
                        </div>
                        <div>
                            <h1 className='text-sm'>
                               {title1}
                            </h1>
                        </div>
                    </div>
                    <div className='flex pl-6 gap-2'>
                        <div>
                        <img src='/Icon.png' className='w-[3rem] md:w-[1rem]' />
                        </div>
                        <div>
                            <h1 className='text-sm'>
                                {title2}
                                </h1>
                        </div>
                    </div>
                    <div className='flex pl-6 gap-2'>
                        <div>
                        <img src='/Icon.png' className='w-[3rem] md:w-[1rem]' />
                        </div>
                        <div>
                            <h1 className='text-sm'>
                              {title3}
                                </h1>
                        </div>
                    </div>

                </div>

            </div>
  )
}

export default IconProp