import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../api/axios";
import NoteContext from "./NoteContext";
import { toast } from "react-toastify";

const NoteState = (props) => {
  const [user,setUser]=useState(null);
  const [tasks, setTasks] = useState([]);     
  const [show,setShow]=useState(false);         //   login/signup form page visibility
  const [filterTask,setFilterTask]=useState([]);

  const isValid=async(req,res)=>{
    try{
      const {data}=await api.get("/api/auth/isLoggedIn");
      setUser(data.userInfo)
    }catch(err){
      toast.error(err.response?.data?.message || err.message);
    }
  }
  useEffect(()=>{
    isValid();
  },[])
  const fetchingTask = async (req, res) => {
    try {
      const { data } = await api.get("/api/data/fetchingTask");
      setTasks(data.fetchedData);
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    }
  };
  const addNewTask = async (task) => {
    try {
      const { data } = await api.post("/api/data/createTask", task );
      toast.success(data.message);
      setTasks(tasks.concat(data.newTask));
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    }
  };
  const handleStatus = async (id) => {
    try {
      const { data } = await api.get(`/api/data/handleStatus/${id}`);
      toast.success(data.message);
      setTasks(tasks.map((task) => (task._id === id ? data.task : task)));
      setFilterTask(tasks.map((task) => (task._id === id ? data.task : task)));
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    }
  };

  const registerUser=async(url,details)=>{
    try{
      const {data}=await api.post(`${url}`,details);
      toast.success(data.message);
    }catch(err){
      toast.error(err.response?.data?.message || err.message);
    }
  }
  const editTask=async(req,res)=>{
    try{
      const {data}=await api.put("/api/data/updateTask");
      console.log(data);
    }catch(err){
      toast.error(err.response?.data?.message || err.message);
    }
  }
  const deleteTask=async(id)=>{
    try{
      const {data}=await api.delete(`/api/data/deleteTask/${id}`);
      toast.success(data.message);
      setTasks(tasks.filter((task)=>task._id!==id));
    }catch(err){
      toast.error(err.response?.data?.message || err.message);
    }
  }
  const values = {
    tasks,
    fetchingTask,
    addNewTask,
    handleStatus,
    show,setShow,
    registerUser,
    user,setUser,
    editTask,deleteTask,
    filterTask,setFilterTask
  };
  return (
    <div>
      <NoteContext.Provider value={values}>
        {props.children}
      </NoteContext.Provider>
    </div>
  );
};

export default NoteState;
