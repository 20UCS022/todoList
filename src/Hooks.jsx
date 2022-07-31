
import React, { useState } from 'react';
//let count=1;

                const Hooks= ()=> {

                    //const state=useState();
                    const [count ,setcount]=useState(0);
                    const IncNuM= ()=>{

                        setcount(count+8);
                    // console.log("clicked "+count);
                    }
                    const DecNuM=()=>{
                        setcount(count-4);
                    }

                    return (
                        <>
                            <div style={ {textAlign:'center'}}>
                            <h1 > {count}</h1>
                            <button onClick={IncNuM} style={{color:'balck', backgroundColor:'blue'}}   >  <h2 style={{ backgroundColor:'darkbalck' }} >INCREAMENT ME</h2></button>
                            <h1 className> {count}</h1>
                            <button onClick={DecNuM} style={{color:'balck', backgroundColor:'blue'}}   >  <h2 style={{ backgroundColor:'darkbalck' }} >DECREMENT ME</h2></button>
                            </div>
                        </>
                    )

                }
                export default Hooks;