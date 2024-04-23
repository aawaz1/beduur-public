import React from 'react'

const BeduurProfile = ({ title1, title, title2, color, title3 }) => {
    return (
        <div className='flex flex-col md:flex-row justify-between'>

            <div class={`bg-gradient-to-r from-${color} to-white md:w-[100%] flex  justify-center items-center `}>
                <div className='flex p-2 flex-col  gap-4'>
                    {title1 ? <h1 className='text-white  text-md md:text-2xl'>{title1}</h1> : null}
                    {title2 ? <h1 className='text-white font-semibold text-xl md:text-6xl'>{title2}</h1> : null}
                    {title3 ? <h1 className='text-white font-light text-sm font-poppins'>{title3}</h1> : null}
                </div>

            </div>
            <div><img src='/Group 9.png' style={{ width: "50rem", height: "30rem" }} /></div>
        </div>
    )
}

export default BeduurProfile


{/* <h1 className='text-white text-2xl'>FINACE CONSULATATION AND FINANCE COACH</h1>
<h1 className='text-white font-semibold text-6xl'>Bedoor Almutairi</h1>
<h1 className='text-white font-light text-sm font-poppins'>Lets Grow Your Business Together</h1> */}