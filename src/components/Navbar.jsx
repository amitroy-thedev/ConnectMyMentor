import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
function Navbar({onHome}) {
    const {currentUser} = useAuth();
    const navigate = useNavigate();

    const signUserOut = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (err) {
          setError(err.message);
        }
      };

    return (
        <>
            <div className='flex justify-between mx-4 my-4'>
                <div className='mt-1 ml-2 hover:cursor-pointer'>
                    <Link to="/">
                    <h1 className='font-bold text-2xl text-gray-600'>Connect<span className='text-violet-700'>My</span>Mentors</h1>
                    </Link>
                </div>
            
                {onHome && !currentUser && <div className='flex gap-3 mr-1 mt-1'>
                    <div>
                        <Link className='px-3 py-2 border border-violet-600 rounded-md hover:cursor-pointer font-medium' to={"/login"}>
                            Login
                        </Link>
                    </div>
                    <div>
                        <Link className='px-3 py-2 bg-[#8E51FF] font-medium text-white border border-violet-700 rounded-md hover:cursor-pointer hover:bg-violet-600 duration-300' to={"/signup"}>
                            Signup
                        </Link>
                    </div>
                </div>}
                    {currentUser && 
                    <div>
                        <button className='px-3 py-2 bg-[#ff5151] font-medium text-white border rounded-md hover:cursor-pointer hover:bg-[#f82b2b] duration-300' onClick={signUserOut}>
                            Logout
                        </button>
                    </div>
                    }
            </div>
        </>
    )
}

export default Navbar
