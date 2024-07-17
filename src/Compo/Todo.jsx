import {useState} from "react";
import Form from "../Compo/Form";
import TodoList from "../Compo/TodoList";


export default function Todo(){
    const[todos,setTodos]= useState([]);
    const completedTodos = todos.filter((todo)=>todo.done).length; 

    return (<div>
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        <h1>{completedTodos}</h1>
    </div>)
    
}