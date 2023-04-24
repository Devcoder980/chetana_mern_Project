import React, { useState } from 'react'
import axios from 'axios'

import Navbar from '../component/Navbar';

const MemoryForm = () => {
  const [placeholder, setPlaceholder] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [tags, settags] = useState('');
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!placeholder.trim()) errors.placeholder = 'First Name is required';
    if (!title.trim()) errors.title = 'title Name is required';
    if (!message.trim()) errors.message = 'message is required';
    if (!tags.trim()) errors.tags = 'tags is required';
    if (!file) errors.file = 'Resume is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    const formData = new FormData();
    formData.append('message', message);
    formData.append('title', title);
    formData.append('tags', tags);
    formData.append('file', file);
    formData.append('placeholder', placeholder);


    try {
      const response = await axios.post('http://localhost:5000/api/data/', formData);
      console.log(response.data);
      alert('Your application has been submitted successfully');
   
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };
  return (
    <div>
      <div className='md:hidden'>
        <Navbar/>
      </div>
      <form className='bg-white px-4 sm:px-8 py-8 my-8' onSubmit={handleSubmit}>
        <h1 className="text-black text-xl font-medium">Create a Memorizer</h1>

        <div className="relative my-2 h-14 w-full min-w-[200px]">
          <input
            className="peer border-2  h-full w-full   border-blue-gray-400   px-3 py-3 font-sans text-sm font-normal text-blue-gray-700  transition-all text-black  focus:border-2   focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder="placeholder "
            onChange={(e) => setPlaceholder(e.target.value)}
          />
          {errors.placeholder && <span className="error text-red-500">{errors.placeholder}</span>}
        </div>
        <div className="relative my-2 h-14 w-full min-w-[200px]">
          <input
            className="peer border-2  h-full w-full   border-blue-gray-400   px-3 py-3 font-sans text-sm font-normal text-blue-gray-700  transition-all text-black  focus:border-2   focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder="Title "
            name='Title'
            onChange={(e) => setTitle(e.target.value)}

          />
          {errors.title && <span className="error text-red-500">{errors.title}</span>}
        </div>
        <div className="relative my-2  w-full min-w-[200px]">
          <textarea rows="5"
            className="w-full border-2 p-2"
            placeholder="Message "
            name='message'
            onChange={(e) => setMessage(e.target.value)}

          ></textarea>
          {errors.message && <span className="error text-red-500">{errors.message}</span>}

        </div>
        <div className="relative my-2 h-14 w-full min-w-[200px]">
          <input
            className="peer border-2  h-full w-full   border-blue-gray-400   px-3 py-3 font-sans text-sm font-normal text-blue-gray-700  transition-all text-black  focus:border-2   focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder="Tags (Comma separeted) "
            name='tags'
            onChange={(e) => settags(e.target.value)}
          />
          {errors.tags && <span className="error text-red-500">{errors.tags}</span>}
        </div>
        <div className="relative my-2 h-14 w-full min-w-[200px]">
          <input type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className='text-black py-2' name="file" id="" />
          {errors.file && <span className="error text-red-500">{errors.file}</span>}
        </div>
        <div className="relative  h-14 w-full min-w-[200px]">
          <button
            type='submit'
            className="middle none center w-full  bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            Submit
          </button>
        </div>
        <div className="relative h-14 w-full min-w-[200px]">
          <button
            className="middle none center w-full  bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

export default MemoryForm