import ContactForm from '@/components/contactForm'
import H3 from '@/components/headers/h3'
import React from 'react'

export default function Contact() {
  return <div className='Display Paper'>
        <H3 className='my-[10px]'>Send me a letter</H3>
        <ContactForm />
    </div>
}
