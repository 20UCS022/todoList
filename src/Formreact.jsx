import React, { useState } from "react";
const Formreact= ()=>{
    const [name,setName]=useState("Pravesh");
    const  eventChange=(event)=>{
        setName(event.target.value);
    }
    const [fullname,setFullname] =useState(" ...................");

    const updateName= ()=>{
         setFullname(name);
    }
    
        return (
            <>
                <div style={{textAlign:'center' }} >
                 <h1 style={{marginTop:'40px'}}> Hello {fullname}</h1>
                 <input style={{marginTop:'20px'}}type="text" placeholder="enter your sweet Name"
                    onChange={eventChange}     
                  />
                 <br style={ {marginTop:'20px'}}/>
                 <button  onClick={updateName}   >Click me</button>
                 </div>
            </>
        )

}
export default Formreact;