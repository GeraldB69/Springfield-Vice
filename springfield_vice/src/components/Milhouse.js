import React,  { Component } from "react";
import config from "./configSpringfieldVice.json";
import "./milhouse.css";


class Milhouse extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let rotation = "hue-rotate(0deg)";
        let blinking = "";
        let display = "block";
        let transition = "0s"
        let leftPosition = this.props.positionMilhouseX + this.props.defilement;
        let topPosition = this.props.positionMilhouseY;
        let classMilhouse = "milhouseWalk";

        if (this.props.status === "killed") {

            rotation = "rotate(90deg)";
            blinking = "blink .5s infinite";
            transition = "0.5s";
            leftPosition = this.props.positionMilhouseX + this.props.defilement;
            topPosition = this.props.positionMilhouseY;
            setTimeout(() => {document.getElementById("Milhouse").setAttribute("style", "display:none")}, 3000);
            classMilhouse = "milhouseDead";
        }

    const milhouseZone = {
        width: "35px",
        height: "30px",
        backgroundColor: "",
        borderRadius: "50%",
        position: "absolute",
        left: leftPosition,
        top: topPosition,
        transform: "scale(" + this.props.positionMilhouseY * config.milhouse.scale + ")",
        zIndex: this.props.positionMilhouseY
        //transition: '0.8s',
        };

    const styleMilhouse = {
        display: display,
        transform: rotation,
        width: "35px",
        height: "60px",
        position: "absolute",
        left: "-5px",
        top: "-40px",
        margin: 0,
        padding: 0,
        animation: blinking,
        animationDelay: transition,
        transitionDelay: transition,
        transitionProperty: "all",
        transition: this.transitionDelay
        };

    return (
        <div>
            <div id="Milhouse" style={milhouseZone}>
            <div className={classMilhouse} style={styleMilhouse} />
            </div>
        </div>
    );
    }
}

export default Milhouse;