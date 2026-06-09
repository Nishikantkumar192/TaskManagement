import React from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";
import "../style/styles.css"

const DisplayTasks = ({ task }) => {
  const context = useContext(NoteContext);
  const { handleStatus, deleteTask } = context;
  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex flex-col justify-center max-h-[400px] max-w-[500px] overflow-y-auto  text-xl flex-wrap shadow-[0_0_5px_4px_rgba(0,0,0)] hover:scale-105 hover:bg-pink-500 transition-transform duration-500 p-8">
      <span className="mt-2 ">Title : {task.title}</span>
      <span className="mt-2 break-all">Description : {task.description}</span>
      <span className="mt-2 ">CreatedAt : {formatDate(task.createdAt)}</span>
      <span className="mt-2 ">UreatedAt : {formatDate(task.updatedAt)}</span>
      <span className="mt-2">Status : {task.taskStatus}</span>
      <span
        onClick={() => handleStatus(task._id)}
        className="underline text-blue-600 cursor-pointer text-end"
      >
        Change-status
      </span>
      <div id="btns" className="flex flex-wrap justify-between mt-4">
        <Link
          className="shadow-[0_3px_2px_2px_rgba(0,0,0)] px-4"
          to={`/editTask/${task._id}`}
        >
          Edit
        </Link>
        <span
          className="shadow-[0_3px_2px_2px_rgba(0,0,0)] px-4 cursor-pointer" 
          onClick={() => deleteTask(task._id)}
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default DisplayTasks;
