import AboutSite from '@/components/aboutSite'
import React from 'react'

interface Prop {
    className?: string
}

export default function About(prop: Prop) {
  return <div className='Display'>
    <AboutSite/>
  </div>
}