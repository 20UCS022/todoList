import React, { useState } from "react";
import Todolists from './Todolists'
const Todolistapp=()=>{

    const [item,setItem]=useState();
    const [itemList,setItemList]=useState([]);
    const inputEvent=(event)=>{
            setItem(event.target.value);   
    }
    const additem=()=>{
         
        if(item==="")
        {
            setItemList((olditem)=>{
                return [...olditem];
            })
        }
        else
         setItemList((olditem)=>{
            return [...olditem,item];
         })
         setItem("");
    } 
    const deleteItem=(id)=>{
         //console.log("deleted");
         setItemList((olditem)=>{
            return  olditem.filter((arrElement,index)=>{
                return id!==index;
             })
         })
         
    }
   
    return <>
            <div className="main_div">
                
                <div className="center_div">
                    <br/>
                    <h1>Todo List</h1>
                    <br/>
                    <input 
                    type="text"
                    placeholder="Add item to do"
                    onChange={inputEvent}
                    value={item}
                    />
                    <button onClick={additem} > + </button>
                    <br/>
                    <br/>
                    <ol>
                       {itemList.map((itemval,index)=>{
                            return <Todolists 
                                     key={index}
                                     id={index}
                                     text={itemval}
                                     onSelect={deleteItem}
                                    />
                       })}
                    </ol>


                </div>

            </div>


    </>
}
export default Todolistapp;