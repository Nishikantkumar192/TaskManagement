import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import NoteContext from "../context/NoteContext";
import DisplayTasks from "./DisplayTasks";
import CreateTask from "./CreateTask";
import { useNavigate } from "react-router-dom";

const FetchTasks = () => {
  const navigate=useNavigate();
  const context = useContext(NoteContext);
  const { fetchingTask, tasks } = context;
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchingTask();
  }, []);
  const handleSearch=()=>{
    if(!search) return;
    navigate(`/filterTask?search=${encodeURIComponent(search)}`);
  }

  return (
    <div className="bg-gray-400 pt-16">
      <CreateTask />
      <hr />
      <div className="text-center mt-6 mb-5">
        <input
          className="border outline-none p-3 rounded-lg bg-white"
          type="text"
          name="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className="px-4 py-2 text-xl rounded cursor-pointer ml-4 hover:scale-105 transition-transform duration-500 bg-green-900 text-white shadow-[0_2px_2px_1px_rgba(0,0,0)]"
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>
      <div className="flex justify-center flex-wrap p-4 min-h-screen gap-7">
        {tasks.map((task) => {
          return <DisplayTasks task={task} key={task._id} />;
        })}
      </div>
    </div>
  );
};

export default FetchTasks;
