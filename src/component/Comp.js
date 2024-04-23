import React from 'react'

const Comp = ({bgColor}) => {
  return (
    <div style={{backgroundColor : `${bgColor}`}} className={`flex justify-center items-center flex-col bg-[${bgColor}] p-4 rounded-md relative pb-[2.5rem]`}>
    <h2 className='text-black font-bold font-poppins py-8 text-center'>
        Membership <br/>
        Business Membership

    </h2>

    <h2 className='text-[#676767]'>
    Our expertise in the area of IT
    <br/>
solutions makes us the most prolific <br/>
service provider.
    </h2>
    <div className='absolute bottom-[-2rem]'>
                            <img src='div.elementor-icon.png' style={{width :"4rem"}}/>
                        </div>

</div>
  )
}

export default Comp;