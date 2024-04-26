import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
   
    boxShadow: 24,
    p: 4,
  };

const Admin5 = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
        <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="flex flex-col gap-4 rounded-md" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Question
          </Typography>
          <TextField id="outlined-basic" label="Question" variant="outlined" />
          <TextField rows={8} multiline id="outlined-basic" label="Answer" variant="outlined" />
          <button  className='rounded-md p-3  text-white font-medium bg-custom-blue'>ADD FAQ</button>
        </Box>
      </Modal>
    </div>
    <div>
         <div className='p-4 px-6 flex flex-col gap-8 rounded-md shadow-md'>
        <div className='flex items-center justify-between'>
        <div className='text-md font-semibold font-poppins px-4'>FAQs</div>
        <button onClick={handleOpen}  className='bg-custom-blue p-2 px-4 rounded-full text-white'>Add New Question</button>
        </div>
        <div className='flex justify-center items-center flex-col gap-5 '>
       
       
      <Accordion className='shadow-md w-[90%]'>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className='font-bold text-md '>How To Contact With Customer Services</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='shadow-md w-[90%]'>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className='font-bold text-md '>How To Delete My Account</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='shadow-md w-[90%]'>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className='font-bold text-md '>Where Is The Edit Option On Dashboard Customer Services</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='shadow-md w-[90%]'>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className='font-bold text-md '>Is There Any Customer Pricing System?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
      
       </div>
    </div>
    </>
  )
}

export default Admin5