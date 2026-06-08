import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import NoteContext from "../context/NoteContext";
import "../style/NavBar_Style.css"
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./SideBar";
import { GiCrossedPistols } from "react-icons/gi";
import api from "../api/axios";
import { toast } from "react-toastify";

const NavBar = () => {
  const context = useContext(NoteContext);
  const { show, setShow,user,setUser } = context;

  const [showSidebar,setShowSidebar]=useState(false);
  const handleClick=async(req,res)=>{
    try{
      const {data}=await api.get("/api/auth/logout");
      setUser(null);
      toast.success(data.message);
    }catch(err){
      toast.error(err.response?.data?.message || err.message);
    }
  }
  return (
    <div className="p-2 bg-black flex flex-wrap justify-between fixed w-full top-0">
      <div className="text-red-700 text-2xl font-bold underline">
        Task Management
      </div>
      <div>
        <span id="hamburger" className="text-white pt-2 text-3xl" onClick={()=>setShowSidebar(!showSidebar)}>{showSidebar?<GiCrossedPistols/>:<GiHamburgerMenu/>}</span>
        <Link id="home" className="hover:scale-110 px-4 text-white text-2xl" to={"/"}>
          Home
        </Link>
        {!user?<Link id="log-in" className="hover:scale-110 px-4 text-white text-2xl" onClick={()=>setShow(!show)}>Log-in</Link>:
        <button id="logout" className="text-white text-2xl hover:scale-110 px-4 cursor-pointer" onClick={()=>handleClick()}>Logout</button>}
      </div>
      {showSidebar && <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>}
    </div>
  );
};

export default NavBar;
