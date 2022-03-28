import React from "react"
import Layout from "../layout/index1"
import { CgTag } from 'react-icons/cg'

export default function Task() {
    return (
        <Layout>
            <div className="grid grid-cols-6 gap-5 text-gray-700 h-full">
                <div className="col-span-4 space-y-5">
                    <div className="h-3/10 space-y-5">
                        <div className="flex text-3xl">
                            <div className="font-bold mr-1">Mr.</div>
                            <div>Ghifari</div>
                        </div>
                        <div className="font-bold text-lg">
                            Task Reporting
                        </div>
                        <div className="flex text-gray-400 items-center capitalize">
                            <div className="flex items-center mr-5">
                                <CgTag className="mr-1" />
                                other
                            </div>
                            <div className="flex items-center">
                                <CgTag className="mr-1" />
                                Target 1
                            </div>
                        </div>
                        <h1 className="font-bold mt-3 text-4xl capitalize">
                            persiapan menuju akreditasi
                        </h1>
                    </div>
                    <div className="h-6/10 space-y-5">
                        <div className="h-6/10 p-5 font-semibold space-y-2 rounded-xl bg-blue-50">
                            <div className="h-3/10">
                                <div className="mb-2">
                                    Target
                                </div>
                                <select name="" id="" className="w-2/3 rounded-lg h-6/10" >
                                </select>
                            </div>
                            <div className="h-3/10">
                                <div className="mb-2">
                                    Task
                                </div>
                                <select name="" id="" className="w-2/3 rounded-lg h-6/10" >
                                </select>
                            </div>
                            <div className="h-3/10">
                                <div className="mb-2">
                                    Progress
                                </div>
                                <select name="" id="" className="w-2/3 rounded-lg h-6/10" >
                                </select>
                            </div>
                        </div>
                        <div className="h-1/3 p-5 rounded-xl space-y-2 bg-blue-50">
                            <div className="text-sm font-semibold antialiased">
                                Mark As:
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center w-1/3">
                                    <input type="checkbox" name="" id="" className="mr-3"/>
                                    Done
                                </div>
                                <div className="flex items-center w-1/3">
                                    <input type="checkbox" name="" id="" className="mr-3" />
                                    Need Review
                                </div>
                                <div className="flex items-center w-1/3">
                                    <input type="checkbox" name="" id="" className="mr-3" />
                                    Hold
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center w-1/3">
                                    <input type="checkbox" name="" id="" className="mr-3"/>
                                    In Progress
                                </div>
                                <div className="flex items-center w-1/3">
                                    <input type="checkbox" name="" id="" className="mr-3" />
                                    Cancelled
                                </div>
                                <div className="flex items-center w-1/3">
                                    <input type="checkbox" name="" id="" className="mr-3" />
                                    Planning
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="py-1 px-3 border-2 w-1/6 rounded-md">
                                halo
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 bg-red-50">
                </div>
            </div>
        </Layout>
    )
}