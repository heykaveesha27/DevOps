import React from "react";
import './Actions.css'


function Actions({increment,one,two,three,four,six,setTrue,selectBowler,wicket}){


    return(
        <div className="actions">
           <p>Actions</p>
          { selectBowler && <div className="buttonstack">
            <button className="btn1" onClick={one}>1</button>
            <button className="btn1" onClick={two}>2</button>
            <button className="btn1" onClick={three}>3</button>
            <button className="btn1" onClick={four}>4</button>
            <button className="btn1" onClick={six}>6</button>
            <button className="btn1" onClick={increment}>W</button>
            <button className="btn1" onClick={increment}>C</button>
            <button className="btn1" onClick={increment}>LBW</button>
            <button className="btn1" onClick={increment}>St</button>
            <button className="btn1" onClick={increment}>HW</button>
            <button className="btn1">Ro</button>
            <button className="btn1">Wide</button>
            <button className="btn1">Nb</button>
            <button className="btn1">Byes</button>
            <button className="btn1">LB</button>
           </div>}
           {!selectBowler&& <div className="buttonstack"> 
                                <form >
                        <p style={{ marginTop: "0px" }}>Select a Match</p>
                        {(
                            <>
                                <div className="inputwrap">
                                    <input  onChange={(e) => setMatchName(e.target.value)} type="text" placeholder="Match Name" required />
                                </div>
                            </>
                        )}
                        <div className="buttonrow">
                            <button type="button" on click>Ok</button>
                        </div>
                    </form>
            </div>}
        </div>
    )
}

export default Actions