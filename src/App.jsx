import React from 'react'
import EmergencyNumber from './emergency-number'
import Nav from './nav'
import Hero from './components/hero'
import Services from './components/services'
import Emergency from './components/emergency'
import Qualities from './components/qualities'
import Testimonial from './components/testimonial'
import About from './components/about'
import FreeQuote from './components/free-quote'
import Contact from './components/contact'
import Footer from './footer'


const App = () => {
  const [scroll, setScroll] = React.useState(false); // Just a state to trigger re-render

  const forceReRender = () => {
    setScroll(prev => !prev); // This will trigger a re-render
  };
  
  
  return (
    <div className={`${scroll ? 'overflow-y-hidden h-screen ': 'overflow-y-scroll h-fit'}`}>
      <EmergencyNumber />
      <Nav forceReRender={forceReRender} />
      <Hero />
      <Services />
      <Emergency />
      <Qualities />
      <Testimonial />
      <About />
      <FreeQuote />
      <Contact />
      <Footer />
    </div>
  )
}

export default App