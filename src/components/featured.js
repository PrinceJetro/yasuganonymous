import React from "react";
import { ReactDOM } from "react";
import "../styles/featured.css"
import featured_data from "../data/featured_data";

export default function Featured(){
    const myList = featured_data.map(
        item => 
        <img src={item}/>
        )
    
    return(
        myList
    )
}