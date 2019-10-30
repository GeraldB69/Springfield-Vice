import React, { Component } from "react";
import "./homer.css";
import config from "./configSpringfieldVice.json";

// import homer from "./img/homersprite.png";
import donut from "./img/donut.png";
import ripchain from "./img/ripchain.png";

class Homer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ripchain: false,
			donut: false,
			throwing: false
		};
	}

	throwingDonut = () => {
		this.setState({ throwing: !this.state.throwing });
		//this.setState({ donut: false }); // A decommenter por faire disparaitre le donut lancé
	};

	// run = () => {
	// 	if (this.props.isRunning === false) 
	// 		return 'homerStand';
	// 	else if (this.props.isRunning === true) 
	// 		return 'homerRun';
	// 	if (this.props.isHomerRunningLeft === true)
	// 		return 'homerRun2';
	// }

	render() {
		// console.log(this.props.isRunning)
		const scaledPosY = this.props.positionY * config.homerSize.scale;

		const displayDonut = this.props.donut ? "block" : "none";
		const displayRipchain = this.state.ripchain ? "block" : "none";
		//console.log("coordonnées : ", this.props.positionX, " - ", this.props.positionY);

		const isHomerRunningLeft = this.props.isHomerRunningLeft ? 'homerRun2' : 'homerRun';
		const isRunning = this.props.isRunning ? isHomerRunningLeft : 'homerStand';
		
	
		const donutStyle = {
			display: displayDonut,
			width: config.donutSize.width,
			position: "absolute",
			left: "70%",
			bottom: "35px"
		};

		const ripchainStyle = {
			display: displayRipchain,
			width: "60px",
			position: "absolute",
			left: "50%",
			bottom: "0"
		};

		const homerZone = {
			width: "50px",
			height: "50px",
			backgroundColor: "transparent",
			left: `${this.props.positionX}px`,
			top: `${this.props.positionY}px`,
			transform: "scale(" + scaledPosY + ")",
			position: "absolute",
			borderRadius: "50%"
		};

		const homerStyle = {
			backgroundColor: "transparent",
			paddingBottom: "30px",
			height: config.homerSize.height,	
		};
		return (
			<div>
				<div style={homerZone}>
					<div style={homerStyle} className={isRunning}></div>
					
					<img src={ripchain} style={ripchainStyle} alt="ripchain" />
				</div>
			</div>
		);
	}
}

export default Homer;
