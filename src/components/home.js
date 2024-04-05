import React from "react";
import { ReactDOM } from "react";
import Navbar from '../components/navbar';
import "../styles/home.css";
import { Outlet, Link } from "react-router-dom";

import Features from "./features";


export default function Home(){
    return(
        <div className="container-fluid  p-0 m-0">
            <Navbar/>
            <div className="intro row m-0">
                <div className="soro-soke-div">
                    <h1>Speak Up Anonymously <br/>(Soro Soke)</h1>
                    <p>Your Voice Matters!</p>
                    <button className="btn">Lodge A Complaint</button>
                </div>
            </div>

            <div className="soro-soke-div-mobile">
                    <h1>Speak Up Anonymously <br/>(Soro Soke)</h1>
                    <p>Your Voice Matters!</p>
                    <button className="btn">Lodge A Complaint</button>
                </div>
            <h1 className="feature_header mt-5">FEATURES</h1>
            <Features/>

        </div>
    )
}