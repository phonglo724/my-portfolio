import React from 'react'
import HmongWoman from "../images/hmong-woman.jpeg";

export default function Home() {
    return (
        <div className="grid grid-cols-1 sm:px-9 sm:gap-x-8">
            <main className="home-background min-h-screen">
                <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-2">
                    <div className="w-full grid grid-cols-2 grid-rows-2 gap-2">
                        <div className="relative col-span-2 row-span-2 md:col-span-2">
                            <img 
                                src={HmongWoman} 
                                alt="Hmong Pattern" 
                                className="absolute object-cover w-min h-screen" 
                            />
                        </div>
                    </div>
                </div>
            <div className="relative grid md:col-span-2 justify-end lg:pt-32 px-8">
                <h1 className="home-name sm:px-8 sm:my-14 sm:py-48 md:px-22 md:my-24 md:py-32">Nyob Zoo! I'm <span className="span-color">Phong Lo</span>. I am a full stack software engineer.</h1>
            </div>
            </main>
        </div>
    )
}