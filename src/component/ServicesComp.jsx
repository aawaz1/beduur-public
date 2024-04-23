import React from 'react'
import Comp from './Comp'

const ServicesComp = () => {
  return (
    <div className='bg-gradient-to-b from-custom-blue to-black p-4 flex justify-center items-center flex-col'>

    <h1 className='text-md text-white font-poppins py-8 '>
        OUR SERVICES
    </h1>
    <h1 className='text-3xl text-white font-bold font-poppins py-8 text-center'>

        We are ahead of our competitors in new
        <br />
        Business consultation.


    </h1>
    <div className='flex gap-6 p-10'>
        <Comp bgColor='#E1EDE7' />
        <Comp bgColor='#FFFFFF'/>
        <Comp bgColor='#FFFDEB'/>


    </div>

</div>
  )
}

export default ServicesComp