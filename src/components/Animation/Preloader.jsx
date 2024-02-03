import React, { useEffect } from 'react'
// import "./preloader.css"
import { preLoaderAnim } from './animation'

const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[])

  return (
    <div className='preloader fixed bottom-0 left-0 right-0 z-[99999] h-screen  bg-black text-black flex gap-2 justify-center items-center overflow-hidden'>
        <div className="texts-container flex items-center justify-center  text-2xl font-extrabold overflow-hidden text-white">
            <span>Welcome to Technex</span>
            <span className=''>&nbsp;2024</span>
        </div>
    </div>
  )
}

export default Preloader