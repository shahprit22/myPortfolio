import React from 'react'
import './Project.css'
import Fade from 'react-reveal/Fade';
import coronaVaccine from '../images/coronaVaccine.JPG'
import infosys from '../images/infosys.JPG'
import miniflipkart from '../images/miniflipkart.JPG'
import store from '../images/store.JPG'
import invitation from '../images/invitation.JPG'
import githubFilter from '../images/githubFilter.JPG'
import movies from '../images/movies.JPG'
import calculator from '../images/calculator.JPG'
import contactList from '../images/contactList.JPG'


function Projects() {
    return (
        <div id="backgroundImg" className="pb-6">
            <div className="h-14">
            </div>

            <Fade left duration={3000}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-card w-80 bg-gray-900 border border-gray-200 rounded-xl relative flex flex-col transform hover:scale-110 lg:flex-row-reverse lg:h-60 lg:w-1/2 lg:mr-72 xl:h-56">
                        <div className="h-48 my-2 mx-1 border-2 flex border-gray-100 lg:top-4 lg:w-2/5 lg:h-5/6 lg:right-0">
                            <img src={coronaVaccine} className="w-full" />
                        </div>
                        <div className="w-full pl-2 pr-1 lg:w-3/5 lg:pt-1">
                            <h1 className="text-xl font-extrabold text-white">Corona Vaccination</h1>
                            <p className="italic text-gray-200 font-serif">Its a website where people can register for vaccination. It will show the data that how many people are vaccinated, active number of cases, number of deaths and some other information.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Java, Springboot, Oracle db, JWT, RestApi, Axios, Bootstrap</span>
                            </div>
                            <div className="absolute bottom-2">
                                <a href="#" className="link" >Link</a>
                                <a href="#" className="githublink" >Github Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade right duration={3000}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-card w-80 bg-gray-900 border border-gray-200 rounded-xl relative flex flex-col transform hover:scale-110 lg:flex-row-reverse lg:h-60 lg:w-1/2 lg:ml-72 xl:h-56">
                        <div className="h-48 my-2 mx-1 border-2 flex border-gray-100 lg:top-4 lg:w-2/5 lg:h-5/6 lg:right-0">
                            <img src={infosys} className="w-full" />
                        </div>
                        <div className="w-full pl-2 pr-1 lg:w-3/5 lg:pt-1">
                            <h1 className="text-xl font-extrabold text-white">Infosys PhotoGalary</h1>
                            <p className="italic text-gray-200 font-serif">It is a Photo Galary for dispalying images of Infosys Mysore campus.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Bootstrap, Javascript, CSS, HTML</span>
                            </div>
                            <div className="absolute bottom-2">
                                <a href="#" className="link" >Link</a>
                                <a href="#" className="githublink" >Github Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade left duration={3000}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-card w-80 bg-gray-900 border border-gray-200 rounded-xl relative flex flex-col transform hover:scale-110 lg:flex-row-reverse lg:h-60 lg:w-1/2 lg:mr-72 xl:h-56">
                        <div className="h-48 my-2 mx-1 border-2 flex border-gray-100 lg:top-4 lg:w-2/5 lg:h-5/6 lg:right-0">
                            <img src={miniflipkart} className="w-full" />
                        </div>
                        <div className="w-full pl-2 pr-1 lg:w-3/5 lg:pt-1">
                            <h1 className="text-xl font-extrabold text-white">Mini Flipkart</h1>
                            <p className="italic text-gray-200 font-serif">Mini version of Filpkart that implements login logout compmonents and also adding and removing items from cart. Showing and disabling the add to cart if the item is out of stock.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Javascript, Bootstrap, CSS, HTML, Local Storage, React Router</span>
                            </div>
                            <div className="absolute bottom-2">
                                <a href="#" className="link" >Link</a>
                                <a href="#" className="githublink" >Github Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            
            <Fade right duration={3000}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-card w-80 bg-gray-900 border border-gray-200 rounded-xl relative flex flex-col transform hover:scale-110 lg:flex-row-reverse lg:h-60 lg:w-1/2 lg:ml-72 xl:h-56">
                        <div className="h-48 my-2 mx-1 border-2 flex border-gray-100 lg:top-4 lg:w-2/5 lg:h-5/6 lg:right-0">
                            <img src={store} className="w-full" />
                        </div>
                        <div className="w-full pl-2 pr-1 lg:w-3/5 lg:pt-1">
                            <h1 className="text-xl font-extrabold text-white">Store</h1>
                            <p className="italic text-gray-200 font-serif">A simple application for buying items and showing the number of items present. This application makes use of Redux.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Redux, Hooks, Javascript, CSS, HTML</span>
                            </div>
                            <div className="absolute bottom-2">
                                <a href="#" className="link" >Link</a>
                                <a href="#" className="githublink" >Github Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            
            <Fade left duration={3000}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-card w-80 bg-gray-900 border border-gray-200 rounded-xl relative flex flex-col transform hover:scale-110 lg:flex-row-reverse lg:h-60 lg:w-1/2 lg:mr-72 xl:h-56">
                        <div className="h-48 my-2 mx-1 border-2 flex border-gray-100 lg:top-4 lg:w-2/5 lg:h-5/6 lg:right-0">
                            <img src={invitation} className="w-full" />
                        </div>
                        <div className="w-full pl-2 pr-1 lg:w-3/5 lg:pt-1">
                            <h1 className="text-xl font-extrabold text-white">Invitations</h1>
                            <p className="italic text-gray-200 font-serif">It shows the number of invitation you received. There is a color coding for the invitations which user has read. It aslo contains login logout components.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Bootstrap, Javascript, CSS, HTML</span>
                            </div>
                            <div className="absolute bottom-2">
                                <a href="#" className="link" >Link</a>
                                <a href="#" className="githublink" >Github Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade right duration={3000}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-card w-80 bg-gray-900 border border-gray-200 rounded-xl relative flex flex-col transform hover:scale-110 lg:flex-row-reverse lg:h-60 lg:w-1/2 lg:ml-72 xl:h-56">
                        <div className="h-48 my-2 mx-1 border-2 flex border-gray-100 lg:top-4 lg:w-2/5 lg:h-5/6 lg:right-0">
                            <img src={movies} className="w-full" />
                        </div>
                        <div className="w-full pl-2 pr-1 lg:w-3/5 lg:pt-1">
                            <h1 className="text-xl font-extrabold text-white">MoviesBook</h1>
                            <p className="italic text-gray-200 font-serif">Its a website where we can like, rate, add, delete and do many things with the list of movies displayed. It contains searching, filtering, sorting and pagination.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, JWT, lodash, Router, Axios, Bootstrap, Javascript, CSS, HTML</span>
                            </div>
                            <div className="absolute bottom-2">
                                <a href="#" className="link" >Link</a>
                                <a href="#" className="githublink" >Github Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            
            <Fade left duration={3000}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-card w-80 bg-gray-900 border border-gray-200 rounded-xl relative flex flex-col transform hover:scale-110 lg:flex-row-reverse lg:h-60 lg:w-1/2 lg:mr-72 xl:h-56">
                        <div className="h-48 my-2 mx-1 border-2 flex border-gray-100 lg:top-4 lg:w-2/5 lg:h-5/6 lg:right-0">
                            <img src={calculator} className="w-full" />
                        </div>
                        <div className="w-full pl-2 pr-1 lg:w-3/5 lg:pt-1">
                            <h1 className="text-xl font-extrabold text-white">Calculator</h1>
                            <p className="italic text-gray-200 font-serif">A simple calculator that performs basic calculations and also displays the history.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Javascript, CSS, HTML, local Storage</span>
                            </div>
                            <div className="absolute bottom-2">
                                <a href="#" className="link" >Link</a>
                                <a href="#" className="githublink" >Github Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade right duration={3000}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-card w-80 bg-gray-900 border border-gray-200 rounded-xl relative flex flex-col transform hover:scale-110 lg:flex-row-reverse lg:h-60 lg:w-1/2 lg:ml-72 xl:h-56">
                        <div className="h-48 my-2 mx-1 border-2 flex border-gray-100 lg:top-4 lg:w-2/5 lg:h-5/6 lg:right-0">
                            <img src={githubFilter} className="w-full" />
                        </div>
                        <div className="w-full pl-2 pr-1 lg:w-3/5 lg:pt-1">
                            <h1 className="text-xl font-extrabold text-white">GithubFilter</h1>
                            <p className="italic text-gray-200 font-serif">This application is basicaly for searching that what all projects are present in github repository of a particular person.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Javascript, HTML, CSS</span>
                            </div>
                            <div className="absolute bottom-2">
                                <a href="#" className="link" >Link</a>
                                <a href="#" className="githublink" >Github Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade left duration={3000}>
                <div className="flex flex-col items-center mt-6">
                    <div className="h-card w-80 bg-gray-900 border border-gray-200 rounded-xl relative flex flex-col transform hover:scale-110 lg:flex-row-reverse lg:h-60 lg:w-1/2 lg:mr-72 xl:h-56">
                        <div className="h-48 my-2 mx-1 border-2 flex border-gray-100 lg:top-4 lg:w-2/5 lg:h-5/6 lg:right-0">
                            <img src={contactList}  />
                        </div>
                        <div className="w-full pl-2 pr-1 lg:w-3/5 lg:pt-1">
                            <h1 className="text-xl font-extrabold text-white">Contact List</h1>
                            <p className="italic text-gray-200 font-serif">Displays contact list, where we can add and remove person from favourites and can also do sorting.</p>
                            <div>
                                <span className="text-gray-100 text-base font-bold">Used: </span>
                                <span className="text-gray-100">React, Javascript, HTML, CSS</span>
                            </div>
                            <div className="absolute bottom-2">
                                <a href="#" className="link" >Link</a>
                                <a href="#" className="githublink" >Github Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

        </div>
    )
}

export default Projects
