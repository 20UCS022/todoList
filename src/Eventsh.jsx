import React, { useState, useSyncExternalStore } from "react";
const Eventsh= ()=>{
    const time=new Date().toLocaleTimeString();
    const [ctime,setTime]=useState(time);
    const UpdateTime= () =>{
            const CurrTime=new Date().toLocaleTimeString();
            setTime(CurrTime);
   }
   setInterval(UpdateTime,10);

   const purple="green";
   const [bg,Newbg]=useState(purple);
   const [Name,SetName]=useState("Pravesh");
   const BgChange= ()=>{
        
        const Nextclr="black";
        Newbg(Nextclr);
        SetName("Kumar")
   }
   const BgBack= ()=>
   {
        const prevclr="green";
        Newbg(prevclr);
        SetName("Pravesh");
   }
  


    return (
        <>
            <div style={{textAlign:'center' ,marginTop:'15%',backgroundColor: bg }}>
             <h1 > {ctime} </h1>
             <button onMouseEnter={ BgChange} onMouseLeave={BgBack} >{Name}</button>
            </div>
            
        </>
    )
}
export default Eventsh;