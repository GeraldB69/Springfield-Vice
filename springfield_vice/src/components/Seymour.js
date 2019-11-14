import React, { Component } from "react";
import config from "./configSpringfieldVice.json";
import "./seymour.css";

class Seymour extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let rotation = "hue-rotate(0deg)";
    let blinking = "";
    let display = "block";
    let transition = "0s"
    let leftPosition = this.props.positionSeymourX + this.props.defilement;
    let topPosition = this.props.positionSeymourY;
    let classSeymour = "seymourWalk";

    if (this.props.status === "killed") {
      rotation = "rotate(90deg)";
      blinking = "blink .5s infinite";
      transition = "0.5s";
      leftPosition = this.props.positionSeymourX + this.props.defilement;
      topPosition = this.props.positionSeymourY;
      setTimeout(() => {document.getElementById("Seymour").setAttribute("style", "display:none")}, 3000);
      classSeymour = "seymourDead";
    }
    const seymourZone = {
      width: "30px",
      height: "30px",
      backgroundColor: "transparent",
      borderRadius: "50%",
      position: "absolute",
      left: leftPosition,
      top: topPosition,
      transform:
        "scale(" + this.props.positionSeymourY * config.seymour.scale + ")",
      zIndex: this.props.positionSeymourY
      //transition: '0.8s',
    };
    //console.log(this.props.positionSeymourX, this.props.positionSeymourY)

    const styleSeymour = {
      display: display,
      transform: rotation,
      width: "40px",
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
        <div id="Seymour" style={seymourZone}>
          <div className={classSeymour} style={styleSeymour} />
        </div>
      </div>
    );
  }
}

export default Seymour;
