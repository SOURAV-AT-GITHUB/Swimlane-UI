import React from 'react'
import './TaskCard.css'
function TaskCard({task,handleDelete}) {
  return (
    <div className='task-card' draggable >
        <p>#{task.id}</p>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TaskCard