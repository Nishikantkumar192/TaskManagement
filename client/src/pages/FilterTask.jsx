import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import DisplayTasks from './DisplayTasks';

const FilterTask = () => {
    const location=useLocation();
    const query=new URLSearchParams(location.search).get("search");
    const [filterTask,setFilterTask]=useState([]);
    useEffect(()=>{
        searchTask();
    },[]);
    const searchTask=async(req,res)=>{
        try{
            const {data}=await api.post(`/api/data/filterTask?search=${query}`);
            setFilterTask(data.matchedTask);
        }catch(err){
            toast.error(err.response?.data?.message || err.message);
        }
    }
  return (
    <div className='pt-16 p-4 min-h-screen flex flex-wrap gap-8'>
        {filterTask.map((task)=>{
            return <DisplayTasks task={task} key={task._id}/>
        })}
    </div>
  )
}

export default FilterTask
