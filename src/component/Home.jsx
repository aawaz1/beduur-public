import React from 'react'
import BeduurProfile from './BeduurProfile'
import Comp from './Comp'


const Home = () => {
    return (
        <div className='p-2'>
            <div className='justify-around p-2'>
                <div>
                    <img src='/image 1 (1).png' style={{ width: "10rem", height: "4rem" }} />
                </div>
            </div>
            <div>
                <BeduurProfile color={"white"} title1={""} title2={""} title3={""} />
            </div>
            <div className='container m-auto items-center flex py-12'>
                <div className='flex justify-center'>
                    <div className='flex w-[90%] '>
                        <div className='w-[50%] max-w-[40rem]'>
                            <img src='Video.png' />
                        </div>
                        <div style={{ backgroundImage: "url(./beduurbg.png)" }} className='bg-custom-blue flex justify-end w-[50%] p-4 py-6 '>
                            <div >
                                <h2 className='font-poppins text-3xl text-white font-bold p-4'>Bedoor Almutairi</h2>
                                <h2 className='font-poppins text-sm text-white font-thin p-4'>A financial coach and project consultant. She obtained a Bachelor’s degree in Business Administration/Economics in 2012 from the Arab Open University. She has been working in the field of financial training and business consulting since 2016.
                                </h2>
                                <div className='flex p-1 gap-3'>
                                    <img src='div.elementor-icon-box-icon.png' style={{ height: "2rem" }} />
                                    <div>
                                        <h2 className='font-poppins text-md text-white font-semibold '>Focus on business efficiency
                                        </h2>
                                        <h2 className='font-poppins text-md text-white font-medium '>
                                            Porta semper magna elementum vel auctor tempus pulvinar dignissim
                                            rutrum egestas si</h2>
                                    </div>
                                </div>
                                <div className='flex p-1 gap-3'>
                                    <img src='/div.elementor-icon-box-icon (1).png' style={{ height: "2rem" }} />
                                    <div>
                                        <h2 className='font-poppins text-md text-white font-semibold '>Focus on plan target

                                        </h2>
                                        <h2 className='font-poppins text-md text-white font-medium '>
                                            Porta semper magna elementum vel auctor tempus pulvinar dignissim
                                            rutrum egestas si</h2>
                                    </div>
                                </div>
                            </div>

                        </div></div>

                </div></div>

            <div className='bg-gradient-to-b from-custom-blue to-black p-4 flex justify-center items-center flex-col'>

                <h1 className='text-md text-white font-poppins py-8 '>
                    OUR SERVICES
                </h1>
                <h1 className='text-3xl text-white font-bold font-poppins py-8 text-center'>

                    We are ahead of our competitors in new
                    <br />
                    Business consultation.


                </h1>
                <div className='flex gap-6'>
                    <Comp/>
                    <Comp/>
                    <Comp/>
                    
                    
                </div>
            </div>


        </div>
    )
}

export default Home