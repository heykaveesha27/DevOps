import React, { useState } from "react";
import './Dashboard.css';
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure axios is imported

function MatchSelector1() {
    const [battingteam, setBattingTeam] = useState("");
    const [bowlingteam, setBowlingTeam] = useState("");
    const [matchdate, setMatchDate] = useState("");
    const [matchname, setMatchName] = useState("");
    const [venue, setVenue] = useState("");
    const [toss, setToss] = useState("");
    const [showInput, setShowInput] = useState(false);
    const [showDialogBox, setShowDialogBox] = useState(true);
    const [userId,setUserId]=useState("");

    const navigate = useNavigate();

    const handleClick = () => setShowInput(!showInput);
    const cancelClick = () => setShowDialogBox(false);

    const handleDateChange =(e)=>{
        const rawDate = new Date(e.target.value);
        const formattedDate = rawDate.toISOString().split('T')[0];
        setMatchDate(formattedDate);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId=localStorage.getItem("userId");

        localStorage.setItem("position",0);

        const matchData = {
            battingteam,
            bowlingteam,
            matchdate,
            matchname,
            venue,
            toss
            
        };

        try {
            await axios.post("http://15.134.222.250:8081/api/matches", matchData);
            alert("Match Initiated Successfully");
            navigate('/batting',{state:{battingteam}});
            localStorage.setItem("bowlingteam",JSON.stringify(bowlingteam));
            localStorage.setItem("battingteam",JSON.stringify(battingteam));
            localStorage.setItem("toss",JSON.stringify(toss));
        } catch (error) {
            console.error("Match initiation failed:", error);
            alert("Match Initiation Failed");
        }
    };

    return (
        <div className="parent">
            {showDialogBox && (
                <div className="MatchSelector1">
                    <form onSubmit={handleSubmit}>
                        <p style={{ marginTop: "0px" }}>Select a Match</p>
                        {showInput && (
                            <>
                                <div className="inputwrap">
                                    <input value={matchname} onChange={(e) => setMatchName(e.target.value)} type="text" placeholder="Match Name" required />
                                </div>
                                <div className="inputwrap">
                                    <input value={matchdate} onChange={handleDateChange} type="date" placeholder="Date" required  />
                                </div>
                                <div className="inputwrap">
                                    <input value={venue} onChange={(e) => setVenue(e.target.value)} type="text" placeholder="Venue" required />
                                </div>
                                <div className="inputwrap">
                                    <input value={toss} onChange={(e) => setToss(e.target.value)} type="text" placeholder="Toss" required />
                                </div>
                                <div className="inputwrap">
                                    <input value={battingteam} onChange={(e) => setBattingTeam(e.target.value)} type="text" placeholder="Batting Team" required />
                                </div>
                                <div className="inputwrap">
                                    <input value={bowlingteam} onChange={(e) => setBowlingTeam(e.target.value)} type="text" placeholder="Bowling Team" required />
                                </div>
                              
                            </>
                        )}
                        <div className="buttonrow">
                            <button type="button" onClick={handleClick}>New</button>
                            <button type="button">Recent</button>
                            <button type="submit">Finish</button>
                            <button type="button" onClick={cancelClick}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default MatchSelector1;
