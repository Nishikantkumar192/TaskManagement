import React from "react";
import { useContext } from "react";
import { useState } from "react";
import NoteContext from "../context/NoteContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/axios";

const CreateTask = () => {
  const {id}=useParams();
  const context = useContext(NoteContext);
  const { addNewTask } = context;
  const initialDetails = {
    title: "",
    description: "",
  };
  const editTask=async()=>{
    try{
      const {data}=await api.post(`/api/data/editTask/${id}`);
      console.log(data);
    }catch(err){
      toast.error(err.response?.data?.message || err.message);
    }
  }
  const [input, setInput] = useState(initialDetails);
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask(input);
    setInput(initialDetails);
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:e.target.value
    })
  };
  return (
    <form
      className="p-4 flex flex-col items-center text-xl"
      onSubmit={handleSubmit}
    >
      <h1 className="text-5xl text-white font-bold mb-4">Add New Task</h1>
      <input
      className="p-2 mb-4 outline-none border"
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={input.title}
      />
      <textarea
        className="border p-4 outline-none w-full max-w-[500px]"
        name="description"
        rows={4}
        placeholder="What's Your Task"
        onChange={handleChange}
        value={input.description}
      ></textarea>
      <button className="bg-green-800 hover:bg-green-700 mt-4 p-2 px-6 rounded shadow-[0_0_3px_4px_rgba(0,0,0)] text-white">
        Add Task
      </button>
    </form>
  );
};

export default CreateTask;
