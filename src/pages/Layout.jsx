import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router-dom' 
import Footer from '../components/Footer.jsx'
const Layout = () => {
  return (
    <div>
        <Navbar  />
        <main className='min-h-screen'>
              <Outlet />
        </main>
          
         <Footer />
        
    </div>
  )
}

export default Layout