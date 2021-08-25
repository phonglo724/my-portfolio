import React from 'react'
import HmongWoman from "../images/hmong-woman.jpeg";

export default function Home() {
    return (
        <div className="flex flex-col justify-center">
            <div className="home-background min-h-screen">
                <img 
                    src={HmongWoman} 
                    alt="Traditional Hmong Woman" 
                    className="absolute object-cover w-min h-screen invisible md:visible lg:visible" 
                />
                <div className="relative md:text-right sm:text-right">
                    <h1 className="home-name sm:text">Nyob Zoo! I'm <span className="span-color">Phong Lo</span>. I am a full stack software engineer.</h1>
                </div>
            </div>
        </div>
    )
}