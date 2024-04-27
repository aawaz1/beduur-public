import React from 'react'

const Mission = () => {
    return (
        <div className='p-2 h-[100%]'>
            <div className='w-[12rem]'>
                <h2 className='text-custom-blue text-md font-semibold '>MISSION AND VISION</h2>
                <div className="flex flex-col justify-center py-2 w-[100%] max-md:max-w-full">
                    <div className="w-[100%] border-t border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
                </div>
            </div>
            <div className=''>
                <h1 className=' text-[0.9rem]'>
                    Our Mission through this website is to spread financial awareness,
                    and our vision is a life of abundance, creativity and diversity that
                    everyone lives, and we were able, thanks to God, for Helping many
                    individuals in Kuwait and the Arab Gulf to manage their income and
                    organize their budget, as well as we have been successful partners
                    with many initiators through the financial and administrative services
                    that we provide.
                </h1>
            </div>

            <div className=' flex justify-center items-start flex-col p-4 gap-2'>
                <div className='flex gap-2'>
                    <div>
                        <img src='/div.elementor-icon-box-icon.png' />
                    </div>
                    <div>
                        <h1 className='text-custom-blue text-md font-poppins'>Focus on business efficiency</h1>
                        <h2 className='p-1 text-[0.8rem]'>Porta semper magna elementum vel auctor tempus pulvinar dignissim
                            rutrum egestas si</h2>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <img src='/div.elementor-icon-box-icon.png' />
                    </div>
                    <div>
                        <h1 className='text-custom-blue text-md font-poppins'>Focus on business efficiency</h1>
                        <h2 className='p-1 text-[0.8rem]'>Porta semper magna elementum vel auctor tempus pulvinar dignissim
                            rutrum egestas si</h2>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Mission