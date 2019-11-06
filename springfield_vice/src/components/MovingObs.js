import React, { Component } from "react";
import config from "./configSpringfieldVice.json";

class MovingObs extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const movingObszone = {
			width: "30px",
			height: "30px",
			backgroundColor: "white",
			borderRadius: "50%",
			position: "absolute",
			left: this.props.positionMovingObsX,
			top: this.props.positionMovingObsY,
			transform: "scale(" + this.props.positionMovingObsY * config.movingObs.scale + ")",
			transition: '0.8s',
		};
		console.log(this.props.positionMovingObsX, this.props.positionMovingObsY)

		const styleMovingObs = {
			width: "80px",
			height: "auto",
			position: "absolute",
			left: "-20px",
			top: "-20px",
			margin: 0,
			padding: 0,
			
        };

		return (
			<div>
				<div id="MovingObs" style={movingObszone}>
					<div style={styleMovingObs} />
				</div>
			</div>
		);
	}
}

export default MovingObs;
