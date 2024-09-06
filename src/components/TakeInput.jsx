import React from "react";
import "./TakeInput.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function TakeInput() {
  const error = useSelector(store=>store.error)
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type:'Add',payload:event.target});
  };
  return (
    <section id="input-container">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit} id="input-form">
        <input type="text" placeholder="Add Title" required />
        <input type="text" placeholder="Add Description" />
        <select required>
          <option value="">Select Status</option>
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      {error && (
        <p
        id="error-text"
        >
          {error}
        </p>
      )}
    </section>
  );
}

export default TakeInput;
