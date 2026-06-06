import React from 'react'
import { Link } from 'react-router-dom'
import api from '../api/axios'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import NoteContext from '../context/NoteContext'

const DisplayTasks = ({task}) => {
    const context=useContext(NoteContext);
    const {handleStatus}=context;
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
    <div className='flex flex-col text-xl flex-wrap shadow-[0_0_5px_4px_rgba(0,0,0)] hover:scale-105 hover:bg-pink-500 transition-transform duration-500 p-8'>
        <span className='mt-2 '>Task : {task.task}</span> 
        <span className='mt-2 '>CreatedAt : {formatDate(task.createdAt)}</span>
        <span className='mt-2'>Status : {task.taskStatus}</span>
        <span onClick={()=>handleStatus(task._id)} className='underline text-blue-600 cursor-pointer text-end'>Change-status</span>
    </div>
  )
}

export default DisplayTasks
