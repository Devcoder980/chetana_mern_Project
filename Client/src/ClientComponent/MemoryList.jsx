import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MemoryList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/data/adminuser')
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='flex justify-center py-4 flex-wrap md:gap-4'>
      {users.map((user) => (
        <div
          key={user._id}
          className='shadow-card mb-4 flex flex-col rounded-xl bg-white text-gray-700 w-72 bg-clip-border'
        >
          <div className='translate-y-0'>
            <a href='#' blur-shadow-image='true'>
              {user.file && (
                <img
                  className='rounded-lg w-72'
                  src={`http://localhost:5000/api/data/file/${user.file}`}
                  alt='card image'
                />
              )}
            </a>
          </div>
          <div className='text-secondary flex-1 p-6'>
            <a href='#'>
              <h4 className='font-medium'>{user.title}</h4>
            </a>
            <p className='opcacity-60 mb-3'>{user.message}</p>
            <button
              className='middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              data-ripple-light='true'
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemoryList;
