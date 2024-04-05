import React from "react";
import { ReactDOM } from "react";
import "../styles/most_wanted.css"
import most_wanted_data from "../data/most_wanted_data";
import { Link } from "react-router-dom";


export default function Balance(){
    const myList = most_wanted_data.map(
        (item) => 
        <Link to={`/dets/${item.name}`}>  
        <div className="flip-card item">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={item.img} alt="Avatar"/>
          </div>
          <div className="flip-card-back">
            <h1>{item.name}</h1> 
            <p>${item.price}</p> 
          </div>
        </div>
      </div>
      </Link>

    )



    return(
        <div  className="col-12 most_wanted p-5">
            <h3>MOST WANTED ITEMS</h3>

            <div className="most_wanted_items">
              {myList}
            </div>
            <h3><Link to={"/shop all"}>Shop all items</Link></h3>
        </div>
    )
}