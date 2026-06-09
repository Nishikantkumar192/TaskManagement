import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NoteContext from "../context/NoteContext";

const SideBar = ({ showSidebar, setShowSidebar }) => {
  const context = useContext(NoteContext);
  const { show, setShow, userDetail,logoutUser } = context;
  return (
    <div
      id="sideBar"
      className="fixed top-12 z-100 flex flex-col text-3xl py-12 w-full p-4 leading-14 bg-yellow-300 right-0"
    >
      <Link
        onClick={() => {
          (setShowSidebar(!showSidebar), setShow(false));
        }}
        className="text-white border px-4 outline-none text-center mb-4"
        to={"/"}
      >
        Home
      </Link>
      {!userDetail ? (
        <button
          className="text-white text-center border outline-none"
          onClick={() => {
            (setShow(!show), setShowSidebar(!showSidebar));
          }}
        >
          Log-in
        </button>
      ) : (
        <button className="border outline-none text-white" onClick={()=>logoutUser()}>Logout</button>
      )}
      {userDetail && <Link className="border outline-none text-white mt-4 text-center" to={"/create-task"} onClick={()=>setShowSidebar(false)}>Create-Task</Link>}
    </div>
  );
};

export default SideBar;
