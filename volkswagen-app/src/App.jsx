import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedModels from './components/FeaturedModels'
import WhyVolkswagen from './components/WhyVolkswagen'
import LocationSection from './components/LocationSection'
import DudasSection from './components/DudasSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      <Navbar />
      <HeroSection />
      <FeaturedModels/>
      <WhyVolkswagen />
      <LocationSection/>
      <DudasSection/>
      <Footer/>
    </>
  )
}

export default App
