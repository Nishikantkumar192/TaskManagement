import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import NoteContext from '../context/NoteContext';
import DisplayTasks from './DisplayTasks';

const FetchTasks = () => {
    const context=useContext(NoteContext);
    const {fetchingTask,tasks}=context;
    useEffect(()=>{
        fetchingTask();
    },[])
  return (
    <div>
      {tasks.map((task)=>{
        return <DisplayTasks task={task} key={task._id}/>
      })}
    </div>
  )
}

export default FetchTasks
