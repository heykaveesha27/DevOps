import React from "react";
import './selectbowler.css'
import Bowlerrow from "../ScoreCard/Bowlerrow";

function SelectBowler(){

    const firstbowl = JSON.parse(localStorage.getItem("firstbowl"))|| "";
    
    const bowlerData = [
        { name: (firstbowl[10]?.playerName)},
        { name:(firstbowl[9]?.playerName)},
        { name: (firstbowl[8]?.playerName)},
        { name: (firstbowl[7]?.playerName) },
        { name: (firstbowl[6]?.playerName) },
        { name: (firstbowl[5]?.playerName)},
        { name: (firstbowl[4]?.playerName)},
        { name: (firstbowl[3]?.playerName)},
        { name: (firstbowl[2]?.playerName)},
        { name: (firstbowl[1]?.playerName) },
        { name:(firstbowl[0]?.playerName)},
       
        

        // Add more bowlers here
    ];
    return(
        <div className="page">
            <div className="window">
                <p style={{fontSize:"20px",fontWeight:"bold"}}>Next Bowler</p>
                <div className="list">
                    {bowlerData.map((bowlerData, index)=>(
                        bowlerData.name && <Bowlerrow key={index} name={bowlerData.name}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SelectBowler