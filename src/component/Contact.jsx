import React from 'react'
import BeduurProfile from './BeduurProfile'
import { TextField } from '@mui/material'

const Contact = () => {
    return (
        <div className='flex flex-col gap-12'>
        <div>
        <BeduurProfile color={"custom-blue"} title1={"FINANCE CONSULTATION AND FINANCE COACH"} title2={"BEDUUR ALMUTAIRI"} title3={"Lets Grow Your Business Together"} />
    </div>
        <div className=' w-[100%] md:w-[60%] m-auto flex flex-col md:flex-row shadow-md p-2'>
            <div className='w-[100%] md:w-[33%] gap-3 p-2 flex flex-col justify-center items-center'>
                <div className='flex '> <img src='/Vector (1).png' /></div>
                <h1 className='text-black font-medium text-md'>(+654 7654 7543)</h1>
                <h2 className='text-sm text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Ut elit tellus, luctus nec <br />
                    ullamcorper mattis, pulvinar dapibus leo.
                </h2>
                <div className='flex gap-2'>
                    <img className='w-[1.5rem]' src='/.png' />
                    <h2 className='text-custom-blue font-medium'>LEARN MORE</h2>
                </div>
            </div>
            <div className='w-[100%] md:w-[33%] gap-3 p-2 flex flex-col justify-center items-center'>
                <div className='flex '> <img src='Icon (1).png' /></div>
                <h1 className='text-black font-medium text-md'>mail@ABC.com</h1>
                <h2 className='text-sm text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Ut elit tellus, luctus nec <br />
                    ullamcorper mattis, pulvinar dapibus leo.
                </h2>
                <div className='flex gap-2'>
                    <img className='w-[1.5rem]' src='/.png' />
                    <h2 className='text-custom-blue font-medium'>LEARN MORE</h2>
                </div>
            </div>
            <div className='w-[100%] md:w-[33%] gap-3 p-2 flex flex-col justify-center items-center'>
                <div className='flex '> <img src='/Icon (2).png' /></div>
                <h1 className='text-black font-medium text-md'>London Eye, London</h1>
                <h2 className='text-sm text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Ut elit tellus, luctus nec <br />
                    ullamcorper mattis, pulvinar dapibus leo.
                </h2>
                <div className='flex gap-2'>
                    <img className='w-[1.5rem]' src='/.png' />
                    <h2 className='text-custom-blue font-medium'>LEARN MORE</h2>
                </div>
            </div>

        </div>
        <div className='relative'>
            <img src='/Map.png'  className='w-[100%] h-[40rem]'/>
            <div className='absolute bottom-0 right-5  md:bottom-2 md:right-40 gap-4 rounded-md flex flex-col justify-start items-center bg-white p-2 px-12'>
                <h1 className='text-custom-green text-sm font-poppins w-[100%]'>Get In Touch</h1>
                <h2 className='text-[1.2rem]  font-bold w-[100%]'>Need More Help  <br/> Send Us Message?</h2>
                <TextField id="Name" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Email Address" variant="outlined" />
                <TextField id="outlined-basic"  label="message" multiline rows={5} fullWidth variant="outlined" />
                <button className='text-white bg-custom-blue p-2 w-[100%] rounded-md'>Send Us Message</button>


            </div>
        </div>
        </div>
    )
}

export default Contact