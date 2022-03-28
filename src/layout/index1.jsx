import React from "react"
import Gambarbutton from "../assets/dashboard.png"
import Profile from "../assets/profile.jpeg"
export default function Dashboard({ children }) {
    const [menu, setMenu] = React.useState(false)
    return (
        <React.Fragment>
            <div className=" antialiased bg-teal-500 sm-max:relative flex w-screen lg:p-5 h-screen">
                <section className={`${menu === true ? "-translate-x-full duration-500" : "duration-500 -translate-x-0"} transform lg:transform-none w-1/5 sm-max:absolute sm-max:bg-teal-400 z-10 h-full p-5 sm-max:w-4/5`}>
                    <div className="h-1/4">
                        <div className="h-1/3 w-full flex justify-between">
                            <img src={Profile} alt="" className="h-full rounded-full shadow-lg" />
                            <button onClick={()=>setMenu(!menu)} className='lg:hidden'>X</button>
                        </div>
                        <div className="mt-5 text-xl text-white font-semibold">
                            Ghifari Raya
                            <p className="text-base font-normal">Researcher / Admin</p>
                        </div>
                    </div>
                    <div className="h-1/2 space-y-10">
                        <div className="flex items-center text-white">
                            <img src={Gambarbutton} alt="" className="mr-5 h-10" />
                            Dashboard
                        </div>
                        <div className="flex items-center text-white">
                            <img src={Gambarbutton} alt="" className="mr-5 h-10" />
                            Dashboard
                        </div>
                        <div className="flex items-center text-white">
                            <img src={Gambarbutton} alt="" className="mr-5 h-10" />
                            Dashboard
                        </div>
                        <div className="flex items-center text-white">
                            <img src={Gambarbutton} alt="" className="mr-5 h-10" />
                            Dashboard
                        </div>
                    </div>
                    <div className="flex items-end h-max" style={{height: `15%`}}>
                        <div className="flex items-center text-white">
                            <img src={Gambarbutton} alt="" className="mr-5 h-10" />
                            Dashboard
                        </div>
                    </div>
                </section>
                <div className="lg:w-4/5 p-5 lg:p-10 bg-white h-full w-full relative lg:rounded-3xl">
                    <button onClick={()=>setMenu(!menu)} className="lg:hidden mb-5 rounded-md border p-1 text-teal-400">Menu</button>
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
}