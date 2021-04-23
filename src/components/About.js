import React from 'react'
import AboutMePhoto from '../images/about-me-photo.jpg'
import Necklace from '../images/necklace.jpeg'

export default function About() {
    return (
        <main className="bg-gray-300 min-h-screen p-12">
            <div className="grid grid-flow-col auto-cols-max">
                <img src={AboutMePhoto} alt="self" className="photo-front rounded-full self-portrait ml-12 mt-12" />
                    <p className="pl-40 pt-20 about-text mt-12">
                        <strong className="text-2xl">Phong Lo</strong>
                        <br></br>
                        <br></br>
                        Hello! I'm a full-stack software developer located in Denver, CO. 
                        <br></br>
                        The main area of my expertise is React JS, Ruby on Rails, Ruby,
                        <br></br>
                        HTML, CSS, and JavaScript. 
                        <br></br>
                        <br></br>
                        When I'm not coding, I enjoy spending time with my partner Edd
                        <br></br>
                        and our cat, Nymeria. Otherwise, most likely you'll find me by a 
                        <br></br>
                        beach, pool, or mountain.
                        <br></br>
                        <br></br>
                        Let's build something special.
                    </p>
            </div>
        </main>
    )
}
