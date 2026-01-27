import React from "react";  
import './Batters.css'
function Batterrow({ name, runs, balls }){
    return(
        <div
      className="batterrow"
      
    >
      <span>{name}</span>
      <div className="fig">
      <span style={{fontWeight:"bold"}}>{runs}</span>
      <span style={{fontWeight:"normal"}}>{balls}</span>
      <span></span>
      </div>
    </div>
    )
}

export default Batterrow