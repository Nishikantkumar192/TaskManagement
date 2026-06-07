import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../context/NoteContext'

const SideBar = ({showSidebar,setShowSidebar}) => {
    const context=useContext(NoteContext);
    const {show,setShow}=context;
  return (
    <div id='sideBar' className='fixed top-12 z-100 flex flex-col text-3xl py-12 w-full p-4 leading-14 bg-yellow-300 right-0'>
        <Link onClick={()=>{setShowSidebar(!showSidebar),setShow(false)}} className='text-white border px-4 outline-none' to={"/"}>Home</Link>
        <div onClick={()=>{setShow(!show),setShowSidebar(!showSidebar)}} className='border mt-4 px-4 cursor-pointer'><span className='text-white'>Log-in</span></div>
    </div>
  )
}

export default SideBar
