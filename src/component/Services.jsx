import React from 'react'
import BeduurProfile from './BeduurProfile'
import ServicesComp from './ServicesComp'
import Faq from './Faq'
import Footer from './Footer'
import Comp from './Comp'

const Services = () => {
    return (
        <div className='p-1 md:p-2 flex flex-col gap-8 '>

            <div>
                <BeduurProfile color={"custom-blue"} title1={"FINANCE CONSULTATION AND FINANCE COACH"} title2={"BEDUUR ALMUTAIRI"} title3={"Lets Grow Your Business Together"} />
            </div>
      



            <ServicesComp />
            <div className='bg-gradient-to-b from-custom-blue to-black p-4 flex justify-center items-center flex-col'>

<h1 className='text-md text-white font-poppins py-8 '>
    OUR SERVICES
</h1>
<h1 className=' text-xl md:text-3xl text-white font-bold font-poppins py-8 text-center'>

    We are ahead of our competitors in new
    <br />
    Business consultation.


</h1>
<div className='flex flex-col lg:flex-row gap-9 md:gap-6 p-10'>
    <Comp bgColor='#E1EDE7' />
    <Comp bgColor='#FFFFFF'/>
    <Comp bgColor='#FFFDEB'/>


</div>

</div>
            <Faq />


        </div>
    )
}

export default Services