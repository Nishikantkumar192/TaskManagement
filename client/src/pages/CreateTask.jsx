import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import NoteContext from "../context/NoteContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/axios";

const CreateTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const context = useContext(NoteContext);
  const { addNewTask,editTask } = context;
  const initialDetails = {
    title: "",
    description: "",
  };
  if (id) {
    useEffect(() => {
      updatingTask();
    }, [id]);
  }

  const updatingTask = async () => {
    try {
      const { data } = await api.post(`/api/data/editTask/${id}`);
      setInput(data.task)
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    }
  };
  const [input, setInput] = useState(initialDetails);
  const handleSubmit = (e) => {
    e.preventDefault();
    {!id?addNewTask(input):editTask(input)};
    setInput(initialDetails);
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="flex flex-wrap flex-col items-center justify-center min-h-screen bg-red-800">
      <form
        className="p-4 flex flex-col w-full max-w-[900px] shadow-[0_3px_4px_2px_rgba(0,0,0)] items-center text-xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-5xl text-black font-bold mb-4">Add New Task</h1>
        <input
          className="p-2 mb-4 outline-none border text-white"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={input.title}
        />
        <textarea
          className="border p-4 outline-none w-full max-w-[500px] text-white"
          name="description"
          rows={4}
          placeholder="What's Your Task"
          onChange={handleChange}
          value={input.description}
        ></textarea>
        {!id?<button className="bg-green-800 hover:bg-green-700 mt-4 p-2 px-6 rounded shadow-[0_0_3px_4px_rgba(0,0,0)] text-white">
          Add Task
        </button>:
        <button className="bg-green-800 hover:bg-green-700 mt-4 p-2 px-6 rounded shadow-[0_0_3px_4px_rgba(0,0,0)] text-white">
          Update Task
        </button>}
      </form>
      <button
        className="mt-6 rounded cursor-pointer outline-none bg-green-800 px-8 py-4 shadow-[0_3px_4px_2px_rgba(0,0,0)] text-white"
        onClick={() => navigate("/tasks")}
      >
        Show-Tasks
      </button>
    </div>
  );
};

export default CreateTask;
