import React from "react";
import Images from "./Images"
function Card(props)
{
   return ( <>
        
      <div className="cards">
         <div className="card">
            <Images imgsrc={props.imgsrc}/>
             <div className="card__info">
                <span className="card__category">{props.title}</span>
                <h3 className="card__title"> {props.title}</h3>
                <a  href={props.link}  target="_blank" >
                     <button>  Watch now  </button>
               </a>
               
             </div>
         </div>
      </div>

    </>);
}
export default Card;
/* css code for this 

 *{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: #d2dbdd;
}
  
  
  .heading_style {
    padding: 30px 30px;
    text-align: center;
    text-transform:capitalize;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #868686;
    background-color: #fff;
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  
  .card {
    width: 100%;
    height: auto;
  }
  
  .card {
    margin: 6%;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
    background-color: #fff;
    width: 21.25%;
    border-radius: 12px;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
    float: left;
  }
  
  .card:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
  }
  
  .card__img {
    width: 100%;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  
  .card__info {
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 24px 24px;
    background-color: #fff;
  }
  
  .card__category {
    font-family: "Times New Roman", Times, serif;
    text-transform: capitalize;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #868686;
    background-color: #fff;
  }
  
  .card__title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: "Times New Roman", Times, serif;
    background-color: #fff;
    text-transform: capitalize;
  }
  
  button {
    padding: 5px 8px;
    font-family: "Times New Roman", Times, serif;
    text-transform: capitalize;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #868686;
    background-color: #fff;
    outline: none;
    border: 1px solid black;
    cursor: pointer;
  }