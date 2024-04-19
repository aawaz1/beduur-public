import React from 'react'
import BeduurProfile from './BeduurProfile'

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
            <div className='justify-between flex py-12'>
                <div className='w-[100%]'>
                    <img src='Video.png' style={{ width: "20rem", height: "15rem" }} />
                </div>
                <div style={{ backgroundImage: "url(./beduurbg.png)" }} className='bg-custom-blue flex justify-end w-[50%] p-2'>
                    <div >
                        <h2 className='font-poppins text-xl text-white font-bold'>Bedoor Almutairi</h2>
                        <h2 className='font-poppins text-sm text-white font-thin'>A financial coach and project consultant. She obtained a Bachelor’s degree in Business Administration/Economics in 2012 from the Arab Open University. She has been working in the field of financial training and business consulting since 2016.
                        </h2>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home