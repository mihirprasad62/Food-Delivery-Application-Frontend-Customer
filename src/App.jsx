import React from 'react'
import Menubar from './components/Menubar/Menubar'
import Home from './pages/Home/Home'
import ExploreFood from './pages/ExploreFood/ExploreFood'
import ContactUs from './pages/ContactUs/ContactUs'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Menubar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreFood />} /> 
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App