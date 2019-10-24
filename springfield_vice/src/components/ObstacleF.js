import React, { Component } from "react";
import poubelles from "./img/poubelles.png";
import config from "./configSpringfieldVice.json";
//import { getRandomArbitrary } from "./helpers";




class ObstacleF extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
	
		const obstacleFzone = {
			width: "60px",
			height: "60px",
			backgroundColor: "white",
			borderRadius: "50%",
			position: "absolute",
            left: this.props.positionObstacleX,
            top: this.props.positionObstacleY,
            transform: "scale(" + this.props.positionYObstacleF * config.obstacleF.scale + ")"
        };

        const styleObstacleF = {
            width : "80px",
            height : "auto",
            position : "absolute",
            left : "-20px",
            top : "-20px",
            margin :0,
            padding: 0

        }
		

		return (
			<div>
                <div id="ObstacleF" style={obstacleFzone}>
                    <img src={poubelles} style={styleObstacleF} />
                </div>
			</div>
		);
	}
}

export default ObstacleF;
