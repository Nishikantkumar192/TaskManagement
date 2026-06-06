import React from "react";
import { useContext } from "react";
import { useState } from "react";
import NoteContext from "../context/NoteContext";

const CreateTask = () => {
    const context=useContext(NoteContext);
    const {addNewTask}=context;
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask(task);
    setTask("");
  };
  return (
    <form
      className="p-4 flex flex-col items-center text-xl"
      onSubmit={handleSubmit}
    >
      <textarea
        className="border p-4 outline-none max-h-50 w-full max-w-[500px]"
        name="task"
        placeholder="What's Your Task"
        onChange={(e)=>setTask(e.target.value)}
        value={task}
      ></textarea>
      <button className="bg-green-800 hover:bg-green-700 mt-4 p-2 px-6 rounded shadow-[0_0_3px_4px_rgba(0,0,0)] text-white">
        Add Task
      </button>
    </form>
  );
};

export default CreateTask;
