import React, { Component } from "react";
import config from "./configSpringfieldVice.json";
import "./seymour.css";

class Seymour extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.positionInitialeX = this.props.positionSeymourX;
    this.positionInitialeY = this.props.positionSeymourY;
  }

  render() {
    let rotation = "hue-rotate(0deg)";
    let hueRotate = "rotate(0deg)";
    let leftPosition = this.props.positionSeymourX + this.props.defilement;
    let topPosition = this.props.positionSeymourY;
    let classSeymour = "seymourWalk";

    if (this.props.status === "killed") {
      rotation = "rotate(90deg)";
      hueRotate = "hue-rotate(90deg)";
      leftPosition = this.positionInitialeX + this.props.defilement;
      topPosition = this.positionInitialeY;
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
      transform: rotation,
      filter: hueRotate,
      width: "40px",
      height: "70px",
      position: "absolute",
      left: "-10px",
      top: "-40px",
      margin: 0,
      padding: 0
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
