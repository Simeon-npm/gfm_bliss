import React from 'react'
import EmergencyNumber from './emergency-number'
import Nav from './nav'
import Hero from './components/hero'
import Services from './components/services'
import Emergency from './components/emergency'
import Qualities from './components/qualities'
import Testimonial from './components/testimonial'
import Footer from './footer'

const App = () => {
  return (
    <div>
      <EmergencyNumber />
      <Nav />
      <Hero />
      <Services />
      <Emergency />
      <Qualities />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App