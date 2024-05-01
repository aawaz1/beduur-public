import React from 'react'

const BeginMembership = () => {
  return (
    <div className='w-[100%] xl:w-[80%] xl:m-[auto] flex gap-1 flex-col xl:flex-row '>
    <div className='w-[100%] lg:w-[100%] xl:w-[100%]'>
        <img src='/Container.png' className='h-[32rem]' />

    </div>
    <div style={{ backgroundImage: `url("/Side Deatils.png")`, height:"32rem" }} className='p-2 flex flex-col gap-4 py-8 w-[100%] xl:w-[30%]' >
        <h1 className='text-white text-[1.8rem]  font-semibold px-4 '>Begin Membership</h1>
        <h2 className='px-4 text-sm lg:text-md xl:text-[1rem] text-white'>This membership is the first integrated annual membership to teach money management and investment basics through an integrated program of three chapters. Each chapter contains enough information to start your path to the financial freedom you want. This program was designed by Ms. Bodour Al-Mutairi, a certified trainer and project consultant since 2016. She holds a Bachelor's degree in Business Administration/Economics from the Arab Open University in a deep and simplified manner, with which it is easy to understand and apply the information to obtain the best results, God willing.
        </h2>
    </div>
</div>
  )
}

export default BeginMembership