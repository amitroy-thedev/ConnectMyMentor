import React from 'react'

function Navbar() {
    return (
        <>
            <div className='flex justify-between'>
                <div className='mt-1 ml-2 hover:cursor-pointer'>
                    <h1 className='font-bold text-2xl text-gray-600'>Connect<span className='text-violet-700'>My</span>Mentors</h1>
                </div>
                <div>
                    <ul className='font-bold text-sm mt-1 mr-2 flex gap-5 pt-3'>
                        <li className='hover:cursor-pointer'>Home</li>
                        <li className='hover:cursor-pointer'>About</li>
                        <li className='hover:cursor-pointer'>Contact Us</li>
                    </ul>
                </div>
                <div className='flex gap-3 mr-1 mt-1'>
                    <div>
                        <button className='px-3 py-1 border border-violet-600 rounded-md hover:cursor-pointer'>
                            login
                        </button>
                    </div>
                    <div>
                        <button className='px-3 py-1 bg-violet-700 text-white border border-violet-700 rounded-md hover:cursor-pointer hover:bg-violet-600 duration-300'>
                            signup
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
