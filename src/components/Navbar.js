import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebook, FaLinkedin} from 'react-icons/fa'
import {SiIndeed} from 'react-icons/si'

function Navbar() {
    return (
        <div className="bg-gray-200 h-14 fixed flex justify-between w-full z-10">
            <div  className="text-lg font-serif font-bold italic space-x-4 flex items-center pl-3">
                <Link to="/" className="transform hover:scale-125 active:bg-gray-700 active:text-white">Home</Link>
                <Link to="/projects" className="transform hover:scale-125  active:bg-gray-700 active:text-white">Projects</Link>
                <Link to="/contact" className="transform hover:scale-125 active:bg-gray-700 active:text-white">Contact</Link>
            </div>
            <div className="flex space-x-3 items-center pr-4">
                <a href="https://www.linkedin.com/in/prit-shah" target="_blank" className="text-2xl font-extrabold transform hover:scale-125 active:bg-gray-400"><FaLinkedin /></a>
                <a href="#" className="text-2xl font-extrabold transform hover:scale-125 active:bg-gray-400"><img src="/images/naukri.png" style={{width: 25}} /></a>
                <a href="https://my.indeed.com/p/8ba6l77" target="_blank" className="text-2xl font-extrabold transform hover:scale-125 active:bg-gray-400"><SiIndeed /></a>  
            </div>
            
        </div>
    )
}

export default Navbar
