import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import {Outlet} from 'react-router-dom'

const MainRoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainRoot