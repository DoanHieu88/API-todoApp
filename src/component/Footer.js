import React from 'react'

export default function Footer(props) {
    return (
       <div className="show-all-tasks">
            <p className="h5">You have <span className="pendding">{props.allTask}</span> pendding tasks</p>
            <button className="btn btn-warning btn-clear" onClick={props.clearAll}>Clear All</button>
       </div>
    )
}
