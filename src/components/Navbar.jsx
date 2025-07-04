import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const naviagte = useNavigate();

    function handleClick () {
        naviagte('/login');
    }

  return (
   <header className='w-full flex justify-between items-center bg-black text-white p-4  '> 
    <div className='flex items-center gap-2'> 
        <img src='/images/sellify.png' className='h-[40px] w-[40px]'/>
        <h3 className=' font-bold text-2xl'>Sellify</h3>

    </div>

       <nav className='flex gap-10 text-lg font-semibold '> 

        <NavLink to="/" className="hover:text-gray-400 transition-all duration-200 ">Home</NavLink>
              

        <NavLink to="/productlist" className="hover:text-gray-400 transition-all duration-200 ">Products</NavLink>
        <NavLink to="/about" className="hover:text-gray-400 transition-all duration-200">About</NavLink>
        <NavLink to="/contacts" className="hover:text-gray-400 transition-all duration-200">Contact</NavLink>

       </nav>


       <button className='block w-[80px] rounded px-1 py-2 bg-white text-black font-semibold hover:bg-gray-200 active:bg-gray-400' onClick={handleClick}>Login</button>

   </header>
  )
}

export default Navbar