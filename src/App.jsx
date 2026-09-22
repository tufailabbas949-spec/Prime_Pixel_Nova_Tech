import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from './pages/Cantect.jsx'
import Services from "./pages/Services.jsx"
import Layout from './pages/Layout.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
           <Route path='/privacypolicy' element={<Services />} />
        <Route path='/privacypolicy' element={<Contact />} />
        {/* future me not now  */}
        {/* <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App