import React from 'react'
import HmongWoman from "../images/hmong-woman.jpeg";

export default function Home() {
    return (
        <div className="flex flex-col justify-center">
            <div className="home-background min-h-screen">
                <img 
                    src={HmongWoman} 
                    alt="Traditional Hmong Woman" 
                    className="absolute object-cover w-min h-screen visible md:visible lg:visible" 
                />
                <div className="relative mx-64 my-64 md:-mx-28 md:my-80 lg:mx-40 lg:-my-60 text-right sm:text-right md:text-right lg:text-right">
                    <p className="home-name text-lg md:text-xl lg:text-2xl">Nyob Zoo! I'm <span className="span-color">Phong Lo</span>. I am a full stack software engineer.</p>
                </div>
            </div>
        </div>
    )
}