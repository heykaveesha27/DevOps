import React from "react";
import './Batters.css';
import Partnershiprow from "./Partnershiprow";
function Partnership(){
    return(
       <div className="partnership">
            <div className="figureheads">
                    
                </div>
            <Partnershiprow batter1="Kusal Mendis" batter2="Charith Asalanka" runs={52} balls={38} maxRuns={110}/>
            <Partnershiprow batter1="Kusal Mendis" batter2="Kamindu Mendis" runs={12} balls={18} maxRuns={110}/>
            <Partnershiprow batter1="P.Anandapadmanadan" batter2="Kamindu Mendis" runs={101} balls={110} maxRuns={110}/>  
            <Partnershiprow />
            <Partnershiprow />
            <Partnershiprow />      
            <Partnershiprow />
            <Partnershiprow />
            <Partnershiprow />
            <Partnershiprow />
            <Partnershiprow />
         
       </div> 
    )
}

export default Partnership