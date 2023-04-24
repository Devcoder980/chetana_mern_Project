import React from 'react'

const MemoryList = () => {
  return (
    <div className='flex justify-center py-4 flex-wrap  md:gap-4' >
      <div className="shadow-card mb-4  flex flex-col  rounded-xl bg-white text-gray-700 w-72 bg-clip-border">
        <div className=" translate-y-0">
          <a href="#" blur-shadow-image="true">
            <img
              className="rounded-lg  w-72"
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card image"
            />
          </a>
        </div>
        <div className="text-secondary flex-1 p-6">
          <a href="#">
            <h4 className="font-medium">Material Tailwind</h4>
          </a>
          <p className="opcacity-60 mb-3">
            The time is now for it to be okay to be great. People in this world shun
            people for being great. For being a bright color. For standing out.
          </p>
          <button
            className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="shadow-card  mb-4 flex flex-col  rounded-xl bg-white text-gray-700 w-72 bg-clip-border">
        <div className=" translate-y-0">
          <a href="#" blur-shadow-image="true">
            <img
              className="rounded-lg  w-72"
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card image"
            />
          </a>
        </div>
        <div className="text-secondary flex-1 p-6">
          <a href="#">
            <h4 className="font-medium">Material Tailwind</h4>
          </a>
          <p className="opcacity-60 mb-3">
            The time is now for it to be okay to be great. People in this world shun
            people for being great. For being a bright color. For standing out.
          </p>
          <button
            className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            Read More
          </button>
        </div>
      </div>

    </div>

  )
}

export default MemoryList