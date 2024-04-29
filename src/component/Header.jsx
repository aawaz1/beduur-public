import React from 'react'
import { useNavigate } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-around p-2'>
      <div className='p-3'>
        <img src='/image 1 (1).png' style={{ width: "10rem", height: "4rem" }} />
      </div>
      <div className='flex justify-between'>
        <ul className='flex justify-between items-center text-center gap-6 p-3 cursor-pointer' >
          <li onClick={() => navigate('/')} className='text-black font-semibold'>Home </li>
          <li onClick={() => navigate('/about')} className='text-black  font-semibold'>About Us</li>
          <li onClick={() => navigate('/services')} className='text-black  font-semibold'>Services</li>
          <li onClick={() => navigate('/contact')} className='text-black  font-semibold'>Contact Us</li>
        
          <li onClick={() => navigate('/login')}><AccountCircleOutlinedIcon/></li>

        </ul>
      </div>
    </div>
  )
}

export default Header