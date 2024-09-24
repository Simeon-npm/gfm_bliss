import React from 'react'
import Emergency from './emergency-number'
import Nav from './nav'
import Hero from './components/hero'
import Services from './components/services'
import Footer from './footer'

const App = () => {
  return (
    <div>
      <Emergency />
      <Nav />
      <Hero />
      <Services />
      <Footer />
    </div>
  )
}

export default App