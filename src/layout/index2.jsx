import React from "react"
import Bg1 from "../assets/bg-to.png"
import Bg2 from "../assets/bg-to-2.png"
import Bg3 from "../assets/bg-contact.png"
import Bg4 from "../assets/bg-contact-2.png"
import Bg5 from "../assets/Frame.png"
import Bg6 from "../assets/bg-6.png"
import Orang from "../assets/foto-orang.png"
import Foto1 from "../assets/foto1.png"
import Foto2 from "../assets/foto2.png"
import Foto3 from "../assets/foto3.png"
import Portfolio1 from "../assets/foto-portfolio-1.png"
import Portfolio2 from "../assets/foto-portfolio-2.png"
import Portfolio3 from "../assets/foto-portfolio-3.png"
import Logo1 from "../assets/logo 1.png"
import Logo2 from "../assets/logo 2.png"
import Logo3 from "../assets/logo 3.png"
import Logo4 from "../assets/logo 4.png"
import Logo5 from "../assets/logo 5.png"
import Orang1 from "../assets/Mask.png"
import Orang2 from "../assets/Photo.png"
import { FiMenu, FiArrowRight } from "react-icons/fi"
export default function Tryout() {
    const [menu, setMenu] = React.useState(false)
    return (
        <React.Fragment>
            <div className="h-full sm-max:hidden w-full">
                <section className="h-screen grid grid-cols-12 w-full relative">
                    <div className="col-span-4" style={{ backgroundImage: `url(${Bg1})` }}>
                    </div>
                    <div className="col-span-7">
                        <img src={Orang} className='w-full h-full' alt="" />
                    </div>
                    <div className="bg-gray-700 items-center">
                        <div className="h-full mt-20 text-lg text-white font-semibold space-y-24">
                            <div className="rotate-90 flex  p-5 justify-center my-0 text-4xl">
                                <FiMenu />
                            </div>
                            <div className="rotate-90 px-5 text-center">
                                Home
                            </div>
                            <div className="rotate-90  px-5 text-center">
                                About Me
                            </div>
                            <div className="rotate-90  px-5 text-center">
                                Portfolio
                            </div>
                            <div className="rotate-90  px-5 text-center">
                                Contact
                            </div>
                        </div>
                    </div>
                    <div className="absolute h-full w-full px-32 py-16  z-10">
                        <div className="flex tracking-wide text-white font-semibold text-xl">
                            Lawrence.
                            <h1 className="text-blue-400">me</h1>
                        </div>
                        <div className="w-2/4  mt-44">
                            <div className="tracking-widest text-blue-400 font-semibold text-lg uppercase">
                                Hello guys
                            </div>
                            <div className="text-7xl font-semibold text-white">
                                I'm Lawrence
                            </div>
                            <div className="w-2/3 font-light text-white mt-10">
                                i'm a professional
                                <span className="font-semibold mx-1">Photographer, Videographer, and Storyteller</span>
                                from Indonesia
                            </div>
                            <div className="flex items-center w-2/4 justify-between mt-16">
                                <button className="px-10 py-3 hover:scale-125 duration-500 transform bg-yellow-500 rounded-lg text-white">
                                    Hire Me
                                </button>
                                <p className="flex items-center underline text-white">
                                    View Resume
                                    <FiArrowRight className="ml-1 text-xl" />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="h-full w-full relative">
                    <div className="grid grid-cols-2 px-20 pt-60 pb-96">
                        <div className="col-span-1 flex items-center justify-center space-x-5">
                            <img src={Foto1} alt="" className="mb-20" />
                            <img src={Foto2} alt="" className="mt-20" />
                        </div>
                        <div className="col-span-1 flex items-center pr-10">
                            <div className="space-y-5">
                                <div className=" uppercase text-lg font-semibold tracking-widest text-blue-400">
                                    about me
                                </div>
                                <div className="font-bold tracking-wide text-4xl">
                                    Do You Know Me ?
                                </div>
                                <div className="font-light tracking-wide text-gray-500">
                                    Hello my name is Lawrance Waraweki, im a professional Photographer, Videographer and Storyteller, i have 15 years experienced for work in visual agency. and So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions.
                                </div>
                                <div className="flex">
                                    <div className="flex w-1/2 items-center">
                                        <div className="font-bold text-blue-400 text-4xl mr-3">
                                            15
                                        </div>
                                        <div className="w-1/4 text-sm tracking-wide font-semibold">
                                            Years of Experience.
                                        </div>
                                    </div>
                                    <div className="flex w-1/2 items-center">
                                        <div className="font-bold text-blue-400 text-4xl mr-3">
                                            5
                                        </div>
                                        <div className="w-1/4 text-sm tracking-wide font-semibold">
                                            Satisfied Clients.
                                        </div>
                                    </div>
                                </div>
                                <p className="flex items-center underline pt-10 font-semibold text-yellow-500">
                                    View Resume
                                    <FiArrowRight className="ml-1 text-xl" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between z-10 tracking-wide w-full h-auto px-36 -bottom-40">
                        <div className="w-3/10 bg-white px-5 py-10">
                            <div className="text-2xl mb-8 font-bold flex items-center justify-between">
                                Photography
                                <span class="flex h-10 w-10">
                                    <span class="animate-ping absolute h-10 w-10 rounded-full bg-sky-600 opacity-75"></span>
                                    <span class="relative rounded-full h-10 w-10 bg-sky-700"></span>
                                </span>
                            </div>
                            <div className="font-light text-gray-500">
                                Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to.
                            </div>
                            <div className="font-semibold mt-8">
                                150 Project Completed
                            </div>
                        </div>
                        <div className="w-3/10 bg-white px-5 py-10">
                            <div className="text-2xl mb-8 font-bold flex items-center justify-between">
                                Photography
                                <span class="flex h-10 w-10">
                                    <span class="animate-ping absolute h-10 w-10 rounded-full bg-sky-600 opacity-75"></span>
                                    <span class="relative rounded-full h-10 w-10 bg-sky-700"></span>
                                </span>
                            </div>
                            <div className="font-light text-gray-500">
                                I have hinted that I would often jerk poor Queequeg from between the whale and the ship—where he would occasionally fall, from the incessant.
                            </div>
                            <div className="font-semibold mt-8">
                                150 Project Completed
                            </div>
                        </div>
                        <div className="w-3/10 bg-white px-5 py-10">
                            <div className="text-2xl mb-8 font-bold flex items-center justify-between">
                                Photography
                                <span class="flex h-10 w-10">
                                    <span class="animate-ping absolute h-10 w-10 rounded-full bg-sky-600 opacity-75"></span>
                                    <span class="relative rounded-full h-10 w-10 bg-sky-700"></span>
                                </span>
                            </div>
                            <div className="font-light text-gray-500">
                                In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are.
                            </div>
                            <div className="font-semibold mt-8">
                                150 Project Completed
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full h-full bg-cover relative" style={{ backgroundImage: `url(${Bg2})` }}>
                    <div className="px-56 py-96">
                        <div className="w-full h-full gap-5 grid grid-cols-2">
                            <div className="col-span-1 text-white">
                                <div className="space-y-5">
                                    <div className="text-lg font-semibold tracking-widest uppercase">PORTFOLIO</div>
                                    <div className="w-7/10 text-4xl font-bold">All Creative Works, Selected Projects</div>
                                    <div className="w-6/10 tracking-wide font-light text-lg">
                                        We are able to help you with the latest high tech solutions, thanks to our company culture.
                                    </div>
                                    <p className="flex items-center underline font-semibold tracking-wide text-white">
                                        Explore More
                                        <FiArrowRight className="ml-1 text-xl" />
                                    </p>
                                </div>
                                <img src={Portfolio1} alt="" className=" mt-32" />
                            </div>
                            <div className="col-span-1 space-y-20">
                                <img src={Portfolio2} alt="" />
                                <img src={Portfolio3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-center w-full tracking-wide h-auto -bottom-10">
                        <div className="w-7/10 bg-white rounded-lg p-2 shadow-xl flex items-center justify-between">
                            <img src={Logo1} alt="" />
                            <img src={Logo2} alt="" />
                            <img src={Logo3} alt="" />
                            <img src={Logo4} alt="" />
                            <img src={Logo5} alt="" />
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-center h-full">
                    <div className="w-7/10 pt-64 pb-28 ">
                        <div className="text-xl text-center mb-5 uppercase text-blue-400 tracking-widest font-semibold">
                            Testimonials
                        </div>
                        <div className="text-4xl text-center mb-32 tracking-wide font-bold">
                            What They Say About Us
                        </div>
                        <div className="grid h-auto grid-cols-2 gap-10">
                            <div className="col-span-1 p-3 rounded-lg">
                                <div className="flex mb-5 items-center space-x-5">
                                    <img src={Orang1} alt="" className="h-14 w-14" />
                                    <div className="">
                                        <p className="tracking-wide text-lg font-semibold text-blue-400">Lamone Waraweki</p>
                                        <p>CO-Founder Netarch Studio</p>
                                    </div>
                                </div>
                                <div className=" font-light tracking-wide">
                                    So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuality was now merged in a joint
                                </div>
                            </div>
                            <div className="col-span-1 p-3 rounded-lg">
                                <div className="flex mb-5 space-x-5 items-center">
                                    <img src={Orang2} alt="" className="h-14 w-14" />
                                    <div>
                                        <p className="tracking-wide font-semibold text-lg text-blue-400">Thomas Chavez</p>
                                        <p>Professional Actor</p>
                                    </div>
                                </div>
                                <div className=" font-light tracking-wide">
                                    So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuality was now merged in a joint
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full grid grid-cols-2 h-auto">
                    <div className="col-span-1">
                        <img src={Bg3} alt="" className="w-full" />
                    </div>
                    <div className="col-span-1 flex items-center justify-center" style={{ backgroundImage: `url(${Bg4})` }}>
                        <div className="w-3/4 text-white">
                            <div className="text-xl mb-5 uppercase text-blue-400 tracking-widest font-semibold">
                                Contact Us
                            </div>
                            <div className="text-5xl tracking-wide w-3/4 mb-5 font-bold">
                                Got a Project ? Let's talk.
                            </div>
                            <div className=" w-3/4 text-lg font-light tracking-wide">
                                Challenge us. We want to work with you to create the really cool stuff.
                            </div>
                            <p className="flex items-center underline mt-20 font-semibold text-orange-500">
                                hellolawrance@work.com
                                <FiArrowRight className="ml-1 text-xl" />
                            </p>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-between bg-gray-700 px-52 py-7">
                    <div className="flex tracking-wide text-white font-semibold text-xl">
                        Lawrence.
                        <h1 className="text-blue-400">me</h1>
                    </div>
                    <div className="space-x-10 font-semibold flex text-white">
                        <p>Home</p>
                        <p>About Me</p>
                        <p>Portfolio</p>
                        <p>Contact</p>
                    </div>
                </section>
            </div>
            <div className="relative sm:hidden antialiased w-full h-full">
                <div className={`${menu === true ? "translate-x-0 duration-500" : "translate-x-full duration-500" } transform fixed flex justify-end w-full backdrop-blur-sm h-full z-20 top-0`}>
                    <div className="w-7/10">
                        <div className="w-full h-full bg-gray-700 p-5 text-white font-semibold text-lg space-y-10">
                            <div className="text-4xl" onClick={()=>setMenu(!menu)}>
                                <FiMenu />
                            </div>
                            <p className="pb-2 border-b-white border-b-2">Home</p>
                            <p className="pb-2 border-b-white border-b-2">About Me</p>
                            <p className="pb-2 border-b-white border-b-2">Portfolio</p>
                            <p className="pb-2 border-b-white border-b-2">Contact</p>
                        </div>
                    </div>
                </div>
                <section className="relative flex h-auto">
                    <div className="w-full h-full p-7 pb-20 bg-center" style={{ backgroundImage: `url(${Orang})` }}>
                        <div className="flex mb-52 justify-between">
                            <div className="flex tracking-wide text-white font-semibold text-xl">
                                Lawrence.
                                <h1 className="text-black">me</h1>
                            </div>
                            <div className="text-4xl" onClick={()=>setMenu(!menu)}>
                                <FiMenu />
                            </div>
                        </div>
                        <div className="">
                            <div className="text-xl mb-2 font-semibold">
                                Hallo Guys,
                            </div>
                            <div className="text-5xl mb-5 w-max text-white font-semibold">
                                i'm Lawrence
                            </div>
                            <div className="w-2/3 mt-10">
                                <span className="bg-white">i'm a professional</span>
                                <span className="font-semibold px-1 bg-white">Photographer, Videographer, and Storyteller</span>
                                <span className=" bg-white">from Indonesia.</span>
                            </div>
                            <div className="flex items-center w-6/10 justify-between mt-10">
                                <button className="px-5 py-3 bg-yellow-500 rounded-lg text-white">
                                    Hire Me
                                </button>
                                <p className="flex items-center underline text-white">
                                    View Resume
                                    <FiArrowRight className="ml-1 text-xl" />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full h-full relative">
                    <div className="flex justify-center pt-40 pb-96 items-center">
                        <img src={Foto3} alt="" className="w-1/3" />
                        <div className="w-1/2 ml-5">
                            <div className="text-lg mb-5 text-sky-600 font-bold tracking-wide">
                                ABOUT ME
                            </div>
                            <div className="font-light tracking-wide">
                                Hello my name is Lawrance Waraweki, im a professional Photographer, Videographer and Storyteller, i have 15 years experienced for work in visual agency. and So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions.
                            </div>
                            <div className="flex mt-5">
                                <div className="flex items-center">
                                    <div className="font-bold text-sky-700 text-4xl mr-3">
                                        15
                                    </div>
                                    <div className=" text-sm tracking-wide font-semibold">
                                        Years of Experience.
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="font-bold text-sky-700 text-4xl mr-3">
                                        5
                                    </div>
                                    <div className=" text-sm tracking-wide font-semibold">
                                        Satisfied Clients.
                                    </div>
                                </div>
                            </div>
                            <p className="flex items-center underline pt-10 font-semibold text-yellow-500">
                                View Resume
                                <FiArrowRight className="ml-1 text-xl" />
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center absolute z-10 -bottom-56">
                        <div className="w-8/10 text-gray-600">
                            <div className="rounded-lg bg-white p-3 mb-3 shadow-md">
                                <div className="flex mb-3 justify-between items-center">
                                    <div className="font-bold text-lg flex items-center justify-between">
                                        Photography
                                    </div>
                                    <div className="font-semibold text-sm">
                                        150 Project Completed
                                    </div>
                                </div>
                                <div className="font-light text-gray-500">
                                    Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to.
                                </div>
                            </div>
                            <div className="rounded-lg bg-white p-3 mb-3 shadow-md">
                                <div className="flex mb-3 justify-between items-center">
                                    <div className="font-bold text-lg flex items-center justify-between">
                                        Photography
                                    </div>
                                    <div className="font-semibold text-sm">
                                        150 Project Completed
                                    </div>
                                </div>
                                <div className="font-light text-gray-500">
                                    Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to.
                                </div>
                            </div>
                            <div className="rounded-lg bg-white p-3 mb-3 shadow-md">
                                <div className="flex mb-3 justify-between items-center">
                                    <div className="font-bold text-lg flex items-center justify-between">
                                        Photography
                                    </div>
                                    <div className="font-semibold text-sm">
                                        150 Project Completed
                                    </div>
                                </div>
                                <div className="font-light text-gray-500">
                                    Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full h-full relative">
                    <div className="px-16 pt-96 pb-52" style={{ backgroundImage: `url(${Bg5})` }}>
                        <div className="space-y-5 mb-3">
                            <div className="text-lg font-semibold tracking-widest uppercase">PORTFOLIO</div>
                            <div className="w-7/10 text-4xl font-bold"><span className="bg-white">All Creative Works Selected Projects.</span></div>
                            <div className="w-6/10 tracking-wide font-light text-lg">
                                We are able to help you with the latest high tech solutions, thanks to our company culture.
                            </div>
                            <p className="flex items-center underline font-semibold tracking-wide text-white">
                                Explore More
                                <FiArrowRight className="ml-1 text-xl" />
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="col-span-1 flex items-center">
                                <img src={Portfolio1} alt="" className="rounded-lg shadow-md" />
                            </div>
                            <div className="col-span-1 space-y-5">
                                <img src={Portfolio2} alt="" className="rounded-lg shadow-md" />
                                <img src={Portfolio3} alt="" className="rounded-lg shadow-md" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-center w-full tracking-wide h-auto -bottom-10">
                        <div className="bg-white rounded-lg p-2 shadow-xl flex items-center justify-between">
                            <img src={Logo1} alt="" className="h-10" />
                            <img src={Logo2} alt="" className="h-10" />
                            <img src={Logo3} alt="" className="h-10" />
                            <img src={Logo4} alt="" className="h-10" />
                            <img src={Logo5} alt="" className="h-10" />
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-center h-full">
                    <div className="w-7/10 pt-60 pb-28 ">
                        <div className="text-xl text-center mb-5 uppercase text-blue-400 tracking-widest font-semibold">
                            Testimonials
                        </div>
                        <div className="text-4xl text-center mb-24 tracking-wide font-bold">
                            What They Say About Us
                        </div>
                        <div className="h-auto space-y-5">
                            <div className="p-3 rounded-lg">
                                <div className="flex mb-5 items-center space-x-5">
                                    <img src={Orang1} alt="" className="h-14 w-14" />
                                    <div className="">
                                        <p className="tracking-wide text-lg font-semibold text-sky-600">Lamone Waraweki</p>
                                        <p>CO-Founder Netarch Studio</p>
                                    </div>
                                </div>
                                <div className=" font-light tracking-wide">
                                    So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuality was now merged in a joint
                                </div>
                            </div>
                            <div className="p-3 text-right rounded-lg">
                                <div className="flex mb-5 justify-end space-x-5 items-center">
                                    <div>
                                        <p className="tracking-wide font-semibold text-lg text-sky-600">Thomas Chavez</p>
                                        <p>Professional Actor</p>
                                    </div>
                                    <img src={Orang2} alt="" className="h-14 w-14" />
                                </div>
                                <div className=" font-light tracking-wide">
                                    So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuality was now merged in a joint
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full h-full">
                    <div className="flex justify-center backdrop-blur-md items-center bg-right-bottom px-7 py-28 bg-cover" style={{ backgroundImage: `url(${Bg6})` }}>
                        <div className="w-9/10 text-white backdrop-blur-sm backdrop-brightness-50 p-5">
                            <div className="text-xl underline underline-offset-2 mb-5 uppercase text-sky-600 tracking-widest font-semibold">
                                <span className="bg-white">Contact Us</span>
                            </div>
                            <div className="text-2xl tracking-wide mb-5 font-bold">
                                <span className="bg-black">Got a Project ? Let's talk.</span>
                            </div>
                            <div className=" w-3/4 text-lg font-light tracking-wide">
                                <span className="bg-white text-black">Challenge us. We want to work with you to create the really cool stuff.</span>
                            </div>
                            <p className="mt-20 font-semibold">
                                <span className="bg-black flex w-min p-1 items-center ">
                                    hellolawrance@work.com
                                    <FiArrowRight className="ml-1 text-xl" />
                                </span>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="flex items-center p-5 justify-between bg-gray-700 p">
                    <div className="flex tracking-wide text-white font-semibold text-xl">
                        Lawrence.
                        <h1 className="text-sky-600">me</h1>
                    </div>
                    <div className="space-x-5 font-semibold flex text-white">
                        <p>Home</p>
                        <p>About Me</p>
                        <p>Portfolio</p>
                        <p>Contact</p>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}