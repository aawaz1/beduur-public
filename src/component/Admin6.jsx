import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import IconProp from './Props/IconProp';
import ModeIcon from '@mui/icons-material/Mode';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

const Admin6 = () => {
    return (


        <div className='flex w-[100%] px-4 py-1'>
            <div className='bg-custom-skyblue w-[15%] gap-4 flex flex-col'>
                <div className='p-3 flex gap-8 justify-center items-center'>
                    <img width={"100rem"} src='/image 1 (2).png' />
                    <MenuIcon />
                </div>
                <div className='flex flex-col gap-4  px-6 justify-start items-start text-center'>
                    <div className='flex gap-4 w-[100%] justify-between items-center text-center'>
                        <div className='flex gap-3'>
                            <CloudDoneOutlinedIcon style={{ fontSize: "1rem" }} />
                            <h1 className='text-sm font-poppins'>DashBoard</h1>
                        </div>
                        <img style={{ paddingLeft: "0.5rem" }} src='/span.badge.png' />
                    </div>
                    <div className='flex gap-4 w-[100%] justify-between items-center text-center'>
                        <div className='flex gap-3'>
                            <CloudDoneOutlinedIcon style={{ fontSize: "1rem" }} />
                            <h1 className='text-sm font-poppins'>Users</h1>
                        </div>
                        <img style={{ paddingLeft: "0.5rem" }} src='/span.badge.png' />
                    </div>


                </div>
                <div className='flex flex-col gap-3 p-6'>
                    <h1 className="text-[0.8rem] text-gray-600 font-poppins">SERVICES</h1>
                    <div className='flex gap-4 w-[100%] justify-between items-center text-center'>
                        <div className='flex gap-3'>
                            <EventAvailableIcon style={{ fontSize: "1rem" }} />
                            <h1 className='text-sm font-poppins'>Services</h1>
                        </div>

                    </div>
                    <div className='flex gap-4 w-[100%] justify-between items-center text-center'>
                        <div className='flex gap-3'>
                            <CorporateFareIcon style={{ fontSize: "1rem" }} />
                            <h1 className='text-sm font-poppins'>Bookings</h1>
                        </div>
                        <ArrowDropDownOutlinedIcon style={{ fontSize: "1rem" }} />
                    </div>
                </div>
                <div className='flex flex-col gap-3 p-6'>
                    <h1 className="text-[0.8rem] text-gray-600 font-poppins">E-BOOKS</h1>
                    <div className='flex gap-4 w-[100%] justify-between items-center text-center'>
                        <div className='flex gap-3'>
                            <AccountCircleOutlinedIcon style={{ fontSize: "1rem" }} />
                            <h1 className='text-sm font-poppins'>Free Book Users </h1>
                        </div>
                        <ArrowDropDownOutlinedIcon style={{ fontSize: "1rem" }} />

                    </div>
                    <div className='flex gap-4 w-[100%] justify-between items-center text-center'>
                        <div className='flex gap-3'>
                            <EventNoteIcon style={{ fontSize: "1rem" }} />
                            <h1 className='text-sm font-poppins'>Paid Book Users </h1>
                        </div>
                        <ArrowDropDownOutlinedIcon style={{ fontSize: "1rem" }} />
                    </div>

                </div>
                <div className='flex flex-col gap-3 p-6'>
                    <h1 className="text-[0.8rem] text-gray-600 font-poppins">MEMBERSHIPS</h1>
                    <div className='flex gap-4 w-[100%] justify-between items-center text-center'>
                        <div className='flex gap-3'>
                            <FormatBoldIcon style={{ fontSize: "1rem" }} />
                            <h1 className='text-sm font-poppins'>Membership Users </h1>
                        </div>
                        <ArrowDropDownOutlinedIcon style={{ fontSize: "1rem" }} />

                    </div>


                </div>
                <div className='flex flex-col gap-3 p-6'>
                    <h1 className="text-[0.8rem] text-gray-600 font-poppins">MAIL TO</h1>
                    <div className='flex gap-4 w-[100%] justify-between items-center text-center'>
                        <div className='flex gap-3'>
                            <FormatBoldIcon style={{ fontSize: "1rem" }} />
                            <h1 className='text-sm font-poppins'>Membership Users </h1>
                        </div>


                    </div>
                    <div className='flex gap-4 w-[100%] justify-between items-center text-center'>
                        <div className='flex gap-3'>
                            <FormatBoldIcon style={{ fontSize: "1rem" }} />
                            <h1 className='text-sm font-poppins'>Subscribe Users </h1>
                        </div>


                    </div>


                </div>
                <div className='flex flex-col gap-3 p-6'>
                    <h1 className="text-[0.8rem] text-gray-600 font-poppins">Others</h1>
                    <div className='flex gap-4 w-[100%] justify-between items-center text-center'>
                        <div className='flex gap-3'>
                            <FormatBoldIcon style={{ fontSize: "1rem" }} />
                            <h1 className='text-sm font-poppins'>Testimonals </h1>
                        </div>


                    </div>
                    <div className='flex gap-4 w-[100%] justify-between items-center text-center'>
                        <div className='flex gap-3'>
                            <FormatBoldIcon style={{ fontSize: "1rem" }} />
                            <h1 className='text-sm font-poppins'>FAQS </h1>
                        </div>


                    </div>


                </div>
            </div>
            <div className='w-[85%]'>
                <div className='flex justify-between px-2 shadow-lg'>
                    <input placeholder='Search' />
                    <div className='flex justify-center items-center'>
                        <img src='/div.dropdown.png' />
                        <img src='/Button.png' />
                        <DarkModeOutlinedIcon />
                        <img src='/div.dropdown (1).png' />

                    </div>
                </div>
                <div className='px-8 py-6 flex justify-between'>
                    <h1 className='text-md font-semibold font-poppins'>Begin Membership Details</h1>
                    <button className='px-3 py-2 text-white text-sm text-center rounded-full font-poppins  bg-custom-blue'><ModeIcon fontSize='1rem' /> Edit</button>

                </div>
                <div className='flex flex-col gap-7'>
                <div className='w-[80%] m-[auto] flex '>
                    <div className='w-[70%]'>
                        <img src='/Video (1).png' />

                    </div>
                    <div style={{ backgroundImage: `url("/Side Deatils.png")` }} className='p-2 py-8 w-[30%]' >
                        <h1 className='text-white text-[1.8rem]  font-semibold px-4 py-8'>Begin Membership</h1>
                        <h2 className='px-4 text-sm md:text-[1rem] text-white'>This membership is the first integrated annual membership to teach money management and investment basics through an integrated program of three chapters. Each chapter contains enough information to start your path to the financial freedom you want. This program was designed by Ms. Bodour Al-Mutairi, a certified trainer and project consultant since 2016. She holds a Bachelor's degree in Business Administration/Economics from the Arab Open University in a deep and simplified manner, with which it is easy to understand and apply the information to obtain the best results, God willing.
                        </h2>
                    </div>
                </div>
                <div className='w-[80%] m-[auto] rounded-md border border-gray-200'>
                    <div className='w-80% m-[auto] p-2 py-8 flex flex-col gap-8'>
                        <div>
                            <h1 className='text-black text-[1.2rem] font-poppins font-bold pl-6'>Membership Includes the Following Classes :</h1>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-black text-[1rem] font-poppins font-bold pl-6'>Chapter One : Income Management</h1>
                            <h1 className='text-gray-400 pl-6'>In this chapter, members will learn about the money matrix, their financial behavior's consequences, and how to manage their income effectively. It covers the retirement equation and various saving and investment methods to prepare for a financially secure future.</h1>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-black text-[1rem] font-poppins font-bold pl-6'>Chapter Two : Separating Money in the Family</h1>
                            <h1 className='text-gray-400 pl-6'>This chapter delves deeper into the role of money within families. It helps participants identify their financial patterns and correct any misbehavior. The chapter also addresses financial patterns of current and future partners, culminating in a practical financial management plan to maintain stability.</h1>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-black text-[1rem] font-poppins font-bold pl-6'>Chapter Three :  The Theory of Patterns of Wealth</h1>
                            <h1 className='text-gray-400 text-[1rem] pl-6'>Members will explore new perspectives on wealth through this chapter, uncovering unique ways that suit their personalities to attain financial prosperity.</h1>
                        </div>
                    </div>

                </div>
                <div><IconProp title={"Additional Membership Benefits"} title1={"12 Illustrated Subjects: Monthly topics covering various financial aspects such as money energy, financial readiness, global market investing, establishing projects."} title2={"  6 Zoom Meetings: Subscribers have the opportunity to attend direct meetings with the program organizers to address important financial issues and have their questions answered."} title3={"  6 Consultations via Email: Each subscriber can seek personalized advice related to their financial situation, income management, or investment path through email consultations."} /></div>
                <div className='w-[80%] m-[auto] rounded-md border border-gray-200'>
                    <div className='w-80% m-[auto] p-2 py-8 flex flex-col gap-4'>
                        <div>
                            <h1 className='text-black text-[1.2rem] font-poppins font-bold pl-6'>Membership Eligibility</h1>
                        </div>
                        <div className='flex flex-col gap-5'>

                            <h1 className='text-black text-sm px-6'>This program is ideal for individuals who seek financial freedom, a secure retirement, and the ability to manage their income efficiently. It also caters to those interested in providing their children with a strong financial education, learning investment basics, and diversifying income sources. The membership welcomes anyone keen on embarking on a money management journey under the expert guidance of a specialist in the field.</h1>
                        </div>



                    </div>

                </div>
                <div className='w-[80%] m-[auto] rounded-md border border-gray-200'>
                    <div className='w-80% m-[auto] p-2 py-8 flex flex-col gap-4'>
                        <div>
                            <h1 className='text-black text-[1.2rem]  font-bold pl-6'>Accessibility</h1>
                        </div>
                        <div className=''>

                            <h1 className='text-black text-sm pl-6'>All course materials are conveniently accessible on the website, allowing members from any country to view them at their convenience.</h1>
                        </div>



                    </div>

                </div>

                <div className='w-[80%] m-[auto] rounded-md border border-gray-200'>
                    <div className='w-80% m-[auto] p-2 py-8 flex flex-col gap-4'>
                        <div className='flex justify-start items-center'>
                            <h1 className='text-black text-[1.2rem]  font-bold pl-6'> Membership Duration : </h1>
                            <h1 className='text-black text-[1rem] font-poppins font-semibold'> The membership term is 12 months, starting from the date of registration.</h1>
                        </div>




                    </div>

                </div>
                </div>


            </div>

        </div>

    )
}

export default Admin6