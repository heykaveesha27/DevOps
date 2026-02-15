import React,{use, useState,useEffect} from "react";
import ScoreBar from "../ScoreCard/ScoreBar.jsx";
import Statbar from "../ScoreCard/Statbar.jsx";
import Batters from "../ScoreCard/Batters.jsx"
import Bowlers from "../ScoreCard/Bowlers.jsx"
import Actions from "../ScoreCard/Actions.jsx"
import Partnership from "../ScoreCard/Partnership.jsx";
import './Scorecard.css'

function Scorecard(){
const [showComponent,setShowComponent]=useState(false);
const [activeTab,setActiveTab]=useState("Batters");
const [active,setActive]=useState(false);
const [wasBelow640,setWasBelow640]=useState(window.innerWidth<640);
const [striker,setStriker]=useState(0);
    
const [wickets, setWickets]=useState(()=>Number(localStorage.getItem("wickets"))||0);
const [lakunu,setLakunu] = useState(()=>Number(localStorage.getItem("lakunu"))||0);
const [position,setPostition]=useState(0);
 const [firstBatter,setFirstBatter]=useState(0);
    const [secondBatter,setSecondBatter]=useState(1);

useEffect(() => {
  localStorage.setItem("wickets", wickets);
   localStorage.setItem("lakunu", lakunu);
   localStorage.setItem("firstBatter",firstBatter);
   localStorage.setItem("secondBatter",secondBatter);
}, [wickets,lakunu,firstBatter,secondBatter]);




    const [deliveries,setDeliveries]=useState(0.0);
    const [selectBowler,setSelectBowler]=useState(true);
   

    const newBatter=()=>{
      if(striker===0 && firstBatter>secondBatter && (firstBatter<=10||secondBatter<=10)){
        setFirstBatter(firstBatter+1);
      }else if(striker===0 && firstBatter<secondBatter && (firstBatter<=10||secondBatter<=10)){
        setFirstBatter(secondBatter+1);
      }else if(striker==1 && secondBatter>firstBatter && (firstBatter<=10||secondBatter<=10)){
        setSecondBatter(secondBatter+1);
      }else if(striker===0 && secondBatter<firstBatter && (firstBatter<=10||secondBatter<=10)){
        setSecondBatter(secondBatter+2);
      }
    }

    const wicket=()=>{
        if(position<10){
              setPostition((previousCount)=>previousCount+1);
        }
      
    }

   const newBowler=()=>{
        setSelectBowler((deliveries%6===5)?false:true)
   }

   const setTrue=()=>{
        setSelectBowler(false);
   }

    const toggleStriker=()=>{
        setStriker((prev)=>(prev===0^(deliveries%6===5)?1:0))
    }

    const one=()=>{
        setLakunu((prev)=>prev+1);
        incrementDeliveries();
        toggleStriker();
    }

    const two=()=>{
        setLakunu((prev)=>prev+2);
        incrementDeliveries();
    }

    const three=()=>{
        setLakunu((prev)=>prev+3);
        incrementDeliveries();
        toggleStriker();
    }

    const four=()=>{
        setLakunu((prev)=>prev+4);
        incrementDeliveries();
    }

    const six=()=>{
        setLakunu((prev)=>prev+6);
        incrementDeliveries();
    }

    const incrementDeliveries=()=>{
        setDeliveries((prev)=>prev+1);
        
    }


    useEffect(()=>{
           localStorage.setItem("position",JSON.stringify(position));

    },[position])


 

    const increment=()=>{
        setPostition((previousCount)=>previousCount+1);
        if(wickets<10){
            setWickets(position+1);
        }else{
            setWickets(10);
        }
            incrementDeliveries();
        newBatter();}
        
         
    
    useEffect(()=>{
   const handleSize=()=>{
    const isBelow640=window.innerWidth<640;
    if (wasBelow640 && !isBelow640) {
        setActiveTab("Batting");
      }

      setWasBelow640(isBelow640);
    };
    window.addEventListener("resize",handleSize);
        return () => window.removeEventListener("resize", handleSize);
  }, [wasBelow640]);

   
    const renderSection=()=>{
        switch(activeTab){
            
            case "Batting":
                return <Batters/>;
            case "Bowling":
                return <Bowlers/>;
            case "Partnership":
                return <Partnership/>;
            case "Actions":
                return <div className="actions-partial"><Actions/></div>;    
            default:
                return <Batters/>;
            
        }
    }


    return (
        <div className="scorecard">
         
               {showComponent &&<div className="" style={{position:"relative",zIndex:"9999"}}></div>}
            <ScoreBar 
            position={position}
            lakunu={lakunu}
            wickets={wickets}    
            deliveries={deliveries}
            striker={striker}
            firstBatter={firstBatter}
            secondBatter={secondBatter}/>
            <div className="" style={{zIndex:"100"}}>
            <Statbar/>
            </div>
           
            <div className="bottom">
            <div className="left">
            <div className="menu">
                <div className="category">
                <button onClick={()=>setActiveTab("Batting")}>Batting</button>
                <button onClick={()=>setActiveTab("Bowling")}>Bowling</button>
                <button onClick={()=>setActiveTab("Partnership")}>Partnerships</button>
                <button onClick={()=>setActiveTab("Actions")} className="actions-active">Actions</button>
                </div>
                
            </div>
            <div className="rendersection">
              
                    
                
                {renderSection()}
            </div>
            </div><div className="right">
            <Actions selectBowler={selectBowler} setTrue={setTrue} one={one} two={two} three={three} four={four} six={six} increment={increment} toggleStriker={toggleStriker} wicket={wicket}/>
           
            </div>
            </div>
            </div>
        
    );
}


export default Scorecard;