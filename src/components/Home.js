import React from 'react'
import HmongWoman from "../images/hmong-woman.jpeg";

export default function Home() {
    return (
        <main className="home-background">
            <img 
                src={HmongWoman} 
                alt="Hmong Pattern" 
                className="absolute bg-cover bg-no-repeat w-min h-screen" 
            />
            <section className="flex justify-end min-h-screen lg:pt-64">
                <h1 className="home-name cursive max-w-sm md:max-w-lg">
                    Nyob Zoo! I'm Phong and I am a full stack software engineer.
                </h1>
            </section>
        </main>
    )
}