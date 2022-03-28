import React from 'react'

export default function Konsep() {
    const [menu, setMenu] = React.useState(false)
    const [tes, setTes] = React.useState(false)
    const [nilai, setNIlai] = React.useState(1)
    return (
        <React.Fragment>
            <div className='h-screen w-screen'>
                <div className=' h-1/10 bg-blue-200'>
                    <button onClick={() => setMenu(!menu)} className='text-white text-2xl'>Menu</button>
                </div>
                <div className='w-full h-9/10 grid grid-cols-5 relative'>
                    <div className={`${menu === true ? "-translate-x-0 duration-500" : "-translate-x-full duration-500"} lg:transform-none transform lg:block sm-max:w-5/6 lg:static absolute z-10 h-full col-span-1 bg-blue-300`}></div>
                    <div className='col-span-5 lg:col-span-4 bg-yellow-400 '>
                        <div className={`${nilai > 5 ? "tes3" : "tes2"} h-24 w-24`}>
                            contoh
                        </div>
                        <div>
                            {nilai}
                        </div>
                        <button onClick={()=>setNIlai(nilai + 1)}>tambah</button>
                        <button onClick={()=>setNIlai(nilai - 1)}>kurang</button>
                        <button onClick={()=>setTes(!tes)}>
                            klik
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}