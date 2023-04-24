import React from 'react'
import styles from '../style'
import heroimg from '../Images/hero.jpg'
import Feature from './Feature'
import Footer from './Footer'
import Navbar from './Navbar'
const Hero = () => {
    return (
        <>
            <Navbar/>
            <main className={`${styles.paddingX} sm:flex py-12 items-center gap-10`}>

                <div className='  flex-1  mt-8'>
                    <label className=' text-4xl sm:text-5xl font-medium '>Merorize Anyting with Chetara</label>
                    <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, facere! Nesciunt voluptas alias reiciendis accusantium nam, a quos, velit quia blanditiis aliquam libero qui, maxime ratione magni nemo ullam iure!</p>
                    <button className=' bg-slate-900 mt-6  uppercase w-20 h-9 text-center px-2 rounded-sm  bottom-2   hover:border-slate-900 hover:border-2 hover:bg-white hover:text-slate-900 text-white'>Login</button>
                    <button className='bg-slate-900  uppercase   h-9 ml-4  px-5 text-center  rounded-sm  bottom-2  hover:border-slate-900 hover:border-2 hover:bg-white hover:text-slate-900 text-white'>Register</button>
                </div>

                <div className='flex-1 mt-8'>
                    <img src={heroimg} alt="" className=" rounded-md h-[26rem]" />
                </div>

            </main>
            <Feature />
            <Footer />
        </>
    )
}

export default Hero