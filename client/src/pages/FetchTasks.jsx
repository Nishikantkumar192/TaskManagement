import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import NoteContext from '../context/NoteContext';
import DisplayTasks from './DisplayTasks';
import CreateTask from './CreateTask';

const FetchTasks = () => {
    const context=useContext(NoteContext);
    const {fetchingTask,tasks}=context;
    useEffect(()=>{
        fetchingTask();
    },[])

  return (
    <div className='bg-gray-400 pt-16'>
    <CreateTask/>
    <div className='flex justify-center flex-wrap p-4 min-h-screen gap-7'>
      {tasks.map((task)=>{
        return <DisplayTasks task={task} key={task._id}/>
      })}
    </div>
    </div>
  )
}

export default FetchTasks
