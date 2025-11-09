import tagImage from "../assets/TAG.png";
import { Link } from "react-router-dom";
import "./WelcomePage.css"; // Create this CSS file

function WelcomePage() {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">
          Welcome to the <span className="">ScoreCard</span>
        </h1>
 
        <p className="tag">JUST RECORD YOUR GAME</p>
       
    <Link to='/login'> <button className="welcome-button">Sign In</button></Link>   
            <p style={{marginTop:"20px"}}>Pick your teams and record your game statistics easily</p>
        
      </div>
    </div>
  );
}

export default WelcomePage;
