import React, { useEffect } from 'react'
import MembershipHeader from './MembershipHeader'
import IconProp from './Props/IconProp'
import { useLocation, useNavigate } from 'react-router-dom';
import BeginMembership from './BeginMembership';

const MembershipService = () => {
    const navigate = useNavigate();
   
        const location = useLocation();
      
        useEffect(() => {
          // Scroll to the top of the page whenever the location changes
          window.scrollTo(0, 0);
        }, [location.pathname]); // Trigger effect when the pathname changes
      
       
      
    return (
        <div className='flex flex-col gap-14'>
           <MembershipHeader title={"Membership Service"} title1={"Begin Membership"} title2={"Business"}/>
           <BeginMembership/>
            {/* <div className='w-[100%] xl:w-[80%] xl:m-[auto] flex flex-col xl:flex-row '>
                <div className='w-[100%] lg:w-[70%]'>
                    <img src='/Video (1).png' />

                </div>
                <div style={{ backgroundImage: `url("/Side Deatils.png")` }} className='p-2 py-8 w-[100%] xl:w-[30%]' >
                    <h1 className='text-white text-[1.8rem]  font-semibold px-4 py-8'>Begin Membership</h1>
                    <h2 className='px-4 text-sm lg:text-md xl:text-[1rem] text-white'>This membership is the first integrated annual membership to teach money management and investment basics through an integrated program of three chapters. Each chapter contains enough information to start your path to the financial freedom you want. This program was designed by Ms. Bodour Al-Mutairi, a certified trainer and project consultant since 2016. She holds a Bachelor's degree in Business Administration/Economics from the Arab Open University in a deep and simplified manner, with which it is easy to understand and apply the information to obtain the best results, God willing.
                    </h2>
                </div>
            </div> */}
            <div className='w-[100%] lg:w-[80%] lg:m-[auto] rounded-md border border-gray-200'>
                <div className='w-80% m-[auto] p-2 py-8 flex flex-col gap-8'>
                    <div>
                        <h1 className='text-black text-[1.4rem]  font-bold pl-6'>Membership Includes the Following Classes :</h1>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-black text-[1.2rem]  font-bold pl-6'>Chapter One : Income Management</h1>
                        <h1 className='text-custom-lightgray text-[1rem] pl-6'>In this chapter, members will learn about the money matrix, their financial behavior's consequences, and how to manage their income effectively. It covers the retirement equation and various saving and investment methods to prepare for a financially secure future.</h1>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-black text-[1.2rem] font-bold pl-6'>Chapter Two : Separating Money in the Family</h1>
                        <h1 className='text-custom-lightgray pl-6 text-[1rem]'>This chapter delves deeper into the role of money within families. It helps participants identify their financial patterns and correct any misbehavior. The chapter also addresses financial patterns of current and future partners, culminating in a practical financial management plan to maintain stability.</h1>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-black text-[1.2rem]  font-bold pl-6'>Chapter Three :  The Theory of Patterns of Wealth</h1>
                        <h1 className='text-custom-lightgray text-[1rem] pl-6'>Members will explore new perspectives on wealth through this chapter, uncovering unique ways that suit their personalities to attain financial prosperity.</h1>
                    </div>
                </div>

            </div>
           <div><IconProp title={"Additional Membership Benefits"} title1={"12 Illustrated Subjects: Monthly topics covering various financial aspects such as money energy, financial readiness, global market investing, establishing projects."} title2={"  6 Zoom Meetings: Subscribers have the opportunity to attend direct meetings with the program organizers to address important financial issues and have their questions answered."} title3={"  6 Consultations via Email: Each subscriber can seek personalized advice related to their financial situation, income management, or investment path through email consultations."}/></div>
            <div className='w-[100%] lg:w-[80%] lg:m-[auto] rounded-md border border-gray-200'>
                <div className='w-80% m-[auto] p-2 py-8 flex flex-col gap-4'>
                    <div>
                        <h1 className='text-black text-[1.2rem] font-poppins font-bold pl-6'>Membership Eligibility</h1>
                    </div>
                    <div className='flex flex-col gap-5'>

                        <h1 className='text-black text-sm px-6'>This program is ideal for individuals who seek financial freedom, a secure retirement, and the ability to manage their income efficiently. It also caters to those interested in providing their children with a strong financial education, learning investment basics, and diversifying income sources. The membership welcomes anyone keen on embarking on a money management journey under the expert guidance of a specialist in the field.</h1>
                    </div>



                </div>

            </div>
            <div className='w-[100%] lg:w-[80%] lg:m-[auto] rounded-md border border-gray-200'>
                <div className='w-80% m-[auto] p-2 py-8 flex flex-col gap-4'>
                    <div>
                        <h1 className='text-black text-[1.2rem] font-poppins font-bold pl-6'>Accessibility</h1>
                    </div>
                    <div className=''>

                        <h1 className='text-black text-sm pl-6'>All course materials are conveniently accessible on the website, allowing members from any country to view them at their convenience.</h1>
                    </div>



                </div>

            </div>
           
            <div className='w-[100%] lg:w-[80%] lg:m-[auto] rounded-md border border-gray-200'>
                <div className='w-80% m-[auto] p-2 py-8 flex flex-col '>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-black text-[1.2rem]  font-bold pl-6'> Membership Duration  </h1>
                        <h1 className='text-black text-sm font-semibold pl-6'> The membership term is 12 months, starting from the date of registration.</h1>
                    </div>
                    



                </div>

            </div>
            <div className='flex justify-center items-center '>
                <button onClick={() => navigate("/joinmembership")} className='rounded-md bg-custom-green text-white py-3 px-20 hover:bg-custom-blue'>BEGIN MEMBERSHIP</button>

            </div>
            <div>
                
            </div>
        </div>
    )
}

export default MembershipService