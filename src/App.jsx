import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Integrations from './components/Integrations'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <Integrations />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
