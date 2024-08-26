import { useState } from "react"

export const ToDoItem = ({number, ToDo}) => {
    const [buttontext, setbuttontext] = useState("Complete")

    const handleButtonClick = () => {
        if(buttontext == "Complete") {
            setbuttontext("Cancel")
        } else {
            setbuttontext("Complete")
        }
    }

    
    return <tr>
    <td>{number}</td>
    <td className={buttontext === "Cancel" ? "line" : null} >{ToDo}</td>
    <td>
        <button onClick={handleButtonClick}>{buttontext}</button>
    </td>
    </tr>
}