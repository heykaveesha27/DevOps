import React, { useState } from "react";
import './ScoreBar.css'; 
import IndiPlayer from "./Indiplayer";
function ScoreBar({wickets,lakunu,deliveries,striker,firstBatter,secondBatter}) {

    const firstbat =JSON.parse(localStorage.getItem("firstbat"));
    const bowlingTeam = JSON.parse(localStorage.getItem("bowlingteam"));
    const battingteam = JSON.parse(localStorage.getItem("battingteam"));
  
            localStorage.setItem("battingteam",JSON.stringify(battingteam));
    return (
        <div className="score-bar">
            <div className="battingname" >{battingteam ? battingteam.slice(0, 3).toUpperCase() : ""}</div>
            <div className="battersname">
                <IndiPlayer name={striker===0?firstbat[firstBatter]?.playerName+"*":firstbat[firstBatter]?.playerName} runs={0} balls={0}/>
                <IndiPlayer name={striker===1?firstbat[secondBatter]?.playerName+"*":firstbat[secondBatter]?.playerName} runs={0} balls={0}/>
            </div>
            <div className="score" ><div className="">
                {lakunu}-{wickets}
                <div className="" style={{fontSize:15,display:"flex",justifyContent:"center",color:"grey"}}>{Math.floor(deliveries/6)}.{deliveries%6}</div></div></div>
            <div className="bowlersname"><div className="">Samantha</div><div className="">{0}-{0}(0.0)</div></div>
            <div className="bowlingname">{bowlingTeam ? bowlingTeam.slice(0, 3).toUpperCase() : ""}</div>
            
        </div>
    );
}

export default ScoreBar;
