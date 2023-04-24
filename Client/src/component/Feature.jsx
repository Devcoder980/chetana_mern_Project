import React from 'react'
import styles from '../style'

import dummp from '../data/dumy.js'
const Feature = () => {
    return (
        <section className={`${styles.paddingX} py-12`}>
            <h1 className='text-4xl font-bold'>Features</h1>
            {dummp.map((a, i) => (
                <div className={`sm:flex items-center  gap-10 mt-10 ${a.position===false ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="flex-1 ">
                        <img src={a.img} className=' h-[26rem] rounded-md' alt="" />
                    </div>
                    <div className="flex-1">
                        <p className='py-5 text-xl'>{a.data}</p>
                    </div>
                </div>

            ))}

        </section>
    )
}

export default Feature