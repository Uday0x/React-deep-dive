import React from 'react'
import Header from './src/Components/Header/header'
import { Outlet } from 'react-router'
import Footer from './src/Components/Footer/footer'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
