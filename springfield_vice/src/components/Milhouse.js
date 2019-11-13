import React from "react";
import config from "./configSpringfieldVice.json";
import "./milhouse.css";


function Milhouse (props) {
    const milhouseZone = {
        width: "35px",
        height: "30px",
        backgroundColor: "",
        borderRadius: "50%",
        position: "absolute",
        left: props.positionMilhouseX,
        top: props.positionMilhouseY,
        transform: "scale(" + props.positionMilhouseY * config.milhouse.scale + ")",
        zIndex: props.positionMilhouseY
        //transition: '0.8s',
        };

    const styleMilhouse = {
        width: "35px",
        height: "70px",
        position: "absolute",
        left: "-5px",
        top: "-40px",
        margin: 0,
        padding: 0
        };
    return (
        <div>
            <div id="Milhouse" style={milhouseZone}>
            <div className="milhouseWalk" style={styleMilhouse} />
            </div>
        </div>
    );
}

export default Milhouse;