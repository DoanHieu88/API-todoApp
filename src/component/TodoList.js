import React from 'react'

export default function TodoList(props) {
    return (
       <div className="tasks">
           {props.todoList && props.todoList.map(item =>{
               return(
                   <li key={item.id} className="task">{item.task} <i className="fas fa-trash btn-danger" onClick={()=>{props.deleteJob(item.id)}}></i></li>
               )
           })}
       </div>
    )
}
