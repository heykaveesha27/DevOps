import moduleName from 'module';
import React from 'react';

function IndiPlayer({ name, runs, balls}){
  return (
    <div
      className="indi"
      style={{
        
        padding: "3px 3px",
        margin: "0px 20px",
        borderRadius: "6px",
        color: "black",
        
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{name}</span>
      <span>{runs} ({balls})</span>
    </div>
  );
};
 export default IndiPlayer