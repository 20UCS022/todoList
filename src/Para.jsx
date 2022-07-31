import React from "react";

let currtime=new Date();
let date=currtime.toDateString();
let time=currtime.toTimeString();
const heading={
    textAlign:'center'
}

function Para()
{
    return  ( <p>  <p style={heading}>{ ` ${time}`} </p> 
                   <p style={heading}>{ ` ${date}`}</p> 
            </p> );
}

 export default Para;