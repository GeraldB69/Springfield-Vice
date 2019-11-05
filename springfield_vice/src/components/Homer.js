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
			hasThrownDonut: false,
		};
	}

	componentDidMount = () => {
		this.throwingDonut()
	}

	throwingDonut = () => {
		console.log("tata")
		if (this.props.throwing === true) {
			this.setState({
				hasThrownDonut: true
			})
		}
	};

	render() {
		// console.log(this.props.isRunning)
		const scaledPosY = this.props.positionY * config.homerSize.scale;
		
		const displayDonut = this.props.donutCount > 0 ? "block" : "block";
		const displayRipchain = this.state.ripchain ? "block" : "none";
		//console.log("coordonnées : ", this.props.positionX, " - ", this.props.positionY);
		
		const isHomerRunningLeft = this.props.isHomerRunningLeft ? 'homerRunLeft' : 'homerRun';
		const isRunning = this.props.isRunning ? isHomerRunningLeft : 'homerStand';
		const isThrowing = this.props.throwing ? 'homerThrow' : isRunning;
		const throwingDonut = this.props.throwing ? 'donutThrow': 'donutHide';
		// const throwDonut = this.state.hasThrownDonut ? 'donutThrow': 'donutHide';
		
		
		const donutStyle = {
			display: displayDonut,
			width: config.donutSize.width,
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
					<img src={donut} style={donutStyle} className={throwingDonut} alt="donut" />
					<img src={ripchain} style={ripchainStyle} alt="ripchain" />
				</div>
			</div>
		);
	}
}

export default Homer;
