import React from 'react'
import { useState } from 'react'

export default function Header(props) {
    const [job,setJob] = useState("");

    // lấy dữ liệu
    const takeData = (e) => {
        setJob(e.target.value)
        // console.log(job)
    }


    return (
        <>
        <p className="h2">Todo App</p>
        <div className="add-tasks">
          <input id="todo" className="form-control" type="text" placeholder="Add your new todo" onChange={takeData} value={job}/>
          <button id="add" type="button"  className={job !== "" ? "active" : "btn1"} onClick={()=>{
              props.addData(job)
              setJob("")}
            }>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16" >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
              </svg>
          </button>
        </div>
        </>
    )
}
