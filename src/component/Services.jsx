import React from 'react'
import BeduurProfile from './BeduurProfile'
import ServicesComp from './ServicesComp'
import Faq from './Faq'
import Footer from './Footer'
import Comp from './Comp'

const Services = () => {
    return (
        <div className='p-1 md:p-0 md:pb-4 flex flex-col gap-8 '>

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
<Comp navigation={"/membershipservice"} title1={"MemberShip"} title2={"Business Membership"} heading={"Membership services offer you programs and materials that prepare you to start a new, different phase of your life"} bgColor='#E1EDE7' />
                    <Comp navigation={"/calender"} title1={"Book"} title2={"Consultation"} heading={"We cater to the needs of diverse industries across verticals. We are a team of devoted souls."} bgColor='#FFFFFF'/>
                    <Comp navigation={"/ebook"} title1={"Free/Paid"} title2={"E-Books"} bgColor='#FFFDEB' heading={"We are a team of devoted souls in the area of mainframe technologies. We also develop new software."}/>


</div>

</div>
            <Faq />


        </div>
    )
}

export default Services