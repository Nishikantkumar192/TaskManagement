import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import api from '../api/axios';
import NoteContext from './NoteContext';
import { toast } from 'react-toastify';

const NoteState = (props) => {
    const [tasks,setTasks]=useState([]);
    const fetchingTask=async(req,res)=>{
        try{
            const {data}=await api.get("/api/data/fetchingTask");
            setTasks(data.fetchedData);
        }catch(err){
            toast.error(err.response?.data?.message || err.message);
        }
    }
    const values={
        tasks,
        fetchingTask,
    }
  return (
    <div>
    <NoteContext.Provider value={values}>
      {props.children}
    </NoteContext.Provider>
    </div>
  )
}

export default NoteState
