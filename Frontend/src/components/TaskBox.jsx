import React from 'react'
import TaskCard from './TaskCard'
import './TaskBox.css'
function TaskBox({tasks,category,handleDelete}) {
  return (
    <div className='task-box'>
        <h3>{category}</h3>
        <div>
            {tasks.map((task,index)=>(<TaskCard key={index}  task={task} handleDelete={handleDelete}/>))}
        </div>
    </div>
  )
}

export default TaskBox