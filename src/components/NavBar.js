import React from 'react';
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <div>
            <div className="bg-gray-500 flex items-center justify-between mx-auto">
                <NavLink 
                    to="/" 
                    exact 
                    activeClassName="text-"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-blue-900 hover:text-gray-300 text-sm md:text-4xl font-bold cursive tracking-widest"
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/about"
                    className="inflex-flex items-center py-6 px-3 my-3 text-black-100 hover:text-gray-600 text-sm md:text-2xl font-bold cursive tracking-widest"
                >
                    About Me
                </NavLink>
                <NavLink 
                    to="/project"
                    className="inflex-flex items-center py-6 px-3 my-3 text-black-100 hover:text-gray-600 text-sm md:text-2xl font-bold cursive tracking-widest"
                >
                    My Projects
                </NavLink>
                <NavLink 
                    to="/blog"
                    className="inflex-flex items-center py-6 px-3 my-3 text-black-100 hover:text-gray-600 text-sm md:text-2xl font-bold cursive tracking-widest"
                >
                    My Blogs
                </NavLink>
                <NavLink 
                    to="/resume"
                    className="inflex-flex items-center py-6 px-3 my-3 text-black-100 hover:text-gray-600 text-sm md:text-2xl font-bold cursive tracking-widest"
                >
                    Resume
                </NavLink>
                <SocialIcon 
                    url="https://linkedin.com/in/phong-lo" 
                    className="mr-1" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width:35 }} 
                />
                <SocialIcon 
                    url="https://github.com/phonglo724" 
                    className="mr-1" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width:35 }} 
                />
                <SocialIcon 
                    url="https://twitter.com/PhongLo13" 
                    className="mr-1" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width:35 }} 
                />
            </div>
        </div>
    )
}