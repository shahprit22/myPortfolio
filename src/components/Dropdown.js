import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {SiIndeed} from 'react-icons/si'
import naukri from '../images/naukri.png'

function Dropdown({isOpen}) {
    return (
        <>
            {!isOpen?
            <div className="py-2 bg-gray-200">
                <div className="h-14"></div>
                <div className="flex flex-col items-center space-y-2 md:hidden">
                    <div><a className="flex items-baseline space-x-2" href="https://www.linkedin.com/in/prit-shah" target="_blank" ><span className="pr-2 pt-1"><FaLinkedin /></span>Linkedin</a></div>
                    <div><a className="flex items-baseline space-x-2" href="#"><span className="pr-2 pt-1"><img src={naukri} style={{width: 15}} /></span>Naukri</a></div>
                    <div><a className="flex items-baseline space-x-2" href="https://my.indeed.com/p/8ba6l77" target="_blank" ><span className="pr-2 pt-1"><SiIndeed /></span>Indeed</a></div>
                </div>
            </div> :
            <></>}
        </>
    )
}

export default Dropdown
