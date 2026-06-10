import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

const Home = () => {
  const context=useContext(NoteContext);
  const {show,setShow,userDetail}=context;
  return (
    <div className="flex flex-col justify-center items-center bg-gray-400 min-h-screen">
      {show && <div className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px]">
        <LoginForm show={show} setShow={setShow}/>
      </div>}
        <p className="p-4 text-4xl text-center">📝 Welcome to Task Manager</p>
        {userDetail && <Link
          className="hover:scale-110 transition-transform duration-500 bg-green-700 text-white border px-8 py-2 shadow-[0_0_3px_3px_rgba(123,125,128)]"
          to={"/tasks"} 
        >
          Show Tasks
        </Link>}
    </div>
  );
};

export default Home;
