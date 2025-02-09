import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({onHome}) {
    return (
        <>
            <div className='flex justify-between mx-4 my-4'>
                <div className='mt-1 ml-2 hover:cursor-pointer'>
                    <Link to="/">
                    <h1 className='font-bold text-2xl text-gray-600'>Connect<span className='text-violet-700'>My</span>Mentors</h1>
                    </Link>
                </div>
            
                {onHome && <div className='flex gap-3 mr-1 mt-1'>
                    <div>
                        <Link className='px-3 py-1 border border-violet-600 rounded-md hover:cursor-pointer' to={"/login"}>
                            Login
                        </Link>
                    </div>
                    <div>
                        <Link className='px-3 py-1 bg-blue-300 text-white border border-violet-700 rounded-md hover:cursor-pointer hover:bg-violet-600 duration-300' to={"/signup"}>
                            Signup
                        </Link>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Navbar
