import React from 'react'

const LoginForm = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row w-[100%] gap-2 sm:p-0 md:p-2'>
            <div className='w-[100%] lg:w-[30%] gap-16 flex flex-col text-center justify-start items-center'>
                <div className='p-5 '>
                    <img src='/image 1 (1).png' className='w-[10rem] xl:w-[12rem]' />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-[1.2rem] font-medium'>Welcome Home !</h1>
                    <h2>Sign in to continue to Bedoor Almutairi Admin.</h2>
                </div>

                <div className='flex flex-col justify-center items-center gap-5 w-[100%]'>
                    <h1 className='text-md font-semibold'>Login</h1>
                    <input className=" border border-gray-300 rounded-md p-2 w-[60%]" placeholder="E-Mail" type="text" />
                    <input className=" border border-gray-300 rounded-md p-2 w-[60%]" placeholder="Password" type="text" />
                    <div className='flex gap-3 w-[60%]'><input type="checkbox" id="myCheckbox" name="myCheckbox" />
                        <label for="myCheckbox">Remember Me</label></div>
                    <div className='flex gap-3 w-[60%] items-center text-center justify-start'>
                        <button className='bg-custom-blue justify-start rounded-md py-1 px-6 text-medium'>Login</button>
                        <h2 className='font-poppins font-medium'>Forgot Password?</h2>
                    </div>
                </div>

            </div>
            <div className='w-[100%] lg:w-[70%]'>
                <img src='/image 9.png' />

            </div>
        </div>
    )
}

export default LoginForm