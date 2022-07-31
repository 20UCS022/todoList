import React from 'react';

const SlotM=(props)=>{

   let {x,y,z}=props; 
   if(x==y&&y==z)
   {
     return (
           <>
                  <div className="heading_style" >
                         {x} {y} {z} <br/>
                         this is matching
                          
                  </div>
           </>
     ) 
   }
   else{
    return (
           <>
                  <div className="heading_style" >
                         {x} {y} {z} <br/>
                         this is NOT matching
                          
                  </div>
           </>
     ) 
   }

}
export default SlotM;