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

	displayDonut = () => {
		// console.log(this.props.donutCount)
		if (this.props.donutCount > 0) {return "block"}
		else {return "none"}
	}

	render() {
		// console.log(this.props.isRunning)
		const scaledPosY = this.props.positionY * config.homerSize.scale;

		// const displayDonut = this.props.donut ? "block" : "none";
		const displayRipchain = this.state.ripchain ? "block" : "none";
		//console.log("coordonnées : ", this.props.positionX, " - ", this.props.positionY);

		const isHomerRunningLeft = this.props.isHomerRunningLeft ? 'homerRunLeft' : 'homerRun';
		const isRunning = this.props.isRunning ? isHomerRunningLeft : 'homerStand';
		const isThrowing = this.props.throwing ? 'homerThrow' : isRunning;
		
	
		const donutStyle = {
			display: this.displayDonut(),
			width: config.donutSize.width,
			position: "absolute",
			left: "65%",
			bottom: "60px"
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
					<div style={homerStyle} className={isThrowing} ></div>
					<img src={donut} style={donutStyle} alt="ripchain" />
					<img src={ripchain} style={ripchainStyle} alt="ripchain" />
				</div>
			</div>
		);
	}
}

export default Homer;
