import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Cloumns from "./Cloumns";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './Swimlane.css'
export default function Swimlane() {
  const todos = useSelector(store=>store.todos)
  const error = useSelector(store=>store.error)
  const dispatch = useDispatch()

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    // if (destination.index === source.index) return;
    if (
      (source.droppableId == "Todo" && destination.droppableId == "Done") ||
      (source.droppableId == "Done" && destination.droppableId == "Todo")
    ) {
      if (!error) {
        dispatch({type:"Show_Error"})
        setTimeout(() => {
          dispatch({type:"End_Error"})
        }, 3500);
      }
      return;
    }
    dispatch({type:"Update_Position",payload:{destination,source}})

  };
  
  const handleDelete = (index) => {
    dispatch({type:"Delete",payload:index})
  };
  return (
    <div id="container" >
    
      <DragDropContext onDragEnd={handleDragEnd}>
        <div
        id="cloumns-container"

        >
          <Cloumns
            title="Todo"
            id={"Todo"}
            todos={todos}
            handleDelete={handleDelete}
          />
          <Cloumns
            title="Doing"
            id={"Doing"}
            todos={todos}
            handleDelete={handleDelete}
          />
          <Cloumns
            title="Done"
            id={"Done"}
            todos={todos}
            handleDelete={handleDelete}
          />
        </div>
      </DragDropContext>
    </div>
  );
}
