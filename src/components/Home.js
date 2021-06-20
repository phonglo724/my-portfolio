import React from 'react'
import HmongWoman from "../images/hmong-woman.jpeg";

export default function Home() {
    return (
        <main className="home-background min-h-screen">
            <img 
                src={HmongWoman} 
                alt="Hmong Pattern" 
                className="absolute object-cover w-min h-screen" 
            />
            <section className="relative flex justify-end min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="home-name cursive leading-snug lg:leading-relaxed md:leading-tight sd:leading-tight min-w-sm md:max-w-lg">
                    Nyob Zoo! I'm Phong and I am a full stack software engineer.
                </h1>
            </section>
        </main>
    )
}