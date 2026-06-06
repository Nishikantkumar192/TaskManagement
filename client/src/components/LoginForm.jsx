import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdDangerous } from "react-icons/md";
import { useState } from 'react';

const LoginForm = ({show,setShow}) => {
    const [work,setWork]=useState("Sign-up");
    const navigate=useNavigate();
  return (
    <form className='bg-black max-w-[500px] min-w-[310px] py-8 px-8 rounded'>
        <span className='text-white text-2xl hover:text-red-800 cursor-pointer fixed right-4 top-5' onClick={()=>{navigate("/"),setShow(!show)}}><MdDangerous/></span>
        {work==="Sign-up" && <input className='mt-8 py-2 px-2 shadow-[0_2px_3px_2px_rgba(255,0,0,1)] outline-none w-full text-gray-200' type="text" name='username' placeholder='Username' />}
        <input className='mt-4 py-2 px-2 shadow-[0_2px_3px_2px_rgba(255,0,0,1)] outline-none w-full text-gray-200' type="email" name='email' placeholder='Email' />
        <input className='mt-4 py-2 px-2 shadow-[0_2px_3px_2px_rgba(255,0,0,1)] outline-none w-full text-gray-200' type="" name='password' placeholder='Password' />
        <button className='mt-4 mb-4 bg-green-800 hover:bg-green-700 cursor-pointer w-full p-2 text-2xl'>{work==="Sign-up"?"Log-in":"Sign-up"}</button>
        {work==="Sign-up"?<span className='text-white text-2xl inline'>Create an account : </span>: <span className='text-white text-2xl inline'>Already have an account? </span> }
        <span className='text-blue-500 underline cursor-pointer text-2xl' onClick={()=>setWork(work==="Sign-up"?"Log-in":"Sign-up")}>{work}</span>
    </form>
  )
}

export default LoginForm
