import React, { Component } from "react";
import config from "./configSpringfieldVice.json";
import "./selma.css";

class Selma extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.positionInitialeX = this.props.positionSelmaX;
    this.positionInitialeY = this.props.positionSelmaY;
  }

  render() {
    let rotation = "hue-rotate(0deg)";
    let hueRotate = "rotate(0deg)";
    let leftPosition = this.props.positionSelmaX + this.props.defilement;
    let topPosition = this.props.positionSelmaY;

    if (this.props.status === "killed") {
      rotation = "rotate(90deg)";
      hueRotate = "hue-rotate(90deg)";
      leftPosition = this.positionInitialeX + this.props.defilement;
      topPosition = this.positionInitialeY;
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
      transform: rotation,
      filter: hueRotate,
      width: "50px",
      height: "70px",
      position: "absolute",
      left: "-10px",
      top: "-40px",
      margin: 0,
      padding: 0
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
