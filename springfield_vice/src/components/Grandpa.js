import React from "react";
import config from "./configSpringfieldVice.json";
import "./grandpa.css";


function Grandpa (props) {
    const grandpaZone = {
        width: "45px",
        height: "30px",
        backgroundColor: "",
        borderRadius: "50%",
        position: "absolute",
        left: props.positionGrandpaX,
        top: props.positionGrandpaY,
        transform: "scale(" + props.positionGrandpaY * config.grandpa.scale + ")",
        zIndex: props.positionGrandpaY
        //transition: '0.8s',
        };

    const stylegrandpa = {
        width: "50px",
        height: "70px",
        position: "absolute",
        left: "-5px",
        top: "-40px",
        margin: 0,
        padding: 0
        };
    return (
        <div>
            <div id="Grandpa" style={grandpaZone}>
            <div className="grandpaWalk" style={stylegrandpa} />
            </div>
        </div>
    );
}

export default Grandpa;