import React, { Component } from 'react';
import Filler from './Filler';

const ProgressBar = (props)=> {
    var style = {
        position: "relative",
        height: "10px",
        width: "400px",
        borderRadius: "50px",
        border : "1px solid #333",
        overflow: "hidden",
        top:"100px",
        left : "100px",
        margin :"100px"
    }
    return (
    <div style={style}>
        <Filler  percentage={props.percentage}/>
    </div>);
}


export default ProgressBar;