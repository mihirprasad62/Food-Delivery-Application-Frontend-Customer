import React from 'react'
import Menubar from './components/Menubar/Menubar'
import Home from './pages/Home/Home'
import ExploreFood from './pages/ExploreFood/ExploreFood'
import ContactUs from './pages/ContactUs/ContactUs'
import { Route, Routes } from 'react-router-dom'
import FoodDetails from './pages/FoodDetails/FoodDetails'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <>
      <Menubar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreFood />} /> 
        <Route path="/contact" element={<ContactUs />} />
         <Route path="/food/:id" element={<FoodDetails />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/order" element={<PlaceOrder />} />
         
      </Routes>
    </>
  )
}

export default App