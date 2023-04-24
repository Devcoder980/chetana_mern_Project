import React from 'react'
import logo from '../Images/logo.png'
import styles from '../style'
import { BsFacebook,BsInstagram,BsLinkedin } from 'react-icons/bs'

const Footer = () => (
    <footer className={` ${styles.paddingX} py-12 bg-slate-900 flex flex-col items-center justify-center text-center `}>
        <img src={logo} className=' w-40' alt="" />
        <p className=' pt-3 w-72 pb-8'>Lorem ipsum   Unde voluptate   eniet nostrum iure cons!</p>
        <hr className='text-white  h-1s  w-full bg-white' />
        <ul className='flex mt-10  justify-center'>
            <li><BsFacebook className='w-14 h-7'/></li>
            <li><BsInstagram className='w-14 h-7'/></li>
            <li><BsLinkedin className='w-14 h-7'/></li>
        </ul>
    </footer>
) 

export default Footer