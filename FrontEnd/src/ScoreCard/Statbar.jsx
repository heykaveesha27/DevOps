import React from "react";
import './ScoreBar.css'
function Statbar(){
    const firstbat =JSON.parse(localStorage.getItem("battingteam"));
    const firstbowl =JSON.parse(localStorage.getItem("bowlingteam"));
    const toss = JSON.parse(localStorage.getItem("toss"));

    const stat=()=>{
        if(firstbat===toss){
            return({firstbat}+"won the tose and chose to bat first");
        }else{
            return({firstbowl}+"won the toss and chose to bowl first");
        }
    }

    return(
        <div className="statbar">
            <p>{toss===firstbat?`${firstbat} won the toss and chose to bat`:`${firstbowl} won the toss and chose to bat`}</p>
        </div>
    )
}

export default Statbar