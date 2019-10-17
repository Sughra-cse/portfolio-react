import React from "react";
import profile from "./profile.jpg";
import "./StyleHeader.css";

function Header(){
    return(
        <div className="mainParent">
         <div className="classprofile">
           <img src={profile} alt="error"/>
         </div>
         <div>
        <h1>Bi bi Soghra</h1>
        <h3>Computer Science Engineer.</h3>
         </div>
        </div>
    );
}
export default Header;