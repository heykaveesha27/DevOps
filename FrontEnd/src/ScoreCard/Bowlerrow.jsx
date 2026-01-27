import React from "react";  
import './Batters.css'
function Bowlerrow({ name, runs, overs,wickets,economy }){
    return(
        <div
      className="bowlerrow"
      
    >
      <span>{name}</span>
      <div className="figb">
      <span>{overs}</span>
      <span>{runs}</span>
      <span>{wickets}</span>
      <span>{economy}</span>
      </div>
    </div>
    )
}

export default Bowlerrow