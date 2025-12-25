import React from 'react'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import HowItWorks from '../components/Home/HowItWorks'
import Testimonials from '../components/Home/Testimonials'
import CTA from '../components/Home/CTA'

function Home() {
  return (

    <>

    <div className='max-w-7xl mx-auto px-6'>

      <Hero/>
    <Features/>
    <HowItWorks/>
    <Testimonials/>
    <CTA/>
    </div>
    
    
    </>


  )
}

export default Home