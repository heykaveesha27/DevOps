import React from "react";
import './Batters.css';


function Partnershiprow({batter1,batter2,balls,runs,maxRuns}){
//  const barWidth = (runs/maxRuns)*100%;
    return(
             <div className="partnershiprow">
              <div className="players">
                <span>{batter1}</span>
              </div>
              
              <div className="bar-container">
                <div className="bar" style={{ width: `${(runs / maxRuns) * 100}%` }}></div>
              </div>
              <div className="players">
                <span>{batter2}</span>
              </div>
              <div className="details">
                <span style={{fontWeight:"bold"}}>{runs}</span><span>({balls})</span>
              </div>
    </div>
    )
    
}

export default Partnershiprow