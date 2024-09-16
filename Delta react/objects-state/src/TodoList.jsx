import { useState } from "react";
import {v4 as uuidv4 } from 'uuid';

function TodoList(){
    let [Todo,setTodo]=useState([{task:"sample task",id:uuidv4(),isDone:false}]);

    let [NewTodo,setNewTodo]=useState("")


    function addNewTask(){
        setTodo((prevtodos)=>{
            return [...prevtodos,{ task:NewTodo, id:uuidv4() ,isDone:false}]
        });
        setNewTodo("");
    };

    function updateTodoValue(event){
       setNewTodo(event.target.value)
    }

  
    let deletetodo=(id)=>{
        setTodo(Todo.filter((todo)=>todo.id!=id));
       
    }

    let markAllDone=()=>{
      setTodo(Todo.map((tudo)=>{
            return {
                ...tudo,isDone:true
            }
        })
    )
        console.log(newarr)
        


}

    let markAsDone=(id)=>{
    setTodo((prevtodos)=>
        prevtodos.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,isDone:true

                };
            } else{
                return todo;
            }
               
        })
    ); 

};

                
   
    
    
    return(
        <div>
            <input placeholder="add a task" value={NewTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br>

            <hr></hr>
            
            <h1>Task Todo</h1>
            <ul>
                {Todo.map((todos)=>(
                    <li key={todos.id}>
                      <span style={todos.isDone ? {textDecorationLine:"line-through" } :{} }>
                      
                        {todos.task}
                        </span>
                      <button onClick={()=>deletetodo(todos.id)}>delete</button>
                      <button onClick={()=>markAsDone(todos.id)}>Mark As Done</button>
                     

                      </li>
                ))}
       
                
            </ul>
            <br></br>
            <button onClick={markAllDone}>Mark All IS done</button>

        </div>
    )

} ;




export default TodoList;