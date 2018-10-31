import React, { Component } from 'react';

const Filler = (props)=>{
    
    return(
        <div className="filler" style={{width:`${props.percentage}%`, background: "#1DA598",height: "100%",borderRadius: "inherit",transition: "width .2s ease-in"}}></div>
    )
}
export default Filler;