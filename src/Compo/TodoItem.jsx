import styles from "./todoItem.module.css";
export default function TodoItem({item, todos, setTodos}){
    function handlechange(item){
        // console.log("x click",item);
        setTodos(todos.filter((todo)=>  todo !== item ));
    }
    function handleClick(name){
        const newArray= todos.map((todo)=>
            todo=== name ? {...todo, done: !todo.done} : todo);
        setTodos(newArray);
    }
    const className = item.done ? styles.completed : "";
    return <div className={styles.item}>
        <div className={styles.itemName}>
            <span className ={className} onClick={()=>handleClick(item.name)}>
            {item.name}
            </span>
        
        <span>
        <button className= {styles.deleteButton} onClick={()=>handlechange(item)}>X</button>
        </span>
        </div>
        <hr className={styles.line}/>
    </div>
}