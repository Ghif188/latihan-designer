import React from "react"
import Bg from "../assets/bg.jpg"
import Profile from "../assets/foto-profile.JPG"
import Service1 from "../assets/service-image-1.png"
import Service2 from "../assets/service-image-2.png"
import Service3 from "../assets/service-image-3.jpg"
import Work1 from "../assets/work-section-1.JPG"
import Work2 from "../assets/work-section-2.jpg"
import Work3 from "../assets/work-section-3.jpg"
import Work4 from "../assets/work-section-4.jpg"
export default function Dashboard() {
    return (
        <React.Fragment>
            <div className=" antialiased text-gray-600">
                <section className="antialiased w-full h-screen text-gray-600">
                    <div className="w-full flex justify-center items-center h-full">
                        <div className="absolute h-full w-full">
                            <div className="h-1/2 w-full bg-bottom" style={{ backgroundImage: `url(${Bg})` }} />
                            <div className="h-1/2 w-full antialiased space-x-10 flex justify-center p-10 items-end">
                                <a className="h-15 uppercase font-bold" href="#services">Services</a>
                                <a className="h-15 uppercase font-bold" href="#work">Work</a>
                                <a className="h-15 uppercase font-bold" href="#contact">Contact</a>
                            </div>
                        </div>
                        <div className="z-10 w-7/12 flex items-center h-2/5 relative">
                            <div className="absolute rounded-xl -rotate-6 h-full shadow-md w-full bg-gradient-to-r from-blue-500 to-red-500"></div>
                            <div className="relative flex rounded-xl items-center shadow-lg py-20 bg-white h-full w-full">
                                <div className="w-2/3 pl-10 h-full">
                                    <div className="h-1/2">
                                        <p className="mb-1 text-gray-500 text-xl">
                                            Hello I Am
                                        </p>
                                        <p className="text-2xl font-semibold">
                                            Ghifari Raya Ammarkahfi
                                        </p>
                                    </div>
                                    <div className="h-1/2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur harum, amet eos, excepturi praesentium adipisci id aliquam facere quos voluptatibus nostrum quod. Autem et id quisquam, ipsum architecto doloribus?
                                    </div>
                                </div>
                                <img src={Profile} alt="" className="rounded-full h-56 w-56 shadow-xl " />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-200 p-10">
                    <div className="text-center w-full text-5xl mb-10 text-gray-600 font-bold p-10">
                        Services
                        <div className=" text-2xl mt-2 font-light text-gray-400 capitalize">
                            Here's what i offer
                        </div>
                    </div>
                    <div className="items-center  pb-10 h-full justify-center space-x-20 flex">
                        <div style={{ width: `23%` }} className="relative flex">
                            <div className="absolute rounded-xl -rotate-6 h-full shadow-md w-full bg-gradient-to-r from-blue-500 to-red-500"></div>
                            <div className="relative flex rounded-xl items-center shadow-lg bg-white h-full w-full">
                                <div className="w-full">
                                    <div className="h-1/2 w-full">
                                        <img src={Service1} className="w-full h-52 rounded-t-xl"></img>
                                    </div>
                                    <div className="h-1/2 px-10 py-5 text-gray-500 font-semibold">
                                        <p className="text-2xl text-center font-bold text-gray-600 mb-3">Responsive Website</p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur harum, amet eos, excepturi praesentium adipisci id aliquam facere quos voluptatibus nostrum quod. Autem et id quisquam, ipsum architecto doloribus?
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: `23%` }} className="relative flex">
                            <div className="absolute rounded-xl -rotate-6 h-full shadow-md w-full bg-gradient-to-r from-blue-500 to-red-500"></div>
                            <div className="relative flex rounded-xl items-center shadow-lg bg-white h-full w-full">
                                <div className="w-full">
                                    <div className="h-1/2 w-full rounded-t-xl bg-blue-300">
                                        <img src={Service2} className="w-full h-52"></img>
                                    </div>
                                    <div className="h-1/2 px-10 py-5 text-gray-500 font-semibold">
                                        <p className="text-2xl text-center font-bold text-gray-600 mb-3">Responsive Website</p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur harum, amet eos, excepturi praesentium adipisci id aliquam facere quos voluptatibus nostrum quod. Autem et id quisquam, ipsum architecto doloribus?
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: `23%` }} className="relative flex">
                            <div className="absolute rounded-xl -rotate-6 h-full shadow-md w-full bg-gradient-to-r from-blue-500 to-red-500"></div>
                            <div className="relative flex rounded-xl items-center shadow-lg bg-white h-full w-full">
                                <div className="w-full">
                                    <div className="h-1/2 w-full">
                                        <img src={Service3} className="w-full h-52 rounded-t-xl"></img>
                                    </div>
                                    <div className="h-1/2 px-10 py-5 text-gray-500 font-semibold">
                                        <p className="text-2xl text-center font-bold text-gray-600 mb-3">Responsive Website</p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur harum, amet eos, excepturi praesentium adipisci id aliquam facere quos voluptatibus nostrum quod. Autem et id quisquam, ipsum architecto doloribus?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full p-10">
                    <div className="text-center p-10 text-5xl font-bold">
                        Work
                        <p className="text-2xl mt-2 font-light text-gray-400 capitalize">Here's my Portfolio</p>
                    </div>
                    <div className="w-full px-40 py-5 grid mb-5 space-x-20 grid-cols-8">
                        <div className="shadow-sm rounded-lg shadow-gray-300 col-span-5">
                            <img src={Work1} className="w-full h-1/2 rounded-t-lg"></img>
                            <div className="px-10 pt-10">
                                <p className="text-2xl font-semibold pb-5">Work Title</p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laudantium voluptatem distinctio, cum aliquid assumenda explicabo, incidunt quo tenetur eum veniam inventore similique quibusdam consequatur odio, hic omnis animi voluptas!
                                <p><button className="mt-5 px-4 py-2 bg-gradient-to-r shadow-md shadow-sky-200 text-white rounded-lg from-sky-600 to-blue-500">View More</button>
                                </p>
                            </div>
                        </div>
                        <div className="shadow-sm rounded-lg shadow-gray-300 col-span-3">
                            <img src={Work2} className="w-full h-1/2 rounded-t-lg"></img>
                            <div className="px-10 pt-10">
                                <p className="text-2xl font-semibold pb-5">Work Title</p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                <p><button className="mt-5 px-4 py-2 bg-gradient-to-r shadow-md shadow-sky-200 text-white rounded-lg from-sky-600 to-blue-500">View More</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-40 py-5 grid mb-5 space-x-20 grid-cols-8">
                        <div className="shadow-sm rounded-lg shadow-gray-300 col-span-3">
                            <img src={Work3} className="w-full h-1/2 rounded-t-lg"></img>
                            <div className="px-10 pt-10">
                                <p className="text-2xl font-semibold pb-5">Work Title</p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                <p><button className="mt-5 px-4 py-2 bg-gradient-to-r shadow-md shadow-sky-200 text-white rounded-lg from-sky-600 to-blue-500">View More</button>
                                </p>
                            </div>
                        </div>
                        <div className="shadow-sm rounded-lg shadow-gray-300 col-span-5">
                            <img src={Work4} className="w-full h-1/2 rounded-t-lg"></img>
                            <div className="px-10 pt-10">
                                <p className="text-2xl font-semibold pb-5">Work Title</p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laudantium voluptatem distinctio, cum aliquid assumenda explicabo, incidunt quo tenetur eum veniam inventore similique quibusdam consequatur odio, hic omnis animi voluptas!
                                <p><button className="mt-5 px-4 py-2 bg-gradient-to-r shadow-md shadow-sky-200 text-white rounded-lg from-sky-600 to-blue-500">View More</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full bg-gray-100 pb-28">
                    <div className="text-center w-full text-5xl mb-10 text-gray-600 font-bold p-10">
                        Contact
                        <p className="text-2xl mt-2 font-light text-gray-400 capitalize">let's get in touch</p>
                    </div>
                    <div className="w-full flex justify-center items-center py-10">
                        <div className="flex relative w-4/6">
                            <div className="absolute rounded-xl rotate-6 h-full shadow-md w-full bg-gradient-to-r from-blue-500 to-red-500"></div>
                            <div className="relative flex rounded-lg items-center shadow-lg bg-white h-full w-full">
                                <div className="w-full space-y-5 p-10">
                                    <div className="h-full space-x-5 flex">
                                        <input type="text" placeholder="Name" className="border h-10 w-1/2 px-5 rounded-lg border-gray-200"/>
                                        <input type="text" placeholder="Email" className="border h-10 w-1/2 px-5 rounded-lg border-gray-200" />
                                    </div>
                                    <input type="text" placeholder="Subject" className="border h-10 w-full px-5 rounded-lg border-gray-200" />
                                    <textarea name="" id="" className="w-full border px-5 rounded-lg border-gray-200" rows="10"/>
                                    <button className="mt-5 px-4 py-2 bg-gradient-to-r shadow-md shadow-sky-200 text-white w-full rounded-lg from-sky-600 to-blue-500">View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}