import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

export default function Card({todoList, deleteThing, updateMode, setTodoList}){
    
    let card = [...Array(todoList.length).keys()].map((index,key) => 
    <li key = {key} className = "bg-indigo-100 w-[40%] mr-auto ml-auto flex justify-between p-2 rounded-xl">
        <p>{todoList[index].value}</p>
        <div className="flex justify-end">
            <button onClick={() => updateMode(todoList[index].id)}>
                <FontAwesomeIcon className="text-xl hover:text-green-500 mr-3" icon={faEdit} />
            </button>
            <button onClick={() => deleteThing(todoList[index].id)}>
                <FontAwesomeIcon className="text-xl hover:text-red-500 mr-2" icon={faTrashCan} />
            </button>
        </div>
    </li>)
    return(
        [card]
    )
}