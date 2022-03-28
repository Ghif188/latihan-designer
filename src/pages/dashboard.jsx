import React from "react"
import Layout from "../layout/index1"
import Profile from "../assets/profile.jpeg"
export default function Dashboard() {
    return (
        <Layout>
            <div className="h-full">
                <div className="flex justify-between text-2xl items-center">
                    <div className="flex">
                        <div className="font-bold mr-1">Mr.</div>
                        <div>Ghifari</div>
                    </div>
                    <input type="text" className="shadow-md px-3 rounded-xl text-base" placeholder="Search" />
                </div>
                <div className="font-semibold h-max">
                    Create New Group
                    <div className="flex mt-5 sm-max:h-1/2 text-white">
                        <div className="rounded-xl sm-max:text-center sm-max:py-3 sm-max:px-0 px-10 py-5  text-center bg-teal-300 w-1/6 mr-5">Add New</div>
                        <div className="rounded-xl sm-max:text-center sm-max:py-3 sm-max:px-0 px-10 py-5  text-center bg-teal-300 w-1/6 mr-5">Join a Group</div>
                    </div>
                </div>
                <div className="w-full sm-max:mt-5 mt-10 font-semibold h-2/3">
                    Existing Group
                    <div className="bg-blue-50 sm-max:p-5 p-10 mt-5 w-full rounded-xl h-full">
                        <div className="flex h-full w-full">
                            <div className="flex w-full rounded-lg p-3 h-4/10 items-center bg-slate-200">
                                <img src={Profile} alt="" className="h-20 rounded-full" />
                                <div className="ml-5">
                                    <div>
                                        <div className="font-semibold">Group HAHAHA</div>
                                        <div className=" font-normal">ini adalah group konyol</div>
                                    </div>
                                    <p className=" italic mt-5 text-gray-500">
                                        Goals / Progress
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/10 sm-max:w-1/6 text-white ml-5">
                                <div className="p-5 text-center rounded-lg mb-5 bg-red-500">
                                    <button>Edit</button>
                                </div>
                                <div className="p-5 text-center rounded-lg bg-sky-500">
                                    <button>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}