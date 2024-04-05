import React from "react";
import { ReactDOM } from "react";
import "../styles/footer.css";
import logo from "../images/logo.png"

export default function Footer(){
    return(
        <footer>
            
            <div className="row div1">
                <div className="col-sm-6 left ">
                    <p>Report a Case Anonymously</p> <br/>
                    <p>Upload a photo/video evidence</p>
                </div>
                <div className="col-sm-6 right ">
                    <div>
                        <img src={logo}/>
                        <span>YASUG</span>
                    </div>
                    <a href="mailto:yasugspeakup@gmail.com">yasugspeakup@gmail.com</a>
                </div>

            </div>


            <div className="row div2">
                <p>© 2024 — Copyright</p>
                <div>
                    <i className="fa fa-whatsapp"></i>
                    <i className="fa fa-paper-plane"></i>
                    <span className="pipe">|</span>
                    <i className="fa fa-globe"></i>
                    <i></i>
                </div>

                <p>Privacy</p>

            </div>

        </footer>
    )
}