import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import OfferBanner from './components/Offerbanner'
import Hero from './components/Hero'
import DoubleBan from './components/DoubleBan'
import Filmban from './components/Filmban'
import Footer from './components/footer'




function App() {
  return (
    <>
<Navbar></Navbar>
<OfferBanner></OfferBanner>
<Hero></Hero>
<DoubleBan></DoubleBan>
<Filmban></Filmban>
<Footer></Footer>

    </>
  )
}

export default App
