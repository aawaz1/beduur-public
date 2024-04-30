// import React from 'react'
// import Table1 from './Tables/Table1'

// const Admin4 = () => {
//   return (
//     <div>
//         <Table1 title={"E-Book Users"} heading3={"Type"} heading6={"21.03.2021"}  heading4={"Time"} heading5={"Date"} />
//     </div>
//   )
// }

// export default Admin4
import Table1 from "./Tables/Table1";
import React, { useState } from 'react'
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
import { Box, Button, Modal, TextField, Typography } from '@mui/material';


const Admin2 = () => {
  return (
  //  <Table1 title={"Testimonals"} heading={"Add Testimonals"} heading3={'Comment'}/>
  <div className='flex h-[100vh] w-[100%]'>
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
      <Table1 title={"E-Book Users"} heading3={"Type"} heading6={"21.03.2021"}  heading4={"Time"} heading5={"Date"} />
      
      {/* <div className='px-8 py-6 flex justify-between'>
          <h1 className='text-md font-semibold font-poppins'>Services</h1>
          <button onClick={handleOpen} className='px-3 py-2 text-white rounded-full font-poppins text-md bg-custom-blue'>Add New Service</button>

      </div>
      <div className='flex flex-col gap-6'>
      <IconProp title={ "HOME BUSINESS SESSION" } title1={"12 Illustrated Subjects: Monthly topics covering various financial aspects such as money energy, financial readiness, global market investing, establishing projects."}
                title2={"6 Zoom Meetings: Subscribers have the opportunity to attend direct meetings with the program organizers to address important financial issues and have their questions answered."}
                title3={"6 Consultations via Email: Each subscriber can seek personalized advice related to their financial situation, income management, or investment path through email consultations."}/>
                 <IconProp title={ "Small & Middle Business" } title1={"12 Illustrated Subjects: Monthly topics covering various financial aspects such as money energy, financial readiness, global market investing, establishing projects."}
                title2={"6 Zoom Meetings: Subscribers have the opportunity to attend direct meetings with the program organizers to address important financial issues and have their questions answered."}
                title3={"6 Consultations via Email: Each subscriber can seek personalized advice related to their financial situation, income management, or investment path through email consultations."}/>
                 <IconProp title={ "Business Development Contract" } title1={"12 Illustrated Subjects: Monthly topics covering various financial aspects such as money energy, financial readiness, global market investing, establishing projects."}
                title2={"6 Zoom Meetings: Subscribers have the opportunity to attend direct meetings with the program organizers to address important financial issues and have their questions answered."}
                title3={"6 Consultations via Email: Each subscriber can seek personalized advice related to their financial situation, income management, or investment path through email consultations."}/>
      </div> */}

  </div>

</div>
  )
}

export default Admin2