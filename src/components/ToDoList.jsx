import { ToDoItem } from "./ToDoItem"

export const ToDoList = ({ToDos}) => {
    return <div className="col-md-7">
    <div><h3>ToDoList {ToDos.length}</h3></div>
    <table className="table table-dark table-bordered">
        <thead>
            <tr>
                <th>Number</th>
                <th>ToDo</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {ToDos.map((elm) => (
            <ToDoItem key={elm.number} number={elm.number} ToDo={elm.ToDo} />
          ))}
        </tbody>
    </table>
    </div>
}