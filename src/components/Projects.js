import React from 'react'
import './Project.css'
import Fade from 'react-reveal/Fade';

function Projects() {
    return (
        <div id="backgroundImg" className="pb-6">
            <div className="h-14">
            </div>

            <Fade left duration={3000}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-56 w-1/2 bg-gray-900 border border-gray-200 rounded-xl relative flex transform hover:scale-110 mr-72">
                        <div className="w-3/5 pl-2 pt-1 pr-1 relative">
                            <h1 className="text-xl font-extrabold text-white">Corona Vaccination</h1>
                            <p className="italic text-gray-200 font-serif">Its a website where people can register for vaccination. It will show the data that how many people are vaccinated, active number of cases, number of deaths and some other information.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Java, Springboot, Oracle db, JWT, RestApi, Axios, Bootstrap</span>
                            </div>
                            <div className="absolute bottom-3">
                                <a href="#" className="border-2 text-gray-100 border-gray-100 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Link</a>
                                <a href="#" className="border-2 text-gray-100 border-gray-100 ml-3 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Github Link</a>
                            </div>
                        </div>
                        <div>
                            <img src="/images/coronaVaccine.jpg" className="w-2/5 h-5/6 top-4 mr-6 absolute border-2 border-gray-100" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade right duration={3000}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-56 w-1/2 bg-gray-900 border border-gray-200 rounded-xl relative flex transform hover:scale-110 ml-72">
                        <div className="w-3/5 pl-2 pt-1 pr-1 relative">
                            <h1 className="text-xl font-extrabold text-white">Infosys PhotoGalary</h1>
                            <p className="italic text-gray-200 font-serif">It is a Photo Galary for dispalying images of Infosys Mysore campus.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Bootstrap, Javascript, CSS, HTML</span>
                            </div>
                            <div className="absolute bottom-3">
                                <a href="#" className="border-2 text-gray-100 border-gray-100 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Link</a>
                                <a href="#" className="border-2 text-gray-100 border-gray-100 ml-3 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Github Link</a>
                            </div>
                        </div>
                        <div>
                            <img src="/images/infosys.jpg" className="w-2/5 h-5/6 top-4 mr-6 absolute border-2 border-gray-100" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade left duration={3000} delay={100}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-56 w-1/2 bg-gray-900 border border-gray-200 rounded-xl relative flex transform hover:scale-110 mr-72">
                        <div className="w-3/5 pl-2 pt-1 pr-1 relative">
                            <h1 className="text-xl font-extrabold text-white">Mini Flipkart</h1>
                            <p className="italic text-gray-200 font-serif">Mini version of Filpkart that implements login logout compmonents and also adding and removing items from cart. Showing and disabling the add to cart if the item is out of stock.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Javascript, Bootstrap, CSS, HTML, Local Storage, React Router</span>
                            </div>
                            <div className="absolute bottom-3">
                                <a href="#" className="border-2 text-gray-100 border-gray-100 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Link</a>
                                <a href="#" className="border-2 text-gray-100 border-gray-100 ml-3 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Github Link</a>
                            </div>
                        </div>
                        <div>
                            <img src="/images/miniflipkart.jpg" className="w-2/5 h-5/6 top-4 mr-6 absolute border-2 border-gray-100" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade right duration={3000} delay={100}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-56 w-1/2 bg-gray-900 border border-gray-200 rounded-xl relative flex transform hover:scale-110 ml-72">
                        <div className="w-3/5 pl-2 pt-1 pr-1 relative">
                            <h1 className="text-xl font-extrabold text-white">Store</h1>
                            <p className="italic text-gray-200 font-serif">A simple application for buying items and showing the number of items present. This application makes use of Redux.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Redux, Hooks, Javascript, CSS, HTML</span>
                            </div>
                            <div className="absolute bottom-3">
                                <a href="#" className="border-2 text-gray-100 border-gray-100 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Link</a>
                                <a href="#" className="border-2 text-gray-100 border-gray-100 ml-3 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Github Link</a>
                            </div>
                        </div>
                        <div>
                            <img src="/images/store.jpg" className="w-2/5 h-5/6 top-4 mr-6 absolute border-2 border-gray-100" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade left duration={3000} delay={100}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-56 w-1/2 bg-gray-900 border border-gray-200 rounded-xl relative flex transform hover:scale-110 mr-72">
                        <div className="w-3/5 pl-2 pt-1 pr-1 relative">
                            <h1 className="text-xl font-extrabold text-white">Invitation</h1>
                            <p className="italic text-gray-200 font-serif">It shows the number of invitation you received. There is a color coding for the invitations which user has read. It aslo contains login logout components.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Bootstrap, Javascript, CSS, HTML</span>
                            </div>
                            <div className="absolute bottom-3">
                                <a href="#" className="border-2 text-gray-100 border-gray-100 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Link</a>
                                <a href="#" className="border-2 text-gray-100 border-gray-100 ml-3 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Github Link</a>
                            </div>
                        </div>
                        <div>
                            <img src="/images/invitation.jpg" className="w-2/5 h-5/6 top-4 mr-6 absolute border-2 border-gray-100" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade right duration={3000} delay={100}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-56 w-1/2 bg-gray-900 border border-gray-200 rounded-xl relative flex transform hover:scale-110 ml-72">
                        <div className="w-3/5 pl-2 pt-1 pr-1 relative">
                            <h1 className="text-xl font-extrabold text-white">MoviesBook</h1>
                            <p className="italic text-gray-200 font-serif">Its a website where we can like, rate, add, delete and do many things with the list of movies displayed. It contains searching, filtering, sorting and pagination.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, JWT, lodash, Router, Axios, Bootstrap, Javascript, CSS, HTML</span>
                            </div>
                            <div className="absolute bottom-3">
                                <a href="#" className="border-2 text-gray-100 border-gray-100 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Link</a>
                                <a href="#" className="border-2 text-gray-100 border-gray-100 ml-3 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Github Link</a>
                            </div>
                        </div>
                        <div>
                            <img src="/images/movies.jpg" className="w-2/5 h-5/6 top-4 mr-6 absolute border-2 border-gray-100" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade left duration={3000} delay={100}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-56 w-1/2 bg-gray-900 border border-gray-200 rounded-xl relative flex transform hover:scale-110 mr-72">
                        <div className="w-3/5 pl-2 pt-1 pr-1 relative">
                            <h1 className="text-xl font-extrabold text-white">Calculator</h1>
                            <p className="italic text-gray-200 font-serif">A simple calculator that performs basic calculations and also displays the history.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Javascript, CSS, HTML, local Storage</span>
                            </div>
                            <div className="absolute bottom-3">
                                <a href="#" className="border-2 text-gray-100 border-gray-100 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Link</a>
                                <a href="#" className="border-2 text-gray-100 border-gray-100 ml-3 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Github Link</a>
                            </div>
                        </div>
                        <div>
                            <img src="/images/calculator.jpg" className="w-2/5 h-5/6 top-4 mr-6 absolute border-2 border-gray-100" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade right duration={3000} delay={100}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-56 w-1/2 bg-gray-900 border border-gray-200 rounded-xl relative flex transform hover:scale-110 ml-72">
                        <div className="w-3/5 pl-2 pt-1 pr-1 relative">
                            <h1 className="text-xl font-extrabold text-white">GithubFilter</h1>
                            <p className="italic text-gray-200 font-serif">This application is basicaly for searching that what all projects are present in github repository of a particular person.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Javascript, HTML, CSS</span>
                            </div>
                            <div className="absolute bottom-3">
                                <a href="#" className="border-2 text-gray-100 border-gray-100 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Link</a>
                                <a href="#" className="border-2 text-gray-100 border-gray-100 ml-3 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Github Link</a>
                            </div>
                        </div>
                        <div>
                            <img src="/images/githubFilter.jpg" className="w-2/5 h-5/6 top-4 mr-6 absolute border-2 border-gray-100" />
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade left duration={3000} delay={100}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-56 w-1/2 bg-gray-900 border border-gray-200 rounded-xl relative flex transform hover:scale-110 mr-72">
                        <div className="w-3/5 pl-2 pt-1 pr-1 relative">
                            <h1 className="text-xl font-extrabold text-white">Contact List</h1>
                            <p className="italic text-gray-200 font-serif">Displays contact list, where we can add and remove person from favourites and can also do sorting.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Javascript, HTML, CSS</span>
                            </div>
                            <div className="absolute bottom-3">
                                <a href="#" className="border-2 text-gray-100 border-gray-100 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Link</a>
                                <a href="#" className="border-2 text-gray-100 border-gray-100 ml-3 pt-1 pb-1 pl-2 pr-3 font-bold rounded-md hover:bg-gray-100 hover:text-gray-900" >Github Link</a>
                            </div>
                        </div>
                        <div>
                            <img src="/images/contactList.jpg" className="w-2/5 h-5/6 top-4 mr-6 absolute border-2 border-gray-100" />
                        </div>
                    </div>
                </div>
            </Fade>

        </div>
    )
}

export default Projects
