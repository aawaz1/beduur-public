import React from 'react'

const Contact = () => {
    return (
        <div className=' w-[60%] m-auto flex shadow-lg p-2'>
            <div className='w-[33%] gap-3 p-2 flex flex-col justify-center items-center'>
                <div className='flex '> <img src='/Vector (1).png' /></div>
                <h1 className='text-black font-medium text-md'>(+654 7654 7543)</h1>
                <h2 className='text-sm text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Ut elit tellus, luctus nec <br />
                    ullamcorper mattis, pulvinar dapibus leo.
                </h2>
                <div className='flex gap-2'>
                    <img className='w-[1.5rem]' src='/.png' />
                    <h2 className='text-custom-blue font-medium'>LEARN MORE</h2>
                </div>
            </div>
            <div className='w-[33%] gap-3 p-2 flex flex-col justify-center items-center'>
                <div className='flex '> <img src='Icon (1).png' /></div>
                <h1 className='text-black font-medium text-md'>mail@ABC.com</h1>
                <h2 className='text-sm text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Ut elit tellus, luctus nec <br />
                    ullamcorper mattis, pulvinar dapibus leo.
                </h2>
                <div className='flex gap-2'>
                    <img className='w-[1.5rem]' src='/.png' />
                    <h2 className='text-custom-blue font-medium'>LEARN MORE</h2>
                </div>
            </div>
            <div className='w-[33%] gap-3 p-2 flex flex-col justify-center items-center'>
                <div className='flex '> <img src='/Icon (2).png' /></div>
                <h1 className='text-black font-medium text-md'>London Eye, London</h1>
                <h2 className='text-sm text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Ut elit tellus, luctus nec <br />
                    ullamcorper mattis, pulvinar dapibus leo.
                </h2>
                <div className='flex gap-2'>
                    <img className='w-[1.5rem]' src='/.png' />
                    <h2 className='text-custom-blue font-medium'>LEARN MORE</h2>
                </div>
            </div>

        </div>
    )
}

export default Contact