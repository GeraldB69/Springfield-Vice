import React, { Component } from "react";
import config from "./configSpringfieldVice.json";
import "./grandpa.css";

class Grandpa extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let rotation = "hue-rotate(0deg)";
    let blinking = "";
    let display = "block";
    let transition = "0s"
    let leftPosition = this.props.positionGrandpaX + this.props.defilement;
    let topPosition = this.props.positionGrandpaY;
    let classGrandpa = "grandpaWalk";

    if (this.props.status === "killed") {
      rotation = "rotate(90deg)";
      blinking = "blink .5s infinite";
      transition = "0.5s";
      leftPosition = this.props.positionGrandpaX + this.props.defilement;
      topPosition = this.props.positionGrandpaY;
      setTimeout(() => { document.getElementById("Grandpa").setAttribute("style", "display:none") }, 3000);
      classGrandpa = "grandpaDead";
    }

    const grandpaZone = {
      width: "30px",
      height: "30px",
      backgroundColor: "",
      borderRadius: "50%",
      position: "absolute",
      left: leftPosition,
      top: topPosition,
      transform:
        "scale(" + this.props.positionGrandpaY * config.grandpa.scale + ")",
      zIndex: this.props.positionGrandpaY
      //transition: '0.8s',
    };
    //console.log(this.props.positionGrandpaX, this.props.positionGrandpaY)

    const styleGrandpa = {
      display: display,
      transform: rotation,
      width: "50px",
      height: "70px",
      position: "absolute",
      left: "-10px",
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
        <div id="Grandpa" style={grandpaZone}>
          <div className={classGrandpa} style={styleGrandpa} />
        </div>
      </div>
    );
  }
}

export default Grandpa;
