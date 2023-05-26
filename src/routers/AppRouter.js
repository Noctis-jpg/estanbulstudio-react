import React from 'react'
import Headers from "../components/Header"
import Footer from "../components/Footer"
import { Routes, Route } from "react-router-dom"
import HomePage from "../components/HomePage"
import Portfolio from "../components/Portfolio"
import AboutPage from "../components/AboutPage"
import FuaCreative from "../components/FuaCreative"
import ContactPage from "../components/ContactPage"
import StudioRental from '../components/StudioRental'


const AppRouter = () => {
  return (
<div className='RoutesMain'>

    <Headers></Headers>

    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/studyo-kirala" element={<StudioRental />} />
    <Route path="/hakkimizda" element={<AboutPage />} />
    <Route path="/backstage" element={<FuaCreative />} />
    <Route path="/iletisim" element={<ContactPage />} />
  </Routes> 

  
  <Footer></Footer>
  </div>
  )
}

export default AppRouter