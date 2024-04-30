import React from 'react'
import Mission from './Mission'

const BeduurImage = () => {
    return (
        <div style={{ backgroundImage: `url("/Group 10.png")` }}  className='flex flex-col xl:flex-row justify-between xl:h-[30rem]'>

            <div class={`bg- flex flex-col xl:flex-row justify-center items-center `}>
                <div className='flex p-1 flex-col xl:h-[100%]  gap-4 bg-white xl:w-[30%]'>
                    <Mission />

                </div>

            </div>
            <div className='flex justify-end'><img src='/beduur1.jpg' style={{ width: "64rem" }} /></div>
        </div>
    )
}

export default BeduurImage