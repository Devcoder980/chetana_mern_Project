import React, { useState, useEffect } from 'react'
import logo from '../Images/logo.png'
import style from '../style.js'
import { Link } from 'react-router-dom'
import { HiUser } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [login, setlogin] = useState(false);
  const [show, setShow] = useState(false);
  const history = useNavigate();

  function clrauth() {
    localStorage.clear();
    history('/');
  }
  useEffect(() => {
    const token = localStorage.getItem('authTokenMemorizer'); // get the token from local storage
    if (token) {
      setlogin(true); // set the state to indicate that the user is logged in
    }
  }, []);

  return (
    <nav className={`bg-slate-900 ${style.paddingX} flex justify-between items-center`} >
      <div>
        <Link to='/'><img src={logo} className=' h-14 py-2' alt="" /></Link>
      </div>
      {
        login ?
          <div className='bg-white cursor-pointer  rounded-full p-1'>
            <span onClick={() => setShow(!show)}>
              <HiUser className='w-7 text-slate-900 h-7' />

            </span>
            <ul
              role="menu"
              data-popover="profile-menu"
              data-popover-placement="bottom"
              className={`absolute z-10 ${show ? 'absolute' : 'hidden'} right-4 mt-4 text-black flex min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none`}
            >
              <button
                tabIndex="-1"
                role="menuitem"
                className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>

                <Link to="/dashboard">
                  <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    My Profile  </p>
                </Link>

              </button>
              <button
                tabIndex="-1"
                role="menuitem"
                className="flex md:hidden w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                  <Link to='/post'>
                <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    Create Post
                </p>
                  </Link>
              </button>
              <hr className="my-2 border-blue-gray-50" tabIndex="-1" role="menuitem" />
              <button
                tabIndex="-1"
                role="menuitem"
                className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                  ></path>
                </svg>
                <p onClick={clrauth} className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  Sign Out
                </p>
              </button>
            </ul>
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