import React from "react";
import './todolistapp.css'
import AddIcon from '@mui/icons-material/Add';
import { Add } from "@material-ui/icons";
const Todolists=(props)=>
{
    return (<>
            <div className="todo_style">
                <AddIcon/>
                onClick={()=>{
                    return props.onSelect(props.id);
                }}
             />
                  <li>{props.text}</li> 
            </div>
    </>)
}
export default Todolists ;