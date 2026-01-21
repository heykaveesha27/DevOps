import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import './Batting.css'
import axios from "axios";
function Bowling() {
    const bowlingteam = JSON.parse(localStorage.getItem("bowlingteam"))|| "";
    const [captain, setCaptain] = useState(null);
    const [wicketkeeper, setWicketkeeper] = useState(null);
    const [playerName,setPlayerName]=useState(Array(11).fill(""));
    const navigate = useNavigate();
 
    const handlePlayerChange=(index,value)=>{
    //Remove any existing (c) or (wk) from the value
    value = value.replace(/\s*\((C|WK)\)/g,'');

    const updatedPlayers=[...playerName];
    //Add (C) and/or(WK) if this player has those roles
    if(captain===index) value+="(C)";
    if(wicketkeeper===index) value+="(WK)";

    updatedPlayers[index] = value;
    setPlayerName(updatedPlayers);
  };
    
const handleCaptainClick=(index)=>{
  if(captain!==null){
    const updatedPlayers=[...playerName];
    updatedPlayers[captain]=updatedPlayers[captain].replace(/\s*\((C)\)/g,'');
    setPlayerName(updatedPlayers);
  }
  setCaptain(index);
  //update the player name to inclede(c)
const updatedPlayers=[...playerName];
let value=updatedPlayers[index].replace(/\s*\((C)\)/g, '');
value +="(C)";
updatedPlayers[index]=value;
setPlayerName(updatedPlayers);
};

const handleWicketKeeperClick=(index)=>{

    if(wicketkeeper!==null){
    const updatedPlayers=[...playerName];
    updatedPlayers[wicketkeeper]=updatedPlayers[wicketkeeper].replace(/\s*\((WK)\)/g,'');
    setPlayerName(updatedPlayers);
  }

  setWicketkeeper(index);
  //update the player name to inclede(c)
const updatedPlayers=[...playerName];
let value=updatedPlayers[index].replace(/\s*\((WK)\)/g, '');
value +="(WK)";
updatedPlayers[index]=value;
setPlayerName(updatedPlayers);
};

const handleSubmit = async (e) => {
    e.preventDefault();

    //create array of objects
    const team = playerName.map(name => ({playerName: name }));

      try {
        await axios.post("http://localhost:8080/api/bowlingteam/batch", team, {
          headers: { "Content-Type": "application/json"}
        });
        localStorage.setItem("firstbowl",JSON.stringify(team))
        alert("Bowling team saved!");
        navigate("/scorecard");
      } catch (error) {
        console.error("Error saving team:", error);
        alert("Error saving team");
      }
  };



    return(
     <div className="welcome-container batting">
                  <div className="quote1">
              <div className="logout"><Link to='/'><button>LogOut</button></Link></div>
                <div className="" style={{display:"flex",flexDirection:"column"}}>
            <h1 style={{fontSize:"64px",fontWeight:"lighter",}}>{bowlingteam} <span style={{fontWeight:"lighter" }}>XI</span></h1>
             
            </div>
            
            
              <div className="">   </div>
           </div>
              
           <div className= "battingcard">

          <div className="" style={{width:"10px"}}></div>  
        
<form onSubmit={handleSubmit}>
      <div className="inputBox">
        {[...Array(11)].map((_, i) => (
          <div className="input" key={i}>
            <input type="text"
             placeholder={`player ${i + 1}`}
             value={playerName[i]}
            onChange={e=>handlePlayerChange(i,e.target.value)}
            required />

            {/* Captain Button */}
            <button
              type="button"
              onClick={() => handleCaptainClick(i)}
              className="inptbtn"
              style={{
                marginLeft: "8px",
                
                color: captain === i ? "black" : "lightgray",
                border: "none",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              C
            </button>

            {/* WK Button */}
            <button
            className="inptbtn1"
              type="button"
              onClick={() => handleWicketKeeperClick(i)}
              style={{
                marginLeft: "8px",
                
                color: wicketkeeper === i ? "black" : "lightgray",
                border: "none",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              WK
            </button>
          </div>
        ))}

        
      </div>
      <button className="correct" type="submit"><BsCheck size="70px" color="white"/></button>

    </form>


          </div>
    </div>
      
    )
}

export default Bowling;
