import { useState } from "react"
import "./App.css"
import { AddToDo } from "./components/AddToDo"
import { ToDoList } from "./components/ToDoList"
   

export default function App() {
  const [ToDos, setToDos] = useState([
    { number: 1, ToDo: "Go to work" },
    { number: 2, ToDo: "Go to GYM" }
  ]);

  const addToDO = (ToDo) => {
    setToDos([...ToDos, { number: ToDos.length + 1, ...ToDo }])
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <AddToDo onAdd={addToDO} />
        </div>
        <div className="col-md-5">
          <ToDoList ToDos={ToDos} />
        </div>
      </div>
    </div>
  );
}

