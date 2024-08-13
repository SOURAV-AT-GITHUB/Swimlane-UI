import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TaskBox from "./components/TaskBox";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const tasks = [
    {
      id:"ID-1",
      title: "Task one title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit",
      status:"Todo"
    },
    {
      id:"ID-1",
      title: "Task one title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit",
      status:"Todo"
    },
    {
      id:"ID-1",
      title: "Task one title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit",
      status:"Todo"
    },
    {
      id:"ID-1",
      title: "Task one title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit",
      status:"Todo"
    },
  ];
  function handleDelete(id){
   return null
  }
  return (
    <>
  <TaskBox tasks={tasks} status={"Todo"} handleDelete={handleDelete}/>
    </>
  );
}

export default App;
