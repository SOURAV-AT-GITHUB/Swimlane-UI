import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import target from '../assets/target.svg'
import timerIcon from '../assets/timer.svg'
import tickIcon from '../assets/tick.svg'
import './Columns.css'
export default function Cloumns({title,todos,id,handleDelete}) {

  return (
    <div id={title+"-box"}
    className="column">
           <div className="column-header">
      <img src={title=='Todo'?  target : title=="Doing" ? timerIcon : tickIcon} alt="" />
      <h3>{title} List</h3>

      </div>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
          className="column-container"
            ref={provided.innerRef}
            {...provided.droppableProps}
            // isDraggingOver={snapshot.isDraggingOver}
          >

            {/*Provide/map tasks here*/ }
            
            {todos.map((todo,index)=>( 
              <React.Fragment key={index}>

            {todo.status ===title &&  <Card todo={todo} index={index} key={index} handleDelete={handleDelete}/>}
              </React.Fragment>
            ))}
            
            {provided.placeholder}
          </div>
  )}
      </Droppable>
    </div>
  );
}
