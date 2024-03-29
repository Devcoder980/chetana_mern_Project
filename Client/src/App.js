import React from 'react'
import './App.css'
import Hero from './component/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './ClientComponent/login'
import Register from './ClientComponent/Register'
import Dashboard from './ClientComponent/Dashboard'
import MemoryForm from './ClientComponent/MemoryForm'
const App = () => {

  return (
    <div className=' bg-blue-600 text-white'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/post' element={<MemoryForm />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
