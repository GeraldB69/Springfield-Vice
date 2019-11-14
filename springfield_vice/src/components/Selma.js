import React, { Component } from "react";
import config from "./configSpringfieldVice.json";
import "./selma.css";

class Selma extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let rotation = "hue-rotate(0deg)";
    let blinking = "";
    let display = "block";
    let transition = "0s"
    let leftPosition = this.props.positionSelmaX + this.props.defilement;
    let topPosition = this.props.positionSelmaY;

    if (this.props.status === "killed") {
      rotation = "rotate(90deg)";
      blinking = "blink .5s infinite";
      transition = "0.5s";
      leftPosition = this.props.positionSelmaX + this.props.defilement;
      topPosition = this.props.positionSelmaY;
      setTimeout(() => {document.getElementById("Selma").setAttribute("style", "display:none")}, 3000);
    }

    const selmaZone = {
      width: "30px",
      height: "30px",
      backgroundColor: "transparent",
      borderRadius: "50%",
      position: "absolute",
      left: leftPosition,
      top: topPosition,
      transform:
        "scale(" + this.props.positionSelmaY * config.selma.scale + ")",
      zIndex: this.props.positionSelmaY
      //transition: '0.8s',
    };
    //console.log(this.props.positionSelmaX, this.props.positionSelmaY)

    const styleSelma = {
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
    };

    return (
      <div>
        <div id="Selma" style={selmaZone}>
          <div className="selmaWalk" style={styleSelma} />
        </div>
      </div>
    );
  }
}

export default Selma;
