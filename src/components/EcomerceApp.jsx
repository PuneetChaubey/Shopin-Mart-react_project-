import React from 'react'
import Navbar from './Navbar'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import Mens from './Mens'
import Women from './Women'
import Kids from './Kids'

import Login from './Login'
import Banner from './Banner'
import Footer from './Footer'
import Cart from './Cart'
import RequiredAuth from '../HOC/RequiredAuth'
const EcomerceApp = () => {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/womens" element={<Women/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/cart"  element={<RequiredAuth><Cart/></RequiredAuth>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default EcomerceApp
