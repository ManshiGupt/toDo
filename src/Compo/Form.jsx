import {useState} from "react";
import styles from "./form.module.css";
export default function Form({todos,setTodos}){
    // const[todo,setTodo]= useState("");
    const[todo,setTodo]= useState({name:"", done: false});
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({name:"", done: false});
    }
    return(
        <form className={styles.todoform} onSubmit ={handleSubmit}>
            <div className={styles.inputContainer}>
            <input
            className={styles.modernInput}
            placeholder="Enter Todo Items..."
            onChange ={(e)=>
            setTodo({name: e.target.value, done:false})}
            value ={todo.name}
            type = "text"
            ></input>
            <button className={styles.modernButton} type ="submit">Submit</button>
            </div>
            
        </form>
    )
}