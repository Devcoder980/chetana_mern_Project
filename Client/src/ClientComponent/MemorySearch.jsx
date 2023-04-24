import React from 'react'
import MemoryList from './MemoryList'
import styles from '../style'
import MemoryForm from './MemoryForm'
const MemorySearch = () => {
  return (
    <div className={`${styles.paddingX} py-10 `}>
      <h1 className='text-center text-3xl mt-8 font-medium'>My Memorizer</h1>
      <div className='text-center'>
        <input type="text" className=' mb-8 py-2 w-full px-4 mt-5 md:w-2/4 rounded-md border-1 border-blue-700' placeholder='Search....' />
      </div>
      <div className='flex flex-wrap'>
        <div className='flex-[2] my-4'> 
        <MemoryList />
      
        </div>
        <div className='flex-1'> <MemoryForm/></div>
      </div>
     
     
    </div>
  )
}

export default MemorySearch