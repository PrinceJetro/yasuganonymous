import React from "react";
import { ReactDOM } from "react";
import men_data from "../data/men_data";
import women_data from "../data/women_data";
import all from '../data/all_products';
import Navbar from "./navbar";
import  "../styles/men.css";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";



export default function Men(){

    const { gender } = useParams();
    console.log(gender)
    let myList
    if(gender == "men"){
         myList = men_data.map(
            item =>(
                <div>
                <Link to={`/dets/${item.name}`}>  
                        <img src={item.img}/>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        </Link>
                    </div> 
            )
        )
    }
    else if(gender == "women"){
         myList = women_data.map(
            item =>(
                <div>
                <Link to={`/dets/${item.name}`}>  
                        <img src={item.img}/>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        </Link>
                    </div> 
            )
        )
    }
    else if(gender == "shop all"){
         myList = all.map(
            item =>(
                    <div>
                <Link to={`/dets/${item.name}`}>  
                        <img src={item.img}/>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        </Link>
                    </div> 
            )
        )
    }


    return(
        <div>
            <Navbar/>
            <h1 className="men_header">{gender.toUpperCase()}</h1>


            <div className="men_products">
                {myList}
            </div>
        </div>
    )
}