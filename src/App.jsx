import React from 'react'
import EmergencyNumber from './emergency-number'
import Nav from './nav'
import Hero from './components/hero'
import Services from './components/services'
import Emergency from './components/emergency'
import Footer from './footer'

const App = () => {
  return (
    <div>
      <EmergencyNumber />
      <Nav />
      <Hero />
      <Services />
      <Emergency />
      <Footer />
    </div>
  )
}

export default App