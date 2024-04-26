import { TextField } from '@mui/material'
import React from 'react'

const Admin7 = () => {
  return (
  <div className='p-4 flex flex-col gap-5 px-8'>
   <div className='text-md font-semibold font-poppins px-4'>Mail To</div>
    <div className='flex w-[100%] shadow-md rounded-md'>
        <div className='w-[80%] px-4 py-4'>
           <div className='flex flex-col text-center justify-start items-start px-10 gap-14'>
           <TextField className=" border border-gray-300 rounded-md p-2 w-[50%]" id="outlined-basic" label="To" variant="outlined" />
           <TextField className=" border border-gray-300 rounded-md p-2 w-[50%]" id="outlined-basic" label="From" variant="outlined" />
           <TextField className=" border border-gray-300 rounded-xl p-2 w-[50%]" id="outlined-basic" label="From" variant="outlined"  multiline rows={8} />
           <div className='flex justify-center items-center'><button>SEND MAIL</button></div>
       
           </div>

        </div>
        <div className='w-[20%]'>
            <img src='/Group 3.png'/>
        </div>
    </div>
  </div>
  )
}

export default Admin7