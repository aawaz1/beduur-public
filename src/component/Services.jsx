import React from 'react'
import BeduurProfile from './BeduurProfile'
import ServicesComp from './ServicesComp'
import Faq from './Faq'
import Footer from './Footer'

const Services = () => {
    return (
        <div className='p-1 md:p-2 flex flex-col gap-8 '>

            <div>
                <BeduurProfile color={"custom-blue"} title1={"FINANCE CONSULTATION AND FINANCE COACH"} title2={"BEDUUR ALMUTAIRI"} title3={"Lets Grow Your Business Together"} />
            </div>



            <ServicesComp />
            <Faq />


        </div>
    )
}

export default Services