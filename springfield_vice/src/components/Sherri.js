import React, { Component } from "react";
import config from "./configSpringfieldVice.json";
import "./sherri.css";

class Sherri extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let rotation = "hue-rotate(0deg)";
    let blinking = "";
    let display = "block";
    let transition = "0s"
    let leftPosition = this.props.positionSherriX + this.props.defilement;
    let topPosition = this.props.positionSherriY;
    let classSherri = "sherriWalk";

    if (this.props.status === "killed") {
      rotation = "rotate(90deg)";
      blinking = "blink .5s infinite";
      transition = "0.5s";
      leftPosition = this.props.positionSherriX + this.props.defilement;
      topPosition = this.props.positionSherriY;
      setTimeout(() => { document.getElementById("Sherri").setAttribute("style", "display:none") }, 3000);

      classSherri = "sherriDead";
    }

    const sherriZone = {
      width: "30px",
      height: "30px",
      backgroundColor: "transparent",
      borderRadius: "50%",
      position: "absolute",
      left: leftPosition,
      top: topPosition,
      transform:
        "scale(" + this.props.positionSherriY * config.sherri.scale + ")",
      zIndex: this.props.positionSherriY
      //transition: '0.8s',
    };
    //console.log(this.props.positionSherriX, this.props.positionSherriY)

    const styleSherri = {
      display: display,
      transform: rotation,
      width: "28px",
      height: "55px",
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
        <div id="Sherri" style={sherriZone}>
          <div className={classSherri} style={styleSherri} />
        </div>
      </div>
    );
  }
}

export default Sherri;
