import React from 'react';
import { useNavigate } from 'react-router-dom';

const Comp = ({ bgColor, navigation, title1, title2, heading }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(navigation);
  };

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-[20rem] flex justify-center items-center flex-col bg-[${bgColor}] p-4 rounded-md relative pb-[2.5rem]"
    >
      <h2 className="text-black font-bold font-poppins py-8 text-center">
        {title1} <br />
        {title2}
      </h2>

      <h2 className="text-[#676767]">{heading}</h2>

      <div onClick={handleNavigation} className="absolute bottom-[-2rem]">
        <img src="div.elementor-icon.png" style={{ width: '4rem' }} alt="Navigation Icon" />
      </div>
    </div>
  );
};

export default Comp;