import React from "react"
import uuid from 'react-uuid';
import Card from "./Card";

export default function Main(){

    const [mode, setMode] = React.useState(true) // true - "add-delete" mode & false - "update" mode
    const [updateId, setUpdateId] = React.useState("")
    const [newThing, setNewThing] = React.useState("")
    const [todoList, setTodoList] = React.useState([])
    const refInput = React.useRef()
  
    function addThing(){
        const thing = {
            id : uuid(),
            value : newThing
        }
        if(newThing==="" ){
            alert("text area cannot be empty")
            return false
        }
        setTodoList(prev => [...prev, thing])
        setNewThing("")
    }
  
    function deleteThing(id){
        setTodoList(prev => prev.filter(item => item.id !== id))
    }

    function updateMode(id){
        refInput.current.focus()
        setUpdateId(id)
        refInput.current.value = todoList.find(item => item.id === id).value
        setMode(false)
    }
    
    function updateThing(id){
        function changeVal(obj,newValue){
            if(obj.id === id) {obj.value = newValue}
            return obj
    }
        setTodoList(prev => [...prev].map(item => changeVal(item,newThing))) 
        setNewThing("")
        setMode(true)
    }

    return (
    <div className="text-center">
        <input
            className="mt-10 border-2 text-xl"
            ref = {refInput}
            type = "text"
            placeholder = "Enter a new thing to do"
            value = {newThing}
            onChange = {e => setNewThing(e.target.value)}/>
        <button 
            className="border-2 bg-red-100 ml-10 w-auto h-auto p-1 px-5"
            type = "submit"
            onClick = {mode ? addThing : (() => updateThing(updateId))}>{mode ? "Save" : "Update"}</button>       
        <h1 className="text-center mb-5 text-3xl mt-10">To Do List</h1>
        <ul className="flex flex-col gap-2">
            <Card 
            todoList = {todoList}
            deleteThing = {deleteThing}
            updateMode = {updateMode}
            setTodoList = {setTodoList}/>
        </ul>
    </div>
    )
}
