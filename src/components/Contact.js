import React from 'react'
import Necklace from '../images/necklace.jpeg';

export default function Resume() {
    return (
        <main className="bg-gray-300 min-h-screen p-12 place-items-center">
            <img src={Necklace} className="rounded-full" />
            <h1 className="text-4xl">Get in touch!</h1>
            <p>Add form here</p>
            <p>Your Name</p>
            <p>Your Email</p>
            <p>Subject</p>
            <p>Your Message</p>
            <p>Send Button</p>
        </main>
    )
}