import React from "react";
import './Batters.css'
import Batterrow from "./Batterrow";
function Batters( name,runs,balls){


    const firstbat =JSON.parse(localStorage.getItem("firstbat"));

    return(
        <div className="batters">
            <div className="figureheads">
                <div className=""></div>
                <div className="sub" style={{display:"flex", justifyContent:"space-around",width:"200px"}}>
                    <p data-label="R">Runs</p>
                    <p data-label="B">Balls</p>
                    <p data-label="FoW">FoW</p>
                    </div>
                </div>
            <Batterrow name={firstbat[0]?.playerName} runs='' balls=''/>
            <Batterrow name={firstbat[1]?.playerName}/>
            <Batterrow name={firstbat[2]?.playerName}/>
            <Batterrow name={firstbat[3]?.playerName}/>
            <Batterrow name={firstbat[4]?.playerName}/>
            <Batterrow name={firstbat[5]?.playerName}/>
            <Batterrow name={firstbat[6]?.playerName}/>
            <Batterrow name={firstbat[7]?.playerName}/>
            <Batterrow name={firstbat[8]?.playerName}/>
            <Batterrow name={firstbat[9]?.playerName}/>
            <Batterrow name={firstbat[10]?.playerName}/>
            
        </div>
    )
}

export default Batters