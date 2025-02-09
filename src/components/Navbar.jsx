import React from 'react'

function Navbar() {
    return (
        <>
            <div className='flex justify-between mx-4 my-4'>
                <div className='mt-1 ml-2 hover:cursor-pointer'>
                    <h1 className='font-bold text-2xl text-gray-600'>Connect<span className='text-violet-700'>My</span>Mentors</h1>
                </div>
            
                <div className='flex gap-3 mr-1 mt-1'>
                    <div>
                        <button className='px-3 py-1 border border-violet-600 rounded-md hover:cursor-pointer'>
                            login
                        </button>
                    </div>
                    <div>
                        <button className='px-3 py-1 bg-blue-300 text-white border border-violet-700 rounded-md hover:cursor-pointer hover:bg-violet-600 duration-300'>
                            signup
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
