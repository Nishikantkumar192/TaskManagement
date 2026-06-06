import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import NoteContext from "../context/NoteContext";

const NavBar = () => {
  const context = useContext(NoteContext);
  const { show, setShow } = context;
  return (
    <div className="p-2 bg-black flex flex-wrap justify-between">
      <div className="text-red-700 text-2xl font-bold underline">
        Task Management
      </div>
      <div>
        <Link className="hover:scale-110 px-4 text-white text-2xl" to={"/"}>
          Home
        </Link>
        <Link className="hover:scale-110 px-4 text-white text-2xl" onClick={()=>setShow(!show)}>Log-in</Link>
      </div>
    </div>
  );
};

export default NavBar;
