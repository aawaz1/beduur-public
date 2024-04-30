import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [language, setLanguage] = useState(false); // Assuming `language` is a boolean state variable

  const handleChange = () => {
    // Navigate to '/contact' route
   

    // Toggle the `language` state variable
    setLanguage(prevLanguage => !prevLanguage);
  };
  return (
    <>
    <div className='flex  md:hidden  justify-between px-2 md:p-2'>
      <div className='p-3'>
        <img src='/image 1 (1).png' style={{ width: "8rem", height: "3rem" }} />
      </div>
      <div className='flex justify-between  items-center text-center gap-6 p-3 cursor-pointer'>
      <AccountCircleOutlinedIcon/>
        <div  onClick={handleClick}><MenuIcon/></div>
       
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>About Us</MenuItem>
        <MenuItem onClick={handleClose}>Services</MenuItem>
        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
        <MenuItem onClick={handleClose}>AR</MenuItem>
      </Menu>
    </div>
    <div className='hidden md:flex  justify-around p-2'>
    <div className='p-3'>
      <img src='/image 1 (1).png' style={{ width: "10rem", height: "4rem" }} />
    </div>
    <div className='flex justify-between'>
      <ul className='flex justify-between items-center text-center gap-6 p-3 cursor-pointer' >
        <li onClick={() => navigate('/')} className='text-black font-semibold'>Home </li>
        <li onClick={() => navigate('/about')} className='text-black  font-semibold'>About Us</li>
        <li onClick={() => navigate('/services')} className='text-black  font-semibold'>Services</li>
        <li onClick={() => navigate('/contact')} className='text-black  font-semibold'>Contact Us</li>
        <li onClick={handleChange} className='text-black  font-semibold'>{language ? "EN" : "AR"}</li>
      
        <li onClick={() => navigate('/login')}><AccountCircleOutlinedIcon/></li>

      </ul>
    </div>
  </div>
  </>
  )
}

export default Header