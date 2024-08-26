import { useState } from "react"

export const AddToDo = ({ onAdd }) => {
  const [newToDo, setNewToDo] = useState("")
  const handleAddClick = () => {
    if (newToDo.trim()) {
      onAdd({ ToDo: newToDo })
      setNewToDo("")
    }
  }

  return (
    <div className="add">
      <h3>Add ToDo</h3>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Enter To Do"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
      </div>
      <div>
        <button 
          className="btn btn-primary full-width-button" 
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>
    </div>
  )
}
