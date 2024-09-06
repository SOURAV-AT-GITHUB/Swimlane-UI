import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import "./Card.css";
export default function Card({ todo, index, handleDelete }) {
  const [showLogs, setShowLogs] = useState(false);
  return (
    <Draggable draggableId={`${index}`} index={index}>
      {(provided, snapshot) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style, // Ensure the draggable style is applied
            backgroundColor: snapshot.isDragging ? "lightgreen" : "cyan",
          }}
        >
          <div className="card-header">
            <p>#ID -{todo.id}</p>
            <div>
              <button onClick={() => setShowLogs(!showLogs)}>
                {/* <b>{showLogs ? 'Hide Logs' : 'Show Logs'} </b> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g data-name="Layer 2">
                    <g data-name="info">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                      <circle cx="12" cy="8" r="1" />
                      <path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z" />
                    </g>
                  </g>
                </svg>
              </button>
              <button onClick={() => handleDelete(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="delete"
                  x="0"
                  y="0"
                  version="1.1"
                  viewBox="0 0 29 29"
                  xmlSpace="preserve"
                >
                  <path d="M19.795 27H9.205a2.99 2.99 0 0 1-2.985-2.702L4.505 7.099A.998.998 0 0 1 5.5 6h18a1 1 0 0 1 .995 1.099L22.78 24.297A2.991 2.991 0 0 1 19.795 27zM6.604 8 8.21 24.099a.998.998 0 0 0 .995.901h10.59a.998.998 0 0 0 .995-.901L22.396 8H6.604z"></path>
                  <path d="M26 8H3a1 1 0 1 1 0-2h23a1 1 0 1 1 0 2zM14.5 23a1 1 0 0 1-1-1V11a1 1 0 1 1 2 0v11a1 1 0 0 1-1 1zM10.999 23a1 1 0 0 1-.995-.91l-1-11a1 1 0 0 1 .905-1.086 1.003 1.003 0 0 1 1.087.906l1 11a1 1 0 0 1-.997 1.09zM18.001 23a1 1 0 0 1-.997-1.09l1-11c.051-.55.531-.946 1.087-.906a1 1 0 0 1 .905 1.086l-1 11a1 1 0 0 1-.995.91z"></path>
                  <path d="M19 8h-9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-8-2h7V4h-7v2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="card-body">
            <h3>Title : {todo.title}</h3>
            <p>
              {" "}
              <b>Description : </b>{" "}
              {todo.description || "No description provided."}
            </p>
            {showLogs && (
              <React.Fragment>
                <b>Logs : </b>
                {todo.updateHistory[0] ? (
                  <ul>
                    {todo.updateHistory.map((item, index) => (
                      <li key={index} style={{marginTop:"7px"}}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p><b>No Logs Found</b></p>
                )}
              </React.Fragment>
            )}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
}
