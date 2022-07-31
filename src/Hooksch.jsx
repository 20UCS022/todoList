import React, { useState } from "react";
//import Hooks from "./Hooks";
const Hooksch=()=>{
        //const Time=new Date().toLocaleTimeString();
        const [curr_time,setTime]=useState(0);
          const CurrTime= ()=>{
          const time=new Date().toLocaleTimeString();
          setTime(time);
          }
          setInterval(CurrTime,500\);
     return (
        <>
            <div style={{textAlign:'center',marginTop:'100px'}}>
            <h1>{curr_time}</h1>
           
            </div>
        </>
     )

}
export default Hooksch;