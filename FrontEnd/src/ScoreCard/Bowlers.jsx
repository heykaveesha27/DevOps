import React from "react";
import './Batters.css';
import Bowlerrow from "./Bowlerrow.jsx";

function Bowlers() {

 const firstbowl =JSON.parse(localStorage.getItem("firstbowl"));

    const bowlerData = [
        { name: (firstbowl[10]?.playerName), overs: 7, runs: 45, wickets: 2 },
        { name:(firstbowl[9]?.playerName), overs: 5, runs: 30, wickets: 1 },
        { name: (firstbowl[8]?.playerName), overs: 5, runs: 30, wickets: 1 },
        { name: (firstbowl[7]?.playerName), overs: 5, runs: 30, wickets: 1 },
        { name: (firstbowl[6]?.playerName), overs: 5, runs: 30, wickets: 1 },
        { name: "", },
        { name: "", },
        { name: "", },
        { name: "",  },
        { name: "",  },
        { name: "", },
       
        

        // Add more bowlers here
    ];

    return (
        <div className="batters">
            <div className="figureheads">
                <div className=""></div>
                <div className="sub" style={{display:"flex", justifyContent:"space-around"}}>
                    <p data-label="Overs">Overs</p>
                    <p data-label="Runs">Runs</p>
                    <p data-label="Wickets">Wickets</p>
                    <p data-label="Economy">Economy</p>
                    </div>
            </div>
            {bowlerData.map((bowler, index) => (
                <Bowlerrow
                    key={index}
                    name={bowler.name}
                    overs={bowler.overs}
                    runs={bowler.runs}
                    wickets={bowler.wickets}
                    economy={(bowler.overs > 0 ? (bowler.runs / bowler.overs).toFixed(2) : "")}
                />
            ))}
        </div>
    );
}

export default Bowlers;
