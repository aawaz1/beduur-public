import React from 'react'
import Mission from './Mission'

const BeduurImage = () => {
    return (
        <div style={{ backgroundImage: `url("/Group 10.png")` }}  className='flex flex-col md:flex-row justify-between md:h-[30rem]'>

            <div class={`bg- flex flex-col md:flex-row justify-center items-center `}>
                <div className='flex p-1 flex-col md:h-[100%]  gap-4 bg-white md:w-[30%]'>
                    <Mission />

                </div>

            </div>
            <div className='flex justify-end'><img src='/image 5.png' style={{ width: "30rem", height: "30rem" }} /></div>
        </div>
    )
}

export default BeduurImage