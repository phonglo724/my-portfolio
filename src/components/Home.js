import React from 'react'
import HmongWoman from "../images/hmong-woman.jpeg";

export default function Home() {
    return (
        <div className="w-screen">
            <img 
                src={HmongWoman} 
                alt="Hmong Pattern"
                className=""
            />
        <div className="">
            <h1 className="home-name sm:px-8 sm:my-14 sm:py-48 md:px-22 md:my-24 md:py-32">Nyob Zoo! I'm <span className="span-color">Phong Lo</span>. I am a full stack software engineer.</h1>
        </div>
        </div>
    )
}