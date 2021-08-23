import React from 'react'
import HmongWoman from "../images/hmong-woman.jpeg";

export default function Home() {
    return (
        <div className="grid grid-cols-1 sm:px-9 sm:gap-x-8">
            <main className="home-background min-h-screen">
                <img 
                    src={HmongWoman} 
                    alt="Hmong Pattern" 
                    className="absolute object-cover w-min h-screen" 
                />
            <div className="relative md:text-right sm:text-right">
                <h1 className="home-name sm:px-8 sm:my-14 sm:py-48 md:px-22 md:my-24">Nyob Zoo! I'm <span className="span-color">Phong Lo</span>. I am a full stack software engineer.</h1>
            </div>
            </main>
        </div>
    )
}