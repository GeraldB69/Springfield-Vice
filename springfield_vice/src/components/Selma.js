import React, { Component } from "react";
import config from "./configSpringfieldVice.json";
import "./selma.css";

class Selma extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const selmaZone = {
      width: "30px",
      height: "30px",
      backgroundColor: "red",
      borderRadius: "50%",
      position: "absolute",
      left: this.props.positionSelmaX,
      top: this.props.positionSelmaY,
      transform:
        "scale(" + this.props.positionSelmaY * config.selma.scale + ")",
      zIndex: this.props.positionSelmaY
      //transition: '0.8s',
    };
    //console.log(this.props.positionSelmaX, this.props.positionSelmaY)

    const styleSelma = {
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
