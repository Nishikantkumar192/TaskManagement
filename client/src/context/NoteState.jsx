import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../api/axios";
import NoteContext from "./NoteContext";
import { toast } from "react-toastify";

const NoteState = (props) => {
  const [tasks, setTasks] = useState([]);
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
      const { data } = await api.post("/api/data/createTask", { task });
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
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    }
  };
  const values = {
    tasks,
    fetchingTask,
    addNewTask,
    handleStatus,
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
