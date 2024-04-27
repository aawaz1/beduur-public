import { TextField } from '@mui/material'
import React from 'react'

const Admin7 = () => {
  return (
  <div className='p-4 flex flex-col gap-5 px-8'>
   <div className='text-[1.2rem] font-semibold font-poppins px-4'>Mail To</div>
    <div className='flex w-[100%] justify-center items-center shadow-md rounded-md gap-6'>
        <div className='w-[60%] px-4 py-4'>
           <div className='flex flex-col text-center justify-start items-start px-10 gap-14'>
           <TextField className=" border border-gray-300 rounded-md p-2 w-[100%]" id="outlined-basic" label="To" variant="outlined" />
           <TextField className=" border border-gray-300 rounded-md p-2 w-[100%]" id="outlined-basic" label="From" variant="outlined" />
           <TextField className=" border border-gray-300 rounded-xl p-2 w-[100%]" id="outlined-basic" label="Message" variant="outlined"  multiline rows={8} />
           <div className='flex justify-center w-[100%] items-center text-center'><button className='bg-custom-blue rounded-md text-white px-24 py-3'>SEND MAIL</button></div>
       
           </div>

        </div>
        <div className='w-[40%]'>
            <img src='/Group 3.png'/>
        </div>
    </div>
  </div>
  )
}

export default Admin7