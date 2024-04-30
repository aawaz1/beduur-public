import React, { useState } from 'react'
import MembershipHeader from './MembershipHeader'
import IconProp from './Props/IconProp';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { createTheme, styled } from '@mui/material/styles';
import './calender.css'
import BeginMembership from './BeginMembership';
import { useNavigate } from 'react-router-dom';

const JoinMembership = () => {
    const [business, setBusiness] = useState(1);
    const [button, setButton] = useState(false);
    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(false)
    const [button3, setButton3] = useState(false)
    const handleButton = () => {
        setButton(!button)
    }
    const handleButton1 = () => {
        setButton1(!button1)
    }
    const handleButton2 = () => {
        setButton2(!button2)
    }
    const handleButton3 = () => {
        setButton3(!button3)
    }
    const Container = styled('div')({
        margin: '0 auto',
        padding: '20px',
    });
    const theme = createTheme({
        palette: {
            primary: {
                main: '#f44336', // Custom primary color (e.g., red)
            },
        },
    });

    // Create a styled calendar component
    const StyledCalendar = styled(DateCalendar)({

        width: "80%",
        height: "100%",
        // backgroundColor: '#f0f0f0',
        // border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
    });

    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-14 py-[2rem]'>
            <BeginMembership />

            <div className='lg:w-[60%] lg:mx-auto flex flex-col gap-4'>

                <div className="flex flex-col justify-center py-4 w-[100%] max-md:max-w-full">

                    <div className="w-[100%] border-t-[6px] border-custom-green border-solid min-h-[1px] max-md:max-w-full" />
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-custom-blue text-[0.9rem]  font-semibold'>
                        BEGIN MEMBERSHIP
                    </h1>
                    <div className="w-[40%] border-t border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />

                </div>

                <div className='flex gap-5 flex-col lg:flex-row '>
                    {/* <div className='w-[100%]   p-2 px-6  border-gray-300'>



                    </div> */}

                    <div className='w-[100%]  flex flex-col gap-4 p-4 lg:p-0'>

                        <div className='px-6  lg:px-0 flex justify-center items-center lg:items-center'>
                            <div className='bg-gray-200 rounded-md p-2 px-8 '>
                                <h1 className=' text-md lg:text-[1.2rem] text-custom-black font-semibold'>Session Cost :- 150.000 KD</h1>

                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-4 lg:gap-12'>
                            <div className='flex flex-col gap-2 md:w-[50%]'>
                                <label className='text-md font-md' for="username">Name</label>
                                <input className=" border border-gray-300 rounded-md p-2 w-[100%]" placeholder="Name" type="text" />

                            </div>

                            <div className='flex flex-col gap-2 md:w-[50%]'>
                                <label className='text-md font-md' for="username">Email</label>
                                <input className="border border-gray-300 rounded-md p-2 w-[100%]" placeholder="Email" type="text" />

                            </div>



                        </div>
                        <div className='flex flex-col lg:flex-row gap-4 lg:gap-12'>
                            <div className='flex flex-col gap-2 md:w-[50%]'>
                                <label className='text-md font-md' for="username">Phone</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Phone" type="text" />

                            </div>
                            <div className='flex flex-col gap-2 md:w-[50%]'>
                                <label className='text-md font-md' for="username">Password</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Session Type" type="text" />

                            </div>


                        </div>
                        <div className='flex flex-col lg:flex-row gap-4 lg:gap-12'>
                            <div className='flex flex-col gap-2 md:w-[50%]'>
                                <label className='text-md font-md' for="username">Confirm Password</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Session Date" type="text" />

                            </div>
                            <div className='flex flex-col gap-2 md:w-[50%]'>
                                <label className='text-md font-md' for="username">Select Payment Method</label>
                                <select className='border border-gray-300  rounded-md p-2 w-[100%]' id="country" name="country" >
                        <option value="select">Select A Method</option>
                        <option value="kuwait">Kuwait</option>
                        <option value="uae">UAE</option>
                       

                    </select>

                            </div>


                        </div>
                       
                        <div>
                            <h1 className='text-[1rem] font-poppins lg:w-[100%] '>
                                Choose the session time according to chosen date or  else your appointment will be get cancelled.
                            </h1>
                        </div>
                       <div className='flex  md:justify-center md:items-center md:text-center'>
                       <div onClick={() => navigate("/membershipservice1")} className=' cursor-pointer flex justify-center items-center w-[100%] lg:w-[50%]  bg-custom-green  hover:bg-custom-blue text-sm text-white p-3 px-22 rounded-lg'>
                            Submit Message
                        </div>
                       </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinMembership