import React from "react";
import Card from "./Card";
import Sdata from "./Sdata"
import "./index.css";
const Amazonapp =  ()=>(
      <>
        <h1  className="heading_style"> Top 3 web series on prime video </h1>
       {
            Sdata.map( function amazoncard(cardval){
              return (
                            <Card 
                            key={cardval.id}  
                            imgsrc={cardval.imgsrc}
                            title={cardval.title}
                            sName={cardval.sName}
                            link={cardval.link}
                            />
                     );
              })
       };

      </>
)
export default Amazonapp;