import React, { useEffect, useState } from 'react'
import './Home.css'
import skills from '../constants.json'
import Fade from 'react-reveal/Fade';
import {IoLocationOutline} from 'react-icons/io5'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'
import {SiIndeed} from 'react-icons/si'

function Home() {
    // const initialState = []
    const [infySkills, setinfySkills] = useState([])
    const [projects, setprojects] = useState([])
    const [frontEndSkill, setfrontEndSkill] = useState([])
    const [backEndSkill, setbackEndSkill] = useState([])
    const [achievements, setAchievements] = useState([])
    // const [portfolio, setportfolio] = useState('World')

    useEffect(() => {
        setinfySkills(skills.Infosys_skills)
        setprojects(skills.Projects)
        setfrontEndSkill(skills.FrontendSkills)
        setbackEndSkill(skills['Backend Skills'])
        setAchievements(skills.Achievements)
    }, [])

    // setTimeout(()=> {
    //    setportfolio('PortFolio')
    // },4000)
    return (
        <div className="flex flex-col">
            <div className="text-red-800 text-4xl space-y-4 font-serif font-extrabold flex flex-col justify-center bg-gradient-to-r from-blue-100 via-green-200 to-blue-100 h-96">
                <h1 className="self-center" id="welcome">Hello,</h1>
                <h1 className="self-center" id="welcome">I am Prit Shah and</h1>
                <h1 className="self-center" id="welcome">I welcome you to my</h1>
                <h1 className="self-center" id="welcome">Portfolio</h1>
            </div>
                
            <div className="bg-gradient-to-r from-blue-100 via-green-200 to-blue-100 h-auto pb-4">
                <div className="bg-gradient-to-r from-yellow-200 via-red-200 to-yellow-200 flex flex-col justify-center h-11"> 
                    <h1 className="ml-3 text-2xl text-indigo-600 font-serif font-bold" id="exp">EXPERIENCE</h1>
                </div>
                <div className="ml-3">
                    <h2 className="font-semibold m-1 text-lg text-red-600" id="infy">Infosys (Aug 2019-Present)</h2>
                    <p className="italic" id="infy">I started by journey at Infosys with bug fixes and now I am developing new applications, framework, etc
                        in <span className="font-semibold"> Java and React </span>
                    </p>
                    <ul className="ml-4 list-disc mt-1">
                        {infySkills.map(skill => 
                            <li id="infy" key={skill}>{skill}</li>
                        )}
                    </ul>
                </div>        
            </div>
            <div className="bg-gradient-to-r from-blue-100 via-green-200 to-blue-100 h-auto pb-4">
                <div className="bg-gradient-to-r from-yellow-200 via-red-200 to-yellow-200 flex flex-col justify-center h-11"> 
                        <h1 className="pl-3 text-2xl text-indigo-600 font-serif font-bold flex">PROJECTS</h1>
                </div>
                <div className="ml-3">
                    {
                        projects.map(project => Object.entries(project).map(([key, value])=>
                        <Fade down delay={200} duration={2000}>
                            <div key={key}>
                                <h1 className="font-semibold m-1 text-lg text-red-600">{key}</h1>
                                <p className="italic">{value}</p>
                            </div>  
                        </Fade>  
                        )
                    )}
                </div>
            </div>
            <div className="bg-gradient-to-r from-blue-100 via-green-200 to-blue-100 h-auto pb-4">
                <div className="bg-gradient-to-r from-yellow-200 via-red-200 to-yellow-200 flex flex-col justify-center h-11">
                    <h1 className="pl-3 text-2xl text-indigo-600 font-serif font-bold">SKILLS</h1>
                </div>
                <div className="flex">
                    <div className="ml-3 w-1/2">
                            <div className="font-semibold m-1 text-lg text-red-600">FrontEnd Skills</div>
                        <ul className="ml-4 list-disc mt-1">
                            {frontEndSkill.map(skill =>
                                <Fade left delay={200} duration={2000}>
                                    <li key={skill}>{skill}</li>
                                </Fade>
                            )}
                        </ul>
                    </div> 
                    <div>
                        <h1 className="font-semibold m-1 text-lg text-red-600">BackEnd Skills</h1>
                        <ul className="ml-4 list-disc mt-1">
                            {backEndSkill.map(skill =>
                                <Fade left delay={200} duration={2000}>
                                    <li key={skill}>{skill}</li>
                                </Fade>
                            )}
                        </ul> 
                    </div>
                </div>        
            </div>  
            <div className="bg-gradient-to-r from-blue-100 via-green-200 to-blue-100 h-auto pb-4">
                <div className="bg-gradient-to-r from-yellow-200 via-red-200 to-yellow-200 flex flex-col justify-center h-11"> 
                        <h1 className="pl-3 text-2xl text-indigo-600 font-serif font-bold flex">ACHIEVEMENTS</h1>
                </div>
                <div className="ml-3 mt-1 mb-1">
                    {
                        achievements.map(project => Object.entries(project).map(([key, value])=>
                        <Fade down delay={200} duration={2000}>
                            <div key={key}>
                                <h1 className="font-semibold ml-1 text-lg text-red-600">{key}</h1>
                                {value.map(item => 
                                    <p className="ml-2" key={item}>{item}</p>    
                                )}
                            </div>  
                        </Fade>  
                        )
                    )}
                </div>
            </div>
            <div className="flex justify-around bg-gray-700 text-gray-50 pt-4 pb-4">
                <div>
                    <h1 className="text-xl text-center font-bold">About Me</h1>
                    <p className="italic w-96">I am passionate about learning and working in new technologies. I have been woking in React and Java since 2 years and have aquire profound knowledge in both. I also keep on learning and upgrading myself with new technologies. If given a chance to work with you I will leave no stone unturned.</p>
                </div>
                <div>
                    <h1 className="text-xl text-center font-bold">Quick Links</h1>
                    <div><a className="flex items-baseline space-x-2" href="https://www.linkedin.com/in/prit-shah" target="_blank" ><span className="pr-2 pt-1"><FaLinkedin /></span>Linkedin</a></div>
                    <div><a className="flex items-baseline space-x-2" href="#"><span className="pr-2 pt-1"><img src="/images/naukri.png" style={{width: 15}} /></span>Naukri</a></div>
                    <div><a className="flex items-baseline space-x-2" href="https://my.indeed.com/p/8ba6l77" target="_blank" ><span className="pr-2 pt-1"><SiIndeed /></span>Indeed</a></div>
                </div>
                <div className="italic">
                    <h1 className="text-xl text-center font-bold">Contact Info</h1>
                    <div className="flex items-baseline">
                        <IoLocationOutline />
                        <div className="ml-1">
                            <p>3, Pritam, Vrundavan Park Sainath Road,</p>
                            <p>Petlad. PinCode: 388450</p>
                            <p>District:Anand, Gujarat.</p>
                        </div>
                    </div>
                    <div className="flex items-baseline">
                        <AiOutlinePhone />
                        <div className="ml-1">
                            <p>+91 9510386671</p>
                        </div>
                    </div>
                    <div className="flex items-baseline">
                        <AiOutlineMail />
                        <div className="ml-2">
                            <p>pritshah@2501@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>         
        </div>    
    )
}

export default Home