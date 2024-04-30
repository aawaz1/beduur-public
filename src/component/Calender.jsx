import React, { useState } from 'react'
import MembershipHeader from './MembershipHeader'
import IconProp from './Props/IconProp';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { createTheme, styled } from '@mui/material/styles';
import './calender.css'

const Calender = () => {

    const buttons = [{"id" :1 , time : "12:30PM"},{"id" :2 , time : "2:30PM"},{"id" :3 , time : "4:30PM"}, {"id" :4 , time : "6:30PM"},]
    const [business, setBusiness] = useState(1);
    const [button ,setButton] = useState(false);
    const [button1 , setButton1] = useState(false);
    const [button2 , setButton2] = useState(false)
    const [button3 , setButton3] = useState(false)
    // const handleButton = () => {
    //     setButton(!button)
    // }
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
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);

    const handleButton = (index) => {
      setActiveButtonIndex(index === activeButtonIndex ? null : index);
    };

    // Create a styled calendar component
    const StyledCalendar = styled(DateCalendar)({

        width: "80%",
        height: "100%",
        // backgroundColor: '#f0f0f0',
        // border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
    });

    return (
        <div className='flex flex-col gap-4 py-[2rem]'>
            <div>
                <MembershipHeader business={business} setBusiness={setBusiness} title={"Book Consultation Service"} title1={"Home Business Session"} title2={"Small & Middle Business"} title3={"Business Development Contract"} />
            </div>
            <div>
                <IconProp title={business === 1 ? ("Home Business Session") : business === 2 ? ("Small & Middle Business") : ("Business Development Contract")} title1={"12 Illustrated Subjects: Monthly topics covering various financial aspects such as money energy, financial readiness, global market investing, establishing projects."}
                    title2={"6 Zoom Meetings: Subscribers have the opportunity to attend direct meetings with the program organizers to address important financial issues and have their questions answered."}
                    title3={"6 Consultations via Email: Each subscriber can seek personalized advice related to their financial situation, income management, or investment path through email consultations."} />
            </div>
            <div className='lg:w-[80%] lg:mx-auto flex flex-col gap-4'>
                <div className="flex flex-col justify-center py-4 w-[100%] max-md:max-w-full">
                    <div className="w-[100%] border-t-[6px] border-custom-green border-solid min-h-[1px] max-md:max-w-full" />
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-custom-blue  font-semibold'>{business === 1 ? ("Home Business Session") : business === 2 ? ("Small & Middle Business") : ("Business Development Contract")}</h1>
                <div className="w-[40%] border-t border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />

                </div>

                <div className='flex gap-5 flex-col lg:flex-row '>
                    <div className='w-[100%] lg:w-[50%] border rounded-md p-2 px-6 shadow-md border-gray-300'>
                        <h1 className='text-black font-semibold'>SELECT DATE AND TIME</h1>
                        <Container className='custom-calender'>
                            <LocalizationProvider styled={{ border: "none" }} dateAdapter={AdapterDayjs}>
                                <DateCalendar
                                    sx={{
                                        '& .MuiButton-root': {
                                            // backgroundColor: 'red', // Change button background color
                                            // color: '#fff', // Change button text color
                                        },
                                    }}
                                />
                            </LocalizationProvider>
                        </Container>
                        <div className=' border border-gray-300 flex gap-4 p-3 text-center justify-start items-center w-[100%]'>
                            <h1>Time</h1>
                            <div className='flex gap-2'>
      {[0, 1, 2, 3].map((index) => (
        <button
          key={index}
          onClick={() => handleButton(index)}
          className={`py-1 border rounded-md border-gray-300 px-1 ${
            activeButtonIndex === index ? 'bg-custom-gray' : 'bg-transparent'
          } text-sm xl:text-[1rem]`}
        >
          <span
            className={`rounded-full px-0.5 ${
              activeButtonIndex === index ? 'bg-green-400' : 'bg-transparent'
            } text-transparent`}
          >
            22
          </span>
          12:30 PM
        </button>
      ))}
    </div>
                            
                           


                        </div>

                    </div>

                    <div className='w-[100%] lg:w-[50%] flex flex-col gap-4 p-4'>

                        <div className='px-6 flex justify-start items-center'>
                            <div className='bg-gray-200 rounded-md p-2 px-8 '>
                                <h1 className=' text-md lg:text-[1.2rem] text-custom-black font-semibold'>Session Cost :- 150.000 KD</h1>

                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-4 lg:gap-12'>
                            <div className='flex flex-col gap-2 w-[50%]'>
                                <label className='text-md font-md' for="username">Name</label>
                                <input className=" border border-gray-300 rounded-md p-2 w-[100%]" placeholder="Name" type="text" />

                            </div>

                            <div className='flex flex-col gap-2 w-[50%]'>
                                <label className='text-md font-md' for="username">Email</label>
                                <input className="border border-gray-300 rounded-md p-2 w-[100%]" placeholder="Email" type="text" />

                            </div>



                        </div>
                        <div className='flex flex-col lg:flex-row gap-4 lg:gap-12'>
                            <div className='flex flex-col gap-2 w-[50%]'>
                                <label className='text-md font-md' for="username">Phone</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Phone" type="text" />

                            </div>
                            <div className='flex flex-col gap-2 w-[50%]'>
                                <label className='text-md font-md' for="username">Session Type</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Session Type" type="text" />

                            </div>


                        </div>
                        <div className='flex flex-col lg:flex-row gap-4 lg:gap-12'>
                            <div className='flex flex-col gap-2 w-[50%]'>
                                <label className='text-md font-md' for="username">Session Date</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Session Date" type="text" />

                            </div>
                            <div className='flex flex-col gap-2 w-[50%]'>
                                <label className='text-md font-md' for="username">Session Time</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Session Time" type="text" />

                            </div>


                        </div>
                        <div className='flex gap-4 lg:gap-12'>
                            <div className='flex flex-col gap-2 lg:w-[100%]'>
                                <label className='text-md font-md' for="username">Payment Type</label>
                                <input className="border border-gray-300  rounded-md p-2 w-[100%]" placeholder="Payment Type" type="text" />

                            </div>



                        </div>
                        <div>
                            <h1 className='text-[0.8rem] font-poppins lg:w-[100%] '>
                                Choose the session time according to chosen date or  else your appointment will be get cancelled.
                            </h1>
                        </div>
                        <div className=' cursor-pointer flex justify-center items-center  lg:w-[100%]  bg-custom-green  hover:bg-custom-blue text-sm text-white p-3 px-22 rounded-lg'>
                            Submit Message
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calender