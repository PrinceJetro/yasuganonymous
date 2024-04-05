import React from "react";
import { ReactDOM } from "react";
import data from "../data/featured_data"
import "../styles/features.css"

export default function Features(){
    const myList = data.map(item =>(
        <div>
            <h1>{item.name}</h1>
            <p>{item.desc}</p>
            <img src={item.img}/>
        </div>
    ))
    return(
        <div className="features_div">
            {myList}
        </div>
    )
}