import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const Faq = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-5 p-3 '>
        <h1 className='text-black text-[1.8rem] font-bold'>Frequently Asked Questions</h1>
       
      <Accordion className='shadow-md'>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className='font-bold text-[#1B153B] text-md '>How To Contact With Customer Services</h1>
        </AccordionSummary>
        <AccordionDetails>
        <div className='text-gray-800 font-semibold'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</div>
        </AccordionDetails>
      </Accordion>
      <Accordion className='shadow-md'>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className='font-bold text-[#1B153B] text-md'>How To Delete My Account</h1>
        </AccordionSummary>
        <AccordionDetails>
         
           <div className='text-gray-800 font-semibold'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</div>
          
        </AccordionDetails>
      </Accordion>
      <Accordion className='shadow-md'>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className='font-bold text-[#1B153B] text-md'>Where Is The Edit Option On Dashboard Customer Services</h1>
        </AccordionSummary>
        <AccordionDetails>
        <div className='text-gray-800 font-semibold'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</div>
        </AccordionDetails>
      </Accordion>
      <Accordion className='shadow-md'>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className='font-bold text-[#1B153B] text-md'>Is There Any Customer Pricing System?</h1>
        </AccordionSummary>
        <AccordionDetails>
        <div className='text-gray-800 font-semibold'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</div>
        </AccordionDetails>
      </Accordion>
    
    </div>
  )
}

export default Faq


