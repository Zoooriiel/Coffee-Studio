import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col"> 
    
    {/* Navbar */}
      <Navbar />

        {/* Main content area */}
      <div className="flex-grow"> 
        <Outlet />
      </div>

      {/* Footer */}
      <Footer /> 
    </div>
  )
}

export default RootLayout
