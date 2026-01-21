import React, { useState } from 'react'
import './login.css'
import MatchSelector from './MatchSelector';
import { Link } from 'react-router-dom'


function Navbar({onToggleComponent}){
  
const[show,setShow]=useState(false);
   const[showInput, setShowInput]=useState(false);
    const[showDialogBox,setShowDialogBox]=useState(true);

    const handleClick=()=>{
        setShowInput(!showInput);
    }
    const cancelClick=()=>{
        setShowDialogBox(false);
    }
    
const newClick=()=>{
  setShow(!show);
}
  return (
    <div  className="upper">
        <p style={{fontVariant:"small-caps",fontStyle:"italic",fontWeight:"bolder", fontSize:"24px",marginLeft:"10px"}}>ScoreCard</p>
        <nav style={{marginRight:"10px"}}>
            
              <div className="" style={{display:"flex",gap:"10px"}}> 
                <button onClick={onToggleComponent}>New</button>
                <Link to="/"> <button>LogOut</button></Link>
               </div>
               
    
                
        </nav>
    </div>
  )
}

export default Navbar

