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
            <section className="flex justify-end mr-10 min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-2xl cursive home-name">
                    Nyob Zoo! 
                    <br></br> 
                    I'm Phong.
                </h1>
            </section>
        </main>
    )
}