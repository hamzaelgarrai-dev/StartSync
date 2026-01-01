import React from 'react'
import Hero from '../pages/landing/components/Hero'
import Features from '../pages/landing/components/Features'
import HowItWorks from '../pages/landing/components/HowItWorks'
import Testimonials from '../pages/landing/components/Testimonials'
import CTA from '../pages/landing/components/CTA'

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