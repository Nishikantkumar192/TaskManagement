import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

const Home = () => {
  const context=useContext(NoteContext);
  const {show,setShow}=context;
  return (
    <div>
      {show && <div className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoginForm show={show} setShow={setShow}/>
      </div>}
      <div className="flex flex-col justify-center items-center overflow-hidden min-h-screen bg-gray-300 text-4xl">
        <p className="p-4">📝 Welcome to Task Manager</p>
        <Link
          className="hover:scale-110 transition-transform duration-500 bg-green-700 text-white border px-8 py-2 shadow-[0_0_3px_3px_rgba(123,125,128)]"
          to={"/tasks"}
        >
          Show Tasks
        </Link>
      </div>
    </div>
  );
};

export default Home;
