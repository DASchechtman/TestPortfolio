'use client'
import React from 'react'

export default function ContactForm() {

    async function submitForm(e: any) {
        e.preventDefault()
        const name = String(e.currentTarget.name.value)
        const email = String(e.currentTarget.email.value)
        const subject = String(e.currentTarget.subject.value)
        const message = String(e.currentTarget.message.value)

        const res = await fetch('/api/contactMe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, subject, message })
        })
        if(res.ok === true) {
            console.log("message sent")
        }
    }

    return <form className='' onSubmit={submitForm}>
        <label htmlFor="name" className='text-left'>Name:</label>
        <input type="text" id='name' required={true}/>
        <br />
        <label htmlFor="email">Emai:</label>
        <input type="text" id='email' required={true}/>
        <br />
        <label htmlFor="subject">Subject:</label>
        <input type="text" id='subject' required={true}/>
        <br />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" cols={30} rows={10}></textarea>
        <br />
        <button type='submit' className='bg-green-600 rounded px-[10px] block'>
            Send Letter!
        </button>
    </form>
}
