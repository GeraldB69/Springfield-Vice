import React from "react";
import config from "./configSpringfieldVice.json";
import "./seymour.css";

function Seymour(props) {
  const seymourZone = {
    width: "30px",
    height: "30px",
    backgroundColor: "transparent",
    borderRadius: "50%",
    position: "absolute",
    left: props.positionSeymourX,
    top: props.positionSeymourY,
    transform: "scale(" + props.positionSeymourY * config.seymour.scale + ")",
    zIndex: props.positionSeymourY
    //transition: '0.8s',
  };
  //console.log(this.props.positionSeymourX, this.props.positionSeymourY)

  const styleSeymour = {
    width: "40px",
    height: "70px",
    position: "absolute",
    left: "-5px",
    top: "-40px",
    margin: 0,
    padding: 0
  };

  return (
    <div>
      <div id="Seymour" style={seymourZone}>
        <div className="seymourWalk" style={styleSeymour} />
      </div>
    </div>
  );
}

export default Seymour;
