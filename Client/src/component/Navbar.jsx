import React, { useState } from 'react'
import logo from '../Images/logo.png'
import style from '../style.js'
import { Link } from 'react-router-dom'
import { HiUser } from 'react-icons/hi'
const Navbar = () => {
  const [login, setlogin] = useState(false);
  return (
    <nav className={`bg-slate-900 ${style.paddingX} flex justify-between items-center`} >
      <div  >
        
        <Link to='/'><img src={logo} className=' h-14 py-2' alt="" /></Link>
      </div>
      {
        login ? 
        <div className='bg-white cursor-pointer rounded-full p-1'>
        <HiUser className='w-7 text-slate-900 h-7' />
      </div>
      :
      <div className='sm:flex hidden  '>
        <button className='bg-white  text-slate-900 uppercase w-20 h-9 text-center px-2 rounded-sm  bottom-2 border-x-white hover:border-white hover:border-2 hover:bg-slate-900 hover:text-white'><Link to="/login">Login</Link></button>
        <button className='bg-white text-slate-900  uppercase   h-9 ml-4  px-5 text-center  rounded-sm  bottom-2 border-x-white hover:border-white hover:border-2 hover:bg-slate-900 hover:text-white'><Link to="/register">Register</Link></button>
      </div>
      }
      
     
    </nav>
  )
}

export default Navbar