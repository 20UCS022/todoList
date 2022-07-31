import React from "react";
import './todolistapp.css'
const Todolists=(props)=>
{
    return (<>
            <div className="todo_style">
             <i className="fa-solid fa-circle-xmark"
                onClick={()=>{
                    return props.onSelect(props.id);
                }}
             />
                  <li>{props.text}</li> 
            </div>
    </>)
}
export default Todolists ;