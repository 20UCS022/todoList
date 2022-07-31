import React, { useState } from 'react';
const Formreact2= ()=>{
    
    const [fullName,setFullname]=useState({
                fname:'',
                lname:'', 
                email:'',
                mobileNumber:'',  
    })
    const onsubmits=(event)=>{
        event.preventDefault();
    }
    const inputEvent=(event)=>{
        const a=event.target.value;
        const b=event.target.name;
        setFullname((prevValue)=>{
            if(b==="fname")
            {
                return  { ...fullName,fname:a};   
            }
            else if(b==="lname")
            {
                return {
                    ...fullName,
                    lname:a 
                };
            }
            else if(b==="email")
            {
                return {
                ...fullName,
                email:a
                }
            }
            else if(b==="mob")
            {
                return {
                ...fullName,
                mobileNumber:a
                }

            }
            
        })
       

    }
    
    return (
        <>
       
           <div style={{textAlign:'center',marginTop:'50px'}}>
           <form onSubmit={onsubmits}>
                <h1> Hello {fullName.fname} {fullName.lname}  </h1>
                   <p>your email   :{ fullName.email}</p>
                   <p>your mobileNumber   :{fullName.mobileNumber}</p>
                <input
                        type=" text " 
                        placeholder="enter your first name" 
                        name="fname"
                        //value={fullName.fname}
                        style={ {marginTop:'20px',borderWidth:'5px',input:'150*30' }}
                        onChange={inputEvent}
                />
                 <br/>
                <input 
                        type= " text " 
                        placeholder=" enter your lastname "
                        name="lname"
                       // value={fullName.lname}
                        style={ {marginTop:'20px'}}
                        onChange={inputEvent}
                / > 
                <br/>
                <input 
                        type= "email" 
                        placeholder=" enter your email"
                        name="email"
                        value={fullName.email}
                        style={ {marginTop:'20px'}}
                        onChange={inputEvent}
                / > 
                <br/>
                <input 
                        type= " number" 
                        placeholder=" enter your mobile number "
                        name="mob"
                       value={fullName.mobileNumber}
                        style={ {marginTop:'20px'}}
                        onChange={inputEvent}
                / > 
                <br/>
                <button type='submit'  >Log In</button>
                </form>
             </div>
          

           
        </>
    )
}
export default Formreact2;